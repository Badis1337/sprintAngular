import { CountryModel } from './../models/CountryModel';
import { SkillModel } from './../models/SkillModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillCountryService {

  constructor(private http: HttpClient) { }
  public getSkills() {
    return this.http.get<SkillModel[]>('http://localhost:18080/l4c_map-v1-web/rest/skl?n=1');
  }
  public getCountry() {
    return this.http.get<CountryModel[]>('http://localhost:18080/l4c_map-v1-web/rest/skl?n=0');
  }
}
