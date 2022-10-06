import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private httpClient: HttpClient) { }

  getEras(era){
    return this.httpClient.get('http://localhost:8000/api/f1/' + era + '.json');
  }

  getPitStopts(era, round){ //@ts-ignore
    return this.httpClient.get('http://localhost:8000/api/f1/' +  era +  '/' +  round + '/pitstops.json').pipe(map(x=> x.MRData.RaceTable.Races[0].PitStops), catchError(err => of('notFound')));
  }

  getRaceResults(era, round){ //@ts-ignore
    return this.httpClient.get('http://localhost:8000/api/f1/' +  era +  '/' +  round + '/results.json').pipe(map(x=> x.MRData.RaceTable.Races[0].Results), catchError(err => of('notFound')));
  }

  getFastestLap(era, round){//@ts-ignore
    return this.httpClient.get('http://localhost:8000/api/f1/' + era +  '/' + round + '/fastest/1/results.json').pipe(map(x=> x.MRData.RaceTable.Races[0].Results[0]), catchError(err => of('notFound')));
  }

  getLapTimes(era, round){ //@ts-ignore
    return this.httpClient.get('http://localhost:8000/api/f1/' + era +'/' + round +'/laps.json?limit=9999').pipe(map(x=> x.MRData.RaceTable.Races[0].Laps), catchError(err => of('notFound')));
  }
}