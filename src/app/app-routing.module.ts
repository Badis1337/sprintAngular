import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RessourcesCRUDComponent} from './Ressources/ressources-crud/ressources-crud.component';
import {ListeRessourcesComponent} from './liste-ressources/liste-ressources.component';
import {AjouterRessourceComponent} from './ajouter-ressource/ajouter-ressource.component';

const routes: Routes = [{path: 'Conges', component: RessourcesCRUDComponent},
  {path: 'Liste', component: ListeRessourcesComponent}, {path: 'AjouterRessource', component: AjouterRessourceComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
