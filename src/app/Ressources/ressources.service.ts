import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Ressource} from '../Models/Ressource';

@Injectable()
export class RessourcesService {

  constructor(private http: HttpClient) {
  }

  getConges(): Observable<any[]> {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/conge?id=1';

    return this.http.get<any[]>(url);
  }

  DeleteConges(id): Observable<any[]> {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/conge/' + id;

    return this.http.delete<any[]>(url);
  }

  AddConges(ev) {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/conge?idRessource=1';
    return this.http.post(url, ev).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });

  }

  PutConges(ev) {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/conge?idRessource=1';
    return this.http.put(url, ev).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });

  }

  PutCongesRes(ev) {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/conge?idResponsable=2';
    return this.http.put(url, ev).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });

  }

  GetRessources(): Observable<Ressource[]> {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/badis/0';
    return this.http.get<Ressource[]>(url);
  }

  Delete(d) {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/badis/' + d;

    return this.http.delete<any[]>(url);
  }

  AddRessource(res) {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/badis/';
    return this.http.post(url, res).subscribe(
      (val) => {
        console.log('POST call successful value returned in body',
          val);
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
      });
  }

  GetNbreRessources(): Observable<any[]> {
    let url = 'http://localhost:18080/l4c_map-v2-web/rest/badis/';
    return this.http.get<any[]>(url);


  }
}
