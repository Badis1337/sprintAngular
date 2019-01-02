import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ApplicantService} from './services/applicant.service';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantListComponent } from './applicant/applicant-list/applicant-list.component';
import { ApplicantAddComponent } from './applicant/applicant-add/applicant-add.component';
import { ApplicantProfileComponent } from './applicant/applicant-profile/applicant-profile.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { ProfileComponent } from './acceuil/profile/profile.component';
import { DemandComponent } from './acceuil/demand/demand.component';
import {QuizComponent} from './quizz/quiz/quiz.component';
import {QuizService} from './quizz/services/quiz.service';
import { AllApplicantComponent } from './acceuil/all-applicant/all-applicant.component';

const routes = [
  { path : 'Login',component : LoginComponent},
  { path : 'Acceuil',component : AcceuilComponent, children : [
    { path : 'Profile' , component: ProfileComponent},
      { path : 'Quizz' , component:QuizComponent },
      { path :'All',component:AllApplicantComponent}
    ]},
  { path : 'Register',component : RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    ApplicantListComponent,
    ApplicantAddComponent,
    ApplicantProfileComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DemandComponent,
    QuizComponent,
    AllApplicantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ApplicantService,QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
