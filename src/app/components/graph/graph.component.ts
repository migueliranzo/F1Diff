import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TeamcolorsService } from '../services/teamcolors.service';
import { map } from 'rxjs/operators';
import { GraphService } from '../services/graph.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  providers: [MessageService]
})
export class GraphComponent implements OnInit {
  @ViewChild("controls") myNameElem: ElementRef;
  playStatus: boolean = true;
  totalLaps;
  interval;
  selectedLap;
  selectedEra;
  selectedRound;
  single = [];
  rounds: any = [];
  eras = [
    1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021,2022
  ];

  //Graph settings
  view: [number, number] = [window.innerWidth > 1200 ? window.innerWidth/1.55 : window.innerWidth - 60, 650];
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Driver';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  customColors = [];

  positions: any[];
  lapTimes: any[];
  totalResults: any[] = [];
  stop: boolean = true;
  pitStopsInfo: any;
  pitStopInfo: any;
  finalResults: any[];
  finalResult: any;
  fastestLap: { driver: any; time: any; lap: any };
  retirements: any;
  retirementsInfo: any;
  startingGrid: any;
  rounds$: any;
  searched: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private colorService: TeamcolorsService,
    private graphService: GraphService,
    private messageService : MessageService
  ) {
    Object.assign(this, this.single);
  }


  onResize(event) {
    //@ts-ignore
    if(window.innerWidth < 1200){
      this.view = [window.innerWidth-60 , 650]
    }else{
      this.view = [event.target.innerWidth / 1.55, 650];
    }
}
  
showToast(option:string, msg:string) {
  this.messageService.add({severity:option, summary: option[0].toUpperCase() + option.substring(1), detail: msg});
}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('era') == undefined) {
        return;
      }
      var era = Number(params.get('era'));
      var round = params.get('round');
      this.selectedEra = era;
      this.selectedRound = round;
      this.getYearEras(era);
      this.getAndFormatLaps();
    });
  }

  flipy = () => (this.playStatus = !this.playStatus);

  getYearEras(era) {
    this.rounds$ = this.graphService
      .getEras(era) //@ts-ignore
      .pipe(map((x) => x.MRData.RaceTable.Races));
  }

  updateChartTimes(times, lap) {
    this.updateView(times[lap], lap);
    this.pitStopInfo = this.getLapPitStops(lap);
    this.retirementsInfo = this.getLapRetirements(lap);
  }

  updateView(times, lap) {
    this.selectedLap = lap;
    this.single = times;
    Object.assign(this, this.single);
  }

  getAndFormatLaps() {
    this.searched = true;
    this.customColors = this.colorService.getTeamColors(this.selectedEra);
    this.totalResults = [];

    this.resetRaceEvents();

    this.graphService
      .getLapTimes(this.selectedEra, this.selectedRound)
      .subscribe((response) => {
        
        if (response == 'notFound') {
          this.searched = false;
          this.showToast("error","No data for this race yet!");
          return;
        }
        
        let lapTimes = response;
        this.totalLaps = lapTimes.length;
        this.selectedLap = 0;

        this.setPositionsAndGaps(lapTimes);

        this.graphService
          .getPitStopts(this.selectedEra, this.selectedRound)
          .subscribe((response) => {
            if (response == 'notFound') {
              this.pitStopsInfo = [];
              this.showToast("info","No pit stop data for this race");
              return;
            }
            this.pitStopsInfo = this.orderPitStops(response, this.lapTimes);
          });

        this.graphService
          .getRaceResults(this.selectedEra, this.selectedRound)
          .subscribe((response) => {
            if (response == 'notFound') {
              this.startingGrid = []
              this.retirements = []
              this.showToast("info","No retirements data for this race");
              return;
            }
            this.startingGrid = this.getStartingGrid(response);
            this.retirements = this.getRaceRetirements(response);

            this.msTimesToGraph();
            this.totalResults.push(this.formatFinalResults(response));
            this.updateChartTimes(this.totalResults, this.selectedLap);
          });

        this.graphService
          .getFastestLap(this.selectedEra, this.selectedRound)
          .subscribe((response) => {
            if (response == 'notFound') {
              this.fastestLap = null;
              this.showToast("info","No fastest lap data for this race");
              return;
            }
            this.fastestLap = {
              driver: response.Driver.driverId.toUpperCase(),
              time: response.FastestLap.Time.time,
              lap: response.FastestLap.lap,
            };
          });
      });
  }

  msTimesToGraph() {
    for (let i = 0; i < this.lapTimes.length; i++) {
      let cleanResults = this.formatLapsForGraph(this.lapTimes, i);

      this.totalResults.push(cleanResults);
    }
    this.totalResults.unshift(this.startingGrid);
    console.log(this.totalResults);
  }

  setPositionsAndGaps(lapTimes) {
    let laplapTimes = [];
    let poslapTimes = [];

    for (let i = 0; i < lapTimes.length; i++) {
      const lapMap = new Map();
      const posMap = new Map();

      lapTimes[i].Timings.forEach((element) => {
        let msTime = this.laptimeToMS(element.time);
        let pos = element.position;

        posMap.set(element.driverId, pos);
        posMap.set(pos, element.driverId);

        if (i !== 0) {
          let value = laplapTimes[i - 1].get(element.driverId);

          lapMap.set(element.driverId, msTime + value);
        } else {
          lapMap.set(element.driverId, msTime);
        }
      });

      poslapTimes.push(posMap);
      laplapTimes.push(lapMap);
    }

    this.positions = poslapTimes;
    this.lapTimes = laplapTimes;
  }

  laptimeToMS(time) {
    let timeParts = time.split(':');

    let mins = parseInt(timeParts[0]) * 60000;
    let seconds = parseInt(timeParts[1].split('.')[0]) * 1000;
    let ms = parseInt(timeParts[1].split('.')[1]);

    return mins + seconds + ms;
  }

  resetRaceEvents() {
    this.finalResult = null;
    this.fastestLap = null;
    this.retirementsInfo = null;
    this.pitStopInfo = null;
  }

  formatLapsForGraph(times, lap) {
    let cleanResults = [];

    let fastest = this.getFastestTime(times, lap);
    let slowest = this.getSlowestTime(times, lap, fastest);

    const shortedTimes = new Map(
      [...times[lap].entries()].sort((a, b) => b[1] - a[1])
    );
    const reversedTimes: any = new Map(Array.from(shortedTimes).reverse());

    for (const [key, value] of reversedTimes.entries()) {
      if (value == fastest) {
        cleanResults.push({
          name: key.toUpperCase(),
          value: 100 - slowest,
          extra: { dif: 'Leading' },
        });
      } else {
        let curDriver = this.positions[lap].get(key);
        let aux = parseInt(curDriver) - 1;
        let driverInfront = this.positions[lap].get(aux.toString());

        let timeInFront = this.lapTimes[lap].get(driverInfront);

        let dif = (value - timeInFront) / 1000;

        cleanResults.push({
          name: key.toUpperCase(),
          value: (100 * fastest) / value - slowest,
          extra: { dif: dif },
        });
      }
    }
    return cleanResults;
  }

  getFastestTime(times, lap) {
    let fastest = 999999999;

    for (const [key, value] of times[lap].entries()) {
      if (value < fastest) {
        fastest = value;
      }
    }
    return fastest;
  }

  getSlowestTime(times, lap, fastest) {
    let slowest = 99999999;

    for (const [key, value] of times[lap].entries()) {
      if ((100 * fastest) / value < slowest) {
        slowest = (100 * fastest) / value;
      }
    }
    return slowest;
  }

  playUpdateChartTimes() {
    if (this.playStatus) {
      this.setPlayInterval(this.totalResults);
    } else {
      this.pauseTimesFromMap();
    }
  }

  pauseTimesFromMap() {
    clearInterval(this.interval);
    this.stop = true;
  }

  setPlayInterval(totalResults) {
    this.stop = false;
    this.interval = setInterval(() => {
      if (this.selectedLap <= this.totalLaps) {
        this.updateView(
          totalResults[this.selectedLap + 1],
          this.selectedLap + 1
        );

        this.pitStopInfo = this.getLapPitStops(this.selectedLap);
        this.retirementsInfo = this.getLapRetirements(this.selectedLap);
      } else {
        this.playStatus = !this.playStatus;
        this.pauseTimesFromMap();
      }
    }, 1 * 1000);
  }

  orderPitStops(pitStops, lapTimes) {
    let orderedPitStops: any = [];

    for (let i = 0; i < lapTimes.length; i++) {
      let test = pitStops.filter((x) => x.lap == i);

      if (test.length != 0) {
        orderedPitStops[i] = [];
        orderedPitStops[i].push(test);
      }
    }
    return orderedPitStops;
  }

  getLapPitStops(lap) {
    let pitters = [];

    if (this.pitStopsInfo == undefined) {
      return null;
    }
    if (this.pitStopsInfo[lap] != undefined) {
      this.pitStopsInfo[lap][0].forEach((x) => {
        pitters.push({
          name: x.driverId.toUpperCase(),
          stop: x.stop,
          duration: x.duration,
        });
      });
      return pitters;
    } else {
      return false;
    }
  }

  getRaceRetirements(data: any[]) {
    data.forEach((x) => {
      if (x.laps == 0) {
        x.laps = 1;
      }
    });

    var retirementMotives = ['Retired', 'Accident'];

    return data
      .filter(
        (x) => retirementMotives.includes(x.status) || x.positionText == 'R'
      )
      .map((x) => ({
        driver: x.Driver.driverId.toUpperCase(),
        retirementLap: x.laps,
        retirementMotive: x.status,
      }));
  }

  getLapRetirements(lap) {
    let retirements = [];
    this.retirements.forEach((element) => {
      if (element.retirementLap == lap) retirements.push(element);
    });

    if (retirements.length == 0) {
      return false;
    } else {
      return retirements;
    }
  }

  formatFinalResults(response) {
    console.log(response);
    
    this.finalResult = response
      .map((x) => ({
        name: x.Driver.driverId.toUpperCase(),
        textposition: x.position,
        position: x.position,
        finalTime: x.Time ? x.Time.time : x.status,
        gainedPositions: Number(x.grid) - Number(x.position),
      }))
      .sort((a, b) => (Number(a.position) > Number(b.position) ? 1 : -1));

    var increment: any = [10 * this.finalResult.length];
    return this.finalResult.map((x) => ({
      name: x.name.toUpperCase(),
      value: (increment = increment - 10),
    }));
  }

  getStartingGrid(data) {
    let sorted = data.sort((a, b) =>
      Number(a.grid) > Number(b.grid) ? 1 : -1
    );
    let temp = [];
    for (let i = 0; i < sorted.length; i++) {
      const driver = sorted[i];
      //API returns 0 when starting from the grid, we need to push them to the back to the array
      if (driver.grid == 0) {
        let adjustedDriver = { ...driver };
        sorted.splice(i, 1);
        adjustedDriver.grid = sorted.length;
        temp.push(adjustedDriver);
        i--;
      }
    }

    temp.forEach((x) => {
      sorted.push(x);
    });

    let formated = [];
    let fakeData = sorted.length * 10;

    for (let i = 0; i < sorted.length; i++) {
      fakeData -= 10;
      const x = sorted[i];
      formated.push({
        name: sorted[i].Driver.driverId.toUpperCase(),
        value: fakeData,
      });
    }
    return formated;
  }
}
