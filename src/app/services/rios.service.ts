import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaPez } from './peces.service';
import { environment } from 'src/environments/environment';

export interface Rios {
  id: number,
  nombre: string,
  descripcion: string,
  imagen: string,
  pezid: number[]
}

@Injectable({
  providedIn: 'root'
})

export class RiosService {
  private apiUrl = environment.apiURL+"/rios"

  constructor(private http: HttpClient) {}

  verRios() {
    return this.http.get<Rios[]>(this.apiUrl)
  }

  verRiosPeces(idRio: number, ids: string) {
    let params = new HttpParams().set('idRio', idRio).set('ids', ids)

    return this.http.get<RespuestaPez>(this.apiUrl+'/verRiosPeces', { params }) //hacer la llamada normal pasandole los parametros
  }
}
