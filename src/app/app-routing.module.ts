import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobeComponent } from './components/globe/globe.component';
import {BarComponent} from './components/bar/bar.component'
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  {path: 'globe', component: GlobeComponent},
  {path: 'graph', component: GraphComponent},
  {path: 'd3Test', component: BarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
