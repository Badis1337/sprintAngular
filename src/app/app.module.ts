import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FullCalendarModule} from 'ng-fullcalendar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RessourcesCRUDComponent} from './Ressources/ressources-crud/ressources-crud.component';
import {RessourcesService} from './Ressources/ressources.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListeRessourcesComponent} from './liste-ressources/liste-ressources.component';
import {AjouterRessourceComponent} from './ajouter-ressource/ajouter-ressource.component';

@NgModule({
  declarations: [
    AppComponent,
    RessourcesCRUDComponent,
    ListeRessourcesComponent,
    AjouterRessourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule, ReactiveFormsModule
    ,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,


  ],
  providers: [RessourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
