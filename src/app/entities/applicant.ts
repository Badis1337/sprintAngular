import {Demand} from './demand';
import {Arrival} from './arrival';
import {User} from './user';

export class Applicant extends User{
  picture:string ;
  country:string ;
  age:number ;
  chanceOfSuccess:number ;
  applicantState:string ;
  //ici la demande et l'arrival
  demand:Demand;
  arrival:Arrival;
}
