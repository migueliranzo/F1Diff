import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

  variable:any = null;

  constructor() { }

  ngOnInit(): void {

    

    let text = '{"Circuits":[{"circuitId":"adelaide","url":"http:\/\/en.wikipedia.org\/wiki\/Adelaide_Street_Circuit","circuitName":"Adelaide Street Circuit","Location":{"lat":"-34.9272","long":"138.617","locality":"Adelaide","country":"Australia"}},{"circuitId":"ain-diab","url":"http:\/\/en.wikipedia.org\/wiki\/Ain-Diab_Circuit","circuitName":"Ain Diab","Location":{"lat":"33.5786","long":"-7.6875","locality":"Casablanca","country":"Morocco"}},{"circuitId":"aintree","url":"http:\/\/en.wikipedia.org\/wiki\/Aintree_Motor_Racing_Circuit","circuitName":"Aintree","Location":{"lat":"53.4769","long":"-2.94056","locality":"Liverpool","country":"UK"}},{"circuitId":"albert_park","url":"http:\/\/en.wikipedia.org\/wiki\/Melbourne_Grand_Prix_Circuit","circuitName":"Albert Park Grand Prix Circuit","Location":{"lat":"-37.8497","long":"144.968","locality":"Melbourne","country":"Australia"}},{"circuitId":"americas","url":"http:\/\/en.wikipedia.org\/wiki\/Circuit_of_the_Americas","circuitName":"Circuit of the Americas","Location":{"lat":"30.1328","long":"-97.6411","locality":"Austin","country":"USA"}}]}';
    const obj = JSON.parse(text);
    console.log(obj.Circuits);
    
    let map = obj.Circuits;
    const map1 = map.map((x: { Location: { lat: any; long: any; }; circuitName: any; }) => ({
      lat: x.Location.lat,
      lng: x.Location.long,
      name: x.circuitName,
      size: 0.1,
      color: 'red'
    }));

 /*
   // @ts-ignore 
    Globe()
    .globeImageUrl('assets/earth-dark7.jpg')
    .pointsData(map1)
    .backgroundColor('rgba(0,0,0,0)')
    .pointAltitude('size')
    .onPointClick(test)
    .pointColor('color')
  (document.getElementById('globeViz'))
*/
  function test(label: any){
    console.log(label);
    console.log("lool");
  }


  fetch('http://localhost:8000/api/f1/circuits.json?limit=90').then(response => response.json()).then(data => {

    console.log(data.MRData.CircuitTable.Circuits);// @ts-ignore 
    this.variable = data.MRData.CircuitTable.Circuits;
    //console.log(data.MRData.RaceTable.Races[3].Circuit.Location.long);
    var itemsProcessed = 0;
    this.variable.forEach((element: any) => {

      let circuitId = element.circuitId;
      fetch('http://localhost:8000/api/f1/circuits/'+ circuitId +'/seasons.json').then(response => response.json()).then(data => {
        if(data.MRData.total == 0){

          element["timesraced"] = 0;
        }else{

          element["timesraced"] = parseInt(data.MRData.total);
        }
        console.log(data.MRData.total);
        itemsProcessed++;
        if(itemsProcessed === this.variable.length) {
    
          // @ts-ignore 
          const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
          // @ts-ignore 
                // GDP per capita (avoiding countries with small pop)// @ts-ignore 
                const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
            
                fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
                {
                  const maxVal = Math.max(...countries.features.map(getVal));
                  colorScale.domain([0, maxVal]);
            // @ts-ignore 
                  const world = Globe()
                   // .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
                  // .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
                    .globeImageUrl('assets/earth-dark2.jpg')
                    .backgroundColor('rgba(0,0,0,0)')   
                    .lineHoverPrecision(0.2)// @ts-ignore 
                    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')) // @ts-ignore   .polygonAltitude(0.01)// @ts-ignore 
                    .polygonCapColor(() => 'rgb(37,42,48)')
                    .polygonSideColor(() => '#111315')
                    .polygonStrokeColor(() => '#fffff')// @ts-ignore 
                    .labelsData(this.variable) // @ts-ignore 
                    .labelLat(d => d.Location.lat) // @ts-ignore 
                    .labelLng(d => d.Location.long) // @ts-ignore 
                    .labelText(d =>  d.Location.locality ) // @ts-ignore   //.labelSize(0.4) // @ts-ignore 
                    .labelAltitude(0.012)// @ts-ignore 
                    .labelSize(0.5)// @ts-ignore d => d.timesraced * 0.02
                    .labelDotRadius(0.5)// .labelDotRadius(0.4)
                    .labelColor(() => 'rgba(59, 241, 253, 0.75)')
                    .labelResolution(2)
                    .onLabelClick(test)
                  (document.getElementById('globeViz'))
                });
      
              
          }
      

      }); 

    

    });

 
    
 

  
  });
  /*
 // @ts-ignore
  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
 // @ts-ignore
  // GDP per capita (avoiding countries with small pop)
  const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

  fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
  {
    const maxVal = Math.max(...countries.features.map(getVal));
    colorScale.domain([0, maxVal]);
 // @ts-ignore
    const world = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
      .lineHoverPrecision(0) // @ts-ignore
      .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
      .polygonAltitude(0.06) // @ts-ignore
      .polygonCapColor(feat => colorScale(getVal(feat)))
      .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
      .polygonStrokeColor(() => '#111') // @ts-ignore
      .polygonLabel(({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
        GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
        Population: <i>${d.POP_EST}</i>
      `) // @ts-ignore
      .onPolygonHover(hoverD => world // @ts-ignore
        .polygonAltitude(d => d === hoverD ? 0.12 : 0.06) // @ts-ignore
        .polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
      )
      .polygonsTransitionDuration(300)
    (document.getElementById('globeViz1'))
  });


/*
  fetch('http://localhost:8000/api/f1/circuits.json?limit=90').then(res => res.json()).then(data => {  // @ts-ignore 
    Globe()
     // .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
     // .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
     //.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
     .globeImageUrl('assets/earth-dark7.jpg')
     .backgroundColor('rgba(0,0,0,0)')
      .labelsData(data.MRData.CircuitTable.Circuits) // @ts-ignore 
      .labelLat(d => d.Location.lat) // @ts-ignore 
      .labelLng(d => d.Location.long) // @ts-ignore 
      .labelText(d =>  d.Location.locality ) // @ts-ignore 
      .labelSize(0.4) // @ts-ignore 
      .labelDotRadius(0.4)
      .labelColor(() => 'rgb(225, 6, 0)')
      .labelResolution(2)
    (document.getElementById('globeViz'))
  });

    function test(point: any){
      console.log(point);
      console.log("lool");
    }
     
    */

    /*
    fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
      {// @ts-ignore 
        const world = Globe()
         // .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
         .globeImageUrl('assets/earth-dark7.jpg')
         .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.3)
          .hexPolygonColor(() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`)// @ts-ignore 
          .hexPolygonLabel(({ properties: d }) => `
            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            Population: <i>${d.POP_EST}</i>
          `)
          (document.getElementById('globeViz'))
      });

      */



   

  }

  


}
