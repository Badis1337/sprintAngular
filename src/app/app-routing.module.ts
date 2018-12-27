import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RessourcesCRUDComponent} from './Ressources/ressources-crud/ressources-crud.component';

const routes: Routes = [{path: 'Conges', component: RessourcesCRUDComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
