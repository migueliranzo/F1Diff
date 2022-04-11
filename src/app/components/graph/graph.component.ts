import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {

  selectedEra;
  single = [];
  rounds:any = [];
  eras = [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  
  view: [number,number] = [1200, 700];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Driver';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';


  constructor() {
  //  Object.assign(this, this.single);
  }
  

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {

    fetch('http://localhost:8000/api/f1/2020/3/results.json').then(response => response.json()).then(data => {

          let results =  data.MRData.RaceTable.Races[0].Results

          console.log(results);
          
          let cleanResults = [];

          results.forEach(element => {
         
          
              cleanResults.push({"name": element.Driver.givenName, "value": element.position});
            
          
          });

          this.single = cleanResults;

    });

    Object.assign(this, this.single);
  }

  getYearEras(era){

    console.log(era);
    
    fetch('http://localhost:8000/api/f1/' + era + '.json').then(response => response.json().then(data=> {

         this.rounds = data.MRData.RaceTable.Races;

    }));
    
    
  }

  getRaceData(race){

    console.log(race);
    console.log(this.selectedEra);
    
   fetch('http://localhost:8000/api/f1/' + this.selectedEra + '/' + race + '/results.json').then(response => response.json().then(data=> {

    let results =  data.MRData.RaceTable.Races[0].Results

    console.log(results);
    
    let cleanResults = [];

    results.forEach(element => {
   
        cleanResults.push({"name": element.Driver.givenName, "value": element.position});
      
    
    });

    this.single = cleanResults;

   }));
    
  }

}
 