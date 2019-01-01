import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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
}
