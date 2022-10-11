import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DropdownModule} from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import { GlobeComponent } from './components/globe/globe.component';
import {OrderListModule} from 'primeng/orderlist';
import { GraphComponent } from './components/graph/graph.component';
import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    ToastModule,
    NgxChartsModule,
    AppRoutingModule,
    SplitButtonModule,
    ButtonModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
