import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobeComponent } from './components/globe/globe.component';
import { GraphComponent } from './components/graph/graph.component';

const routes: Routes = [
  { path: '', component: GlobeComponent },
  {path: 'graph', component: GraphComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
