import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FullCalendarModule} from 'ng-fullcalendar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RessourcesCRUDComponent} from './Ressources/ressources-crud/ressources-crud.component';
import {RessourcesService} from './Ressources/ressources.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RessourcesCRUDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule


  ],
  providers: [RessourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
