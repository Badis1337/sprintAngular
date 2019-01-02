import { Mandate } from './../models/Mandate';
import { Resource } from './../models/Resource';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AllResourcesService {
  listResources: Resource [] = [];
  constructor(private http: HttpClient) { }
  public getALlResources() {
    return this.http.get<Resource[]>('http://localhost:18080/l4c_map-v1-web/rest/others?n=3');
  }
  public getActivity(id: number) {
    return this.http.get('http://localhost:18080/l4c_map-v1-web/rest/applicant/abdouu?m=0&resID=' + id, {responseType: 'text'});
  }
  public getActivityBydate(id: number, from: string, to: string) {
    return this.http.
    // tslint:disable-next-line:max-line-length
    get('http://localhost:18080/l4c_map-v1-web/rest/applicant/abdouu?m=0&resID=' + id + '&from=' + from + '&to=' + to, {responseType: 'text'});
  }
  public getMandates(id: number) {
      return this.http.get<Mandate[]>('http://localhost:18080/l4c_map-v1-web/rest/applicant/abdouu?m=2&resID=' + id);
  }
}
