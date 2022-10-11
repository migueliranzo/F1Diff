import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { map } from 'rxjs/operators';
import { GraphService } from '../services/graph.service';
@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

  URL: string;
  circuitdata:any;
  globe: any;
  eras = [1996,1997 ,1998 ,1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
  selectedEra: any;
  races$: any;
  selectedRace: any;
  arcRaces: any[]; 

  constructor(private router: Router, private graphService: GraphService) { }

  ngOnInit(): void {
    this.URL = this.graphService.URL;
//Pick a random season to display as arcs on the globe
var randomEra = this.eras[Math.floor(Math.random()*this.eras.length)];

  //Get all F1 circuits to display as dots in globe
  fetch( this.URL + 'circuits.json?limit=90').then(response => response.json()).then(data => {

    this.circuitdata = data.MRData.CircuitTable.Circuits;

    //Get the random f1 season data to display as arcs on the globe
    fetch(this.URL + randomEra + '.json').then(response => response.json()).then(data => {
      //Create previous circuit -> next circuit data model
      let seasonRaces = [];

      for (let i = 1; i < data.MRData.RaceTable.Races.length-1; i++) {
        const x = data.MRData.RaceTable.Races[i].Circuit.Location;
        const y = data.MRData.RaceTable.Races[i+1].Circuit.Location;
        seasonRaces.push({
          season: data.MRData.RaceTable.season,
          round: data.MRData.RaceTable.Races[i].round,
          startName: data.MRData.RaceTable.Races[i].raceName,
          endName: data.MRData.RaceTable.Races[i+1].raceName,
          startLat: x.lat,
          startLng: x.long,
          endLat: y.lat,
          endLng: y.long
        })
      }

      this.arcRaces = seasonRaces;

      //Create the map
      fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
      {

        // @ts-ignore 
        const world = Globe()
          (document.getElementById('globeViz'))
          .lineHoverPrecision(1)
          .atmosphereColor("cyan")
          .atmosphereAltitude(".15")

          //Globe earth creation
          .globeImageUrl('assets/earth-dark2.jpg')
          .backgroundColor('rgba(255,0,0,0)')   
          .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')) 
          .polygonCapColor(() => 'rgb(37,42,48)')
          .polygonSideColor(() => '#111315')
          .polygonStrokeColor(() => '#fffff')
          .polygonCapCurvatureResolution(1)

          //Globe points
          .hexBinPointsData(this.circuitdata)
          .hexBinPointLat(d => d.Location.lat)
          .hexBinPointLng(d => d.Location.long)
          .hexBinPointWeight(21)
          .hexAltitude(0.1)
          .hexTopColor(() => '#55aaff')
          .hexSideColor(() => '#ddeeff40')
          .hexLabel((d) =>  `
          <div style="text-align: center; cursor:pointer; display:flex; background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px); border-radius: 5px; padding: 10px 6px 10px 6px";">
          ${d.points[0].circuitName}, <b>&nbsp${d.points[0].Location.locality} </b>
          </div>`)
          .onHexHover((x)=> world.controls().autoRotate = !x)

          //Globe arcs
          .arcsData(this.arcRaces)
          .arcColor(d => [`rgba(223, 85, 51, 1)`, `rgba(223, 85, 51, 1)`])
          .arcDashLength(0.4)
          .arcDashGap(4)
          .arcLabel((d) => `<div style="background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px); border-radius: 5px; padding: 10px 6px 10px 6px";>
          ${d.startName} &#8594 ${d.endName}
          <div style="color: #959da5 !important; font-size: 14px;"> ${d.round}° round ${d.season} </div> 
            </div>`)
          .onArcClick(x=> this.arcToGraph(x))
          .arcDashInitialGap(() => Math.random() * 5)
          .arcDashAnimateTime(1000) 
          .onArcHover(hoverArc => world
          .arcColor(d => {
              const op = !hoverArc ? 0.9 : d === hoverArc ? 0.9 : 0.9 / 4;
              return [`rgba(223, 85, 51, ${op})`, `rgba(223, 85, 51, ${op})`];
            }).arcDashGap(Number(!hoverArc) * 4)
            .controls().autoRotate = !hoverArc
          
            )
          
          //World controls
          world.controls().maxPolarAngle = 2.5;
          world.controls().enableZoom = false;
          world.controls().autoRotate = true;
          world.controls().autoRotateSpeed = 0.3;  
          world.pointOfView({lat: 24, lng: 15, altitude: 2});
          this.globe = world;

      });

    });

  });

  }


  arcToGraph(x: any) {
  let cont = {era: x.season, round: x.round}; 
  this.router.navigate(['/graph',cont])
  }

  dropDownToGraph(){
    let cont = {era: this.selectedEra, round: this.selectedRace}; 
    this.router.navigate(['/graph',cont])
  }

  getYearEras(era) {
    this.races$ = this.graphService
      .getEras(era) //@ts-ignore
      .pipe(map((x) => x.MRData.RaceTable.Races));
  }

}
