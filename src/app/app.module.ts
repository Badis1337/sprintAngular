import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestModule } from './request/request.module';
import { RedirectChatComponent } from './redirect-chat/redirect-chat.component';
import {CommunicationModule} from './communication/communication.module';

@NgModule({
  declarations: [
    AppComponent,
    RedirectChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RequestModule,
    CommunicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
