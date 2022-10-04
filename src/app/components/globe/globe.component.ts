import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

  circuitdata:any = null;
  word2: any;
  flip: any = 0;
  eras = [1996,1997 ,1998 ,1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
  
  globeSeasons: any[] = null; 
  constructor(private router: Router) { }

  ngOnInit(): void {
// @ts-ignore 
 //   const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
   // .domain([0, 1e7]);
// @ts-ignore 

var selectedEra = this.eras[Math.floor(Math.random()*this.eras.length)];


// Gen random data
const GRID_SIZE = [1, 1];
const COLORS = ['rgb(255,255,255,0.1)'];
// @ts-ignore 
const materials = COLORS.map(color => new THREE.MeshLambertMaterial({ color, opacity: 0.0, transparent: true }));
const tileWidth = 360 / GRID_SIZE[0];
const tileHeight = 180 / GRID_SIZE[1];
const tilesData = [];
[...Array(GRID_SIZE[0]).keys()].forEach(lngIdx =>
  [...Array(GRID_SIZE[1]).keys()].forEach(latIdx =>
    tilesData.push({
      lng: -180 + lngIdx * tileWidth,
      lat: -90 + (latIdx + 0.5) * tileHeight,
      material: materials[Math.floor(Math.random() * materials.length)]
    })
  )
);

  function test(label: any){
    console.log(label);
    console.log("lool");
  }
  
  const getTooltip = d => `
  <div style="text-align: center; display:flex; background-color: rgb(0,0,0,0.3)">
  ${d.Location.locality}
  </div>
`;

  fetch('http://localhost:8000/api/f1/circuits.json?limit=90').then(response => response.json()).then(data => {

   // console.log(data.MRData.CircuitTable.Circuits);// @ts-ignore 
    this.circuitdata = data.MRData.CircuitTable.Circuits;
    //console.log(data.MRData.RaceTable.Races[3].Circuit.Location.long);

    fetch('http://localhost:8000/api/f1/' + selectedEra + '.json').then(response => response.json()).then(data => {
      console.log(data);
      let seasonRaces = [];
      for (let i = 1; i < data.MRData.RaceTable.Races.length-1; i++) {
        const x = data.MRData.RaceTable.Races[i].Circuit.Location;
        const y = data.MRData.RaceTable.Races[i+1].Circuit.Location;
        console.log(x)
        seasonRaces.push({
          season: data.MRData.RaceTable.season,
          round: data.MRData.RaceTable.Races[i].round,
          startName: data.MRData.RaceTable.Races[i].raceName,
          endName: data.MRData.RaceTable.Races[i+1].raceName,
          startLat: x.lat,
          startLng: x.long,
          endLat: y.lat,
          endLng: y.long,
          color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
        })
      }
      this.globeSeasons = seasonRaces;
      console.log(this.globeSeasons);
    });

    var itemsProcessed = 0;
    this.circuitdata.forEach((element: any) => {

      let circuitId = element.circuitId;
      fetch('http://localhost:8000/api/f1/circuits/'+ circuitId +'/seasons.json').then(response => response.json()).then(data => {
        if(data.MRData.total == 0){

          element["timesraced"] = 0;
        }else{

          element["timesraced"] = parseInt(data.MRData.total);
        }

        itemsProcessed++;
        if(itemsProcessed === this.circuitdata.length) {
    
                fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
                {
                  const N = 20;
                  const arcsData = [...Array(N).keys()].map(() => ({
                    startLat: (Math.random() - 0.5) * 180,
                    startLng: (Math.random() - 0.5) * 360,
                    endLat: (Math.random() - 0.5) * 180,
                    endLng: (Math.random() - 0.5) * 360,
                    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
                  }));

                  console.log(arcsData);
                  

                  // @ts-ignore 
                  const world = Globe()
                    (document.getElementById('globeViz'))
                    .lineHoverPrecision(1)
                    .globeImageUrl('assets/earth-dark2.jpg')
                    .backgroundColor('rgba(255,0,0,0)')   
                    // @ts-ignore 
                    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')) // @ts-ignore   .polygonAltitude(0.01)// @ts-ignore 
                    .polygonCapColor(() => 'rgb(37,42,48)')
                    .polygonSideColor(() => '#111315')
                    .polygonStrokeColor(() => '#fffff')// @ts-ignore 
                    .polygonCapCurvatureResolution(1)
                    .labelsData(this.circuitdata) // @ts-ignore 
                    .labelLat(d => d.Location.lat) // @ts-ignore 
                    .labelLng(d => d.Location.long) // @ts-ignore 
                    .labelText(d =>  d.Location.locality ) // @ts-ignore   
                    .hexLabel(getTooltip)
                    .pointLabel(getTooltip)
                    .labelLabel(getTooltip)
                    //.labelSize(0.4) // @ts-ignore 
                    .labelAltitude(0.012)// @ts-ignore 
                    .labelSize(0.0)// @ts-ignore d => d.timesraced * 0.02
                    .labelDotRadius(0.0)// .labelDotRadius(0.4)
                    .labelColor(() => 'rgba(59, 241, 253, 0.75)')
                    .labelResolution(2)
                    .onLabelClick(test) // @ts-ignore 
                    .atmosphereColor("cyan")
                    .atmosphereAltitude(".15")
// @ts-ignore 


                    .tilesData(tilesData)
                    .tileWidth(tileWidth)
                    .tileHeight(tileHeight)
                    .tileMaterial('material')
                    .tileAltitude(0.035)

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

                    .arcsData(this.globeSeasons)
                    .arcColor(d => [`rgba(225, 6, 0, 1)`, `rgba(225, 6, 0, 1)`])
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
                        return [`rgba(225, 6, 0, ${op})`, `rgba(225, 6, 0, ${op})`];
                      }).arcDashGap(Number(!hoverArc) * 4)
                      .controls().autoRotate = !hoverArc
                    
                      )
                    

                    // Add auto-rotation
                    world.controls().autoRotate = true;
                    world.controls().autoRotateSpeed = 0.3;  
                    world.pointOfView({lat: 23, lng: 33, altitude: 2.7});
                    this.word2 = world;



                });
            
          }

      }); 

    });
  
  });

  
  }
  arcToGraph(x: any) {
  let cont = {era: x.season, round: x.round}; 
  console.log(cont);
  
  this.router.navigate(['/graph',cont])
  }



  //Check if you can improve the globe astehtics, make it cooler like the github one -> the height of the border should be smaller probably, depends on final globe size
  //Check Github globe as we are sheeking some same position/protagonism on our website, cool tailwind tags + the globe, the globe is decoration afterall

  test2(clickedPlace:any){
    console.log(clickedPlace);
    
    let lat =  clickedPlace[0].Location.lat;
    let long = clickedPlace[0].Location.long;


    const map1 = clickedPlace.map((x: { Location: { lat: any; long: any; }; circuitName: any; }) => ({
      lat: x.Location.lat,
      lng: x.Location.long,
      name: x.circuitName,
      size: 0.1,
      color: 'red'
    }));

  
    this.word2.pointsData(map1);
    this.word2.pointOfView({lat: parseInt(lat) - 9, lng: long, altitude: 1}, 444);
    
    
  }
  


}
