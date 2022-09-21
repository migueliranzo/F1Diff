import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  playStatus: boolean = true;

  totalLaps;
  interval;
  selectedLap;
  selectedEra;
  selectedRound;
  single = [];
  rounds: any = [];
  //eras = [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  eras = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  ];
  view: [number, number] = [1200, 700];

  // options
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Driver';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = 'Time';
  positions: any[];
  lapTimes: any[];
  totalResults: any[] = [];
  stop: boolean = true;
  pitStopsInfo: any;
  pitStopInfo:any;
  finalResults: any[];
  finalResultsObject: any;
  fastestLap: { driver: any; time: any; lap: any; };
  retirements: any;
  retirementsInfo: any;
  startingGrid: any;
  gainedPositions: any;

  constructor() {
    Object.assign(this, this.single);
  }

  testDif = [
    { name: 'hamilton', value: 3.812524877272125, extra: { dif: 0 } },
    { name: 'rosberg', value: 3.744292307592204, extra: { dif: 198000 } },
    { name: 'massa', value: 3.4428441906830187, extra: { dif: 878000 } },
    { name: 'vettel', value: 3.0609385372511753, extra: { dif: 1120000 } },
    { name: 'sainz', value: 2.4713801071243324, extra: { dif: 1746000 } },
    { name: 'nasr', value: 1.9551702538534812, extra: { dif: 1546000 } },
    { name: 'ricciardo', value: 1.9033816915331982, extra: { dif: 156000 } },
    { name: 'raikkonen', value: 1.2737065671289542, extra: { dif: 1910000 } },
    {
      name: 'max_verstappen',
      value: 1.0247460491046922,
      extra: { dif: 762000 },
    },
    { name: 'hulkenberg', value: 0.8731203895090403, extra: { dif: 466000 } },
    { name: 'perez', value: 0.4912825285983615, extra: { dif: 1180000 } },
    { name: 'button', value: 0.2405262605819587, extra: { dif: 780000 } },
    { name: 'ericsson', value: 0, extra: { dif: 752000 } },
  ];

  //A function could be made that takes a year and returns an array with the drivers and colors, make it work from 2000 to 2022
  customColors = [
    { name: 'perez', value: '#0000ff' },
    { name: 'alonso', value: '#1da8ba' },
    { name: 'ocon', value: '#1da8ba' },
    { name: 'max_verstappen', value: '#0000ff' },
    { name: 'hamilton', value: '#000000' },
    { name: 'bottas', value: '#000000' },
    { name: 'sainz', value: '#ff0000' },
    { name: 'norris', value: '#ff9800' },
    { name: 'gasly', value: '#ffffff' },
    { name: 'tsunoda', value: '#ffffff' },
    { name: 'leclerc', value: '#ff0000' },
    { name: 'ricciardo', value: '#ff9800' },
    { name: 'vettel', value: '#009688' },
    { name: 'stroll', value: '#009688' },
    { name: 'rusell', value: '#00bcd4' },
    { name: 'latifi', value: '#00bcd4' },
    { name: 'mick_schumacher', value: '#c0b7b7' },
    { name: 'mazepin', value: '#c0b7b7' },
    { name: 'raikkonen', value: '#eabcbc' },
    { name: 'giovinazzi', value: '#eabcbc' },
  ];

  onSelect(data: any): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    this.single = this.testDif;

  }

  flipy = () => this.playStatus = !this.playStatus; 

  getYearEras(era) {

    fetch('http://localhost:8000/api/f1/' + era + '.json').then((response) =>
      response.json().then((data) => {
        this.rounds = data.MRData.RaceTable.Races;
      })
    );
  }


  getLapTimes() {
    this.lapTimes = [];
    this.totalResults = [];

    fetch(
      'http://localhost:8000/api/f1/' +
        this.selectedEra +
        '/' +
        this.selectedRound +
        '/laps.json?limit=9999'
    ).then((response) =>
      response.json().then((data) => {
        let lapTimes = data.MRData.RaceTable.Races[0].Laps;

        this.totalLaps = lapTimes.length;

        this.selectedLap = 0;

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

        
        
      fetch('http://localhost:8000/api/f1/' +  this.selectedEra +  '/' +  this.selectedRound + '/pitstops.json').then( response => { response.json().then( data => {
        this.pitStopsInfo = this.orderPitStops(data.MRData.RaceTable.Races[0].PitStops, this.lapTimes);
      
      }) } );

      fetch('http://localhost:8000/api/f1/' +  this.selectedEra +  '/' +  this.selectedRound + '/results.json').then(response => { response.json().then( data => {
      this.finalResults = (data.MRData.RaceTable.Races[0].Results);

      console.log("🐢  ");
      
      this.startingGrid = this.getStartingGrid(data.MRData.RaceTable.Races[0].Results);
      this.retirements = this.getRetirements(data.MRData.RaceTable.Races[0].Results);
      console.log(this.finalResults);
      
      //this.gainedPositions == (this.getGainedPositions(data.MRData.RaceTable.Races[0].Results));
      this.msTimesToGraph();
      this.totalResults.push(this.formatFinalResults());
      
      this.updateChartTimes(this.totalResults, this.selectedLap);
      } )});

      fetch('http://localhost:8000/api/f1/' +  this.selectedEra +  '/' +  this.selectedRound + '/fastest/1/results.json').then(response => { response.json().then( data => {
        
        let fastestLapRaw = data.MRData.RaceTable.Races[0].Results[0];
        this.fastestLap = {driver: fastestLapRaw.Driver.driverId.toUpperCase(), time: fastestLapRaw.FastestLap.Time.time, lap: fastestLapRaw.FastestLap.lap};
        
        } )});
      
      }));
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

  formatLaps(times, lap) {
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
          extra: { dif: "Leading" },
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

  updateChartTimes(times, lap) { 
    this.updateView(times[lap], lap);
    this.pitStopInfo = this.getLapPitStops(lap);
    this.retirementsInfo = this.getLapRetirements(lap);
    
  }

  playUpdateChartTimes() {
    if(this.playStatus){
      this.setPlayInterval(this.totalResults);
    }else{
      this.pauseTimesFromMap();
      
    }
  
  }

  msTimesToGraph() {
    for (let i = 0; i < this.lapTimes.length; i++) {
      let cleanResults = this.formatLaps(this.lapTimes, i);
    
      this.totalResults.push(cleanResults);
    }
    this.totalResults.unshift(this.startingGrid);
    console.log(this.totalResults);
    
  }

  setPlayInterval(totalResults) {
      this.stop = false;
      this.interval = setInterval(() => {
        
        if (this.selectedLap <= this.totalLaps) {
          this.updateView(
            totalResults[this.selectedLap + 1],
            this.selectedLap + 1
            );
            
            this.pitStopInfo = this.getLapPitStops(this.selectedLap+1);
            this.retirementsInfo = this.getLapRetirements(this.selectedLap+1);

          } else {
            this.playStatus = !this.playStatus;
            this.pauseTimesFromMap();
          }
        }, 1 * 1000);
      
  }

  pauseTimesFromMap() {
    clearInterval(this.interval);
    this.stop = true;
  }

  updateView(times, lap) {
    this.selectedLap = lap;
    this.single = times;
    
    Object.assign(this, this.single);
  }

  laptimeToMS(time) {
    let timeParts = time.split(':');

    let mins = parseInt(timeParts[0]) * 60000;
    let seconds = parseInt(timeParts[1].split('.')[0]) * 1000;
    let ms = parseInt(timeParts[1].split('.')[1]);

    return mins + seconds + ms;
  }

  orderPitStops(pitStops,lapTimes){
    let orderedPitStops:any = [];

    for (let i = 0; i < lapTimes.length; i++) {
      let test = pitStops.filter( x => x.lap == i);
      
      if(test.length != 0){
        orderedPitStops[i] = [];
        orderedPitStops[i].push(test);
      }
    }
    return orderedPitStops;
  }

  getLapPitStops(lap){
    let stringPitStops = [];
    let pitters = [];

    
    if(this.pitStopsInfo[lap] != undefined){

      this.pitStopsInfo[lap][0].forEach(x => {
        pitters.push(({name: x.driverId.toUpperCase(), stop: x.stop, duration: x.duration}));  
      });
      return pitters;
      
  }else{
    return false;
  }
}

formatFinalResults(){
  this.finalResultsObject = this.finalResults.map(x => (({name: x.Driver.driverId.toUpperCase(), textposition: x.position, position: x.position, finalTime: x.Time? x.Time.time :  x.status, gainedPositions: Number(x.grid) - Number(x.position)})))
.sort((a,b) => Number(a.position) > Number(b.position) ? 1 : -1);

console.log(this.finalResultsObject);
  
  var increment:any = [200]
  return this.finalResultsObject.map(x => (({name: x.name.toUpperCase(), value: increment = (increment-10)})));
}

getRetirements(data:any[]){
  
  var retiremntMotives = ["Retired","Accident"];

  return data.filter(x=> retiremntMotives.includes(x.status) || x.positionText == "R").map(x=> ({driver:x.Driver.driverId.toUpperCase(),retirementLap: x.laps,retirementMotive: x.status}) );
}

getLapRetirements(lap){

  let retirements = [];
  this.retirements.forEach(element => {
    if(element.retirementLap == lap) retirements.push(element);
  });

  if(retirements.length == 0){

    return false;
  }else{
    return retirements;
  }
}

getStartingGrid(data){

    let sorted = data.sort((a,b) => Number(a.grid) > Number(b.grid) ? 1 : -1);

    let formated = [];

    let fakeData = 200;
    for (let i = 0; i < sorted.length; i++) {
      fakeData -= 10;
      const x = sorted[i];
      formated.push({name:sorted[i].Driver.driverId.toUpperCase(),value:fakeData});
    }

    return formated;    
}

getGainedPositions(data){

  let formated = data.map(x=> ({driver:x.Driver.driverId, gainedPositions: Number(x.grid) - Number(x.position)}));

  console.log("🥶 ");
  console.log(formated);
  
  
  return formated;
}

}

//Hacer iconos mas grandes/botones mas small

//TOOD Improve initial view, maybe dont show the graphic or show it empty?? or a big text saying waiting for input....

//TODO add spinners and block the play buttons you need to fetch first, add form msgs when the user clicks play and hasnt clicked fetch yet

//TODO Poner los colores del 2000 hasta hoy

//TODO  hacer el grafico responsive o algo

//TODO Olvidar landing page y globo, hacer la pagina como si fuerra una herramienta, no una webapp


