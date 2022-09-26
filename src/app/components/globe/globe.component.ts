import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

  circuitdata:any = null;
  word2: any;

  constructor() { }

  ngOnInit(): void {
// @ts-ignore 
 //   const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
   // .domain([0, 1e7]);
// @ts-ignore 



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
    var itemsProcessed = 0;
    this.circuitdata.forEach((element: any) => {

      let circuitId = element.circuitId;
      fetch('http://localhost:8000/api/f1/circuits/'+ circuitId +'/seasons.json').then(response => response.json()).then(data => {
        if(data.MRData.total == 0){

          element["timesraced"] = 0;
        }else{

          element["timesraced"] = parseInt(data.MRData.total);
        }
        console.log(data.MRData.total);
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

                  // @ts-ignore 
                  const world = Globe()
                    (document.getElementById('globeViz'))
                    .globeImageUrl('assets/earth-dark2.jpg')
                    .backgroundColor('rgba(255,0,0,0.10)')   
                    // @ts-ignore 
                    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')) // @ts-ignore   .polygonAltitude(0.01)// @ts-ignore 
                    .polygonCapColor(() => 'rgb(37,42,48)')
                    .polygonSideColor(() => '#111315')
                    .polygonStrokeColor(() => '#fffff')// @ts-ignore 
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
                    .onTileHover(() => world.controls().autoRotate = true )

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
                    .hexSideColor(() => '#ddeeff40')// @ts-ignore 
                    .hexLabel((d) =>  `
                    <div style="text-align: center; cursor:pointer; display:flex; background-color: rgb(0,0,0,0.3)">
                    ${d.points[0].circuitName}, <b>&nbsp${d.points[0].Location.locality} </b>
                    </div>`)
                    .onHexHover(()=> world.controls().autoRotate = false)
                    .onPointHover((d)=> console.log(d))

                    .lineHoverPrecision(0)
                    .arcsData(arcsData)
                    .arcColor('color')
                    .arcDashLength(0.4)
                    .arcDashGap(4)
                    .arcDashInitialGap(() => Math.random() * 5)
                    .arcDashAnimateTime(1000);
                    
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



  //IDEA, SHOW ONLY THE RACES ON A PER YEAR BASES, SO ONLY THE 2021 CIRCUITS 
  //THEN SHOW AN ARC FROM RACE TO RACE IN ORDER THEY ARE RACED, so it shows like ooo so cool it goes from spain to italy, bla bla...

  //Example of arcs: https://globe.gl/#points-layer on the hightlight arc section and the random arcs, we can also get some samples at and https://github.com/vasturiano/three-globe#utility arc section aswell

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
