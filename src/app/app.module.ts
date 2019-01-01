import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllResourcesComponent } from './all-resources/all-resources.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import {DatePipe} from '@angular/common';
import { DecisionComponent } from './decision/decision.component';

const routes: Routes = [
  {path: 'home', component: AllResourcesComponent},
  {path: 'details/:id/:from/:to', component: ResourceDetailsComponent},
  {path: 'decision', component: DecisionComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', component: AllResourcesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AllResourcesComponent,
    ResourceDetailsComponent,
    DecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
