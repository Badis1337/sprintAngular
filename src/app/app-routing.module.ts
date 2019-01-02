import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RedirectChatComponent} from './redirect-chat/redirect-chat.component';

const routes: Routes = [
  { path: 'communication/chat', component: RedirectChatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
