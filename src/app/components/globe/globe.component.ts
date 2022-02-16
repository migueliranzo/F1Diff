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


 
  function test(label: any){
    console.log(label);
    console.log("lool");
  }


  fetch('http://localhost:8000/api/f1/circuits.json?limit=90').then(response => response.json()).then(data => {

    console.log(data.MRData.CircuitTable.Circuits);// @ts-ignore 
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
    
          // @ts-ignore 
          const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
          // @ts-ignore 
                // GDP per capita (avoiding countries with small pop)// @ts-ignore 
                const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
            
                fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
                {
                  
                  // @ts-ignore 
                  const world = Globe()
                    (document.getElementById('globeViz'))
                    .globeImageUrl('assets/earth-dark2.jpg')
                    .backgroundColor('rgba(0,0,0,0)')   
                    .lineHoverPrecision(0.2)// @ts-ignore 
                    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')) // @ts-ignore   .polygonAltitude(0.01)// @ts-ignore 
                    .polygonCapColor(() => 'rgb(37,42,48)')
                    .polygonSideColor(() => '#111315')
                    .polygonStrokeColor(() => '#fffff')// @ts-ignore 
                    .labelsData(this.circuitdata) // @ts-ignore 
                    .labelLat(d => d.Location.lat) // @ts-ignore 
                    .labelLng(d => d.Location.long) // @ts-ignore 
                    .labelText(d =>  d.Location.locality ) // @ts-ignore   //.labelSize(0.4) // @ts-ignore 
                    .labelAltitude(0.012)// @ts-ignore 
                    .labelSize(0.5)// @ts-ignore d => d.timesraced * 0.02
                    .labelDotRadius(0.5)// .labelDotRadius(0.4)
                    .labelColor(() => 'rgba(59, 241, 253, 0.75)')
                    .labelResolution(2)
                    .onLabelClick(test)
                
                    // Add auto-rotation
                  //  world.controls().autoRotate = true;
                    //world.controls().autoRotateSpeed = 0.6;  
                   // world.pointOfView({lat: 23, lng: 33, altitude: 2.7});
                    this.word2 = world;

                });
 
 
                   
          }

      }); 

    });
  
  });

 

  }

  test2(clickedPlace:any){
    console.log(clickedPlace);
    
    let lat =  clickedPlace[0].Location.lat;
    console.log(lat);
    let long = clickedPlace[0].Location.long;

    console.log(parseInt(lat) + 3);
    

    const map1 = clickedPlace.map((x: { Location: { lat: any; long: any; }; circuitName: any; }) => ({
      lat: x.Location.lat,
      lng: x.Location.long,
      size: 0.1,
      color: 'red'
    }));

    

    this.word2.pointsData(map1);
    this.word2.pointOfView({lat: parseInt(lat) - 9, lng: long, altitude: 1}, 444);
 
    
  }
  


}
