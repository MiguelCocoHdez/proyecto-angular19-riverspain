import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Pez {
  id: number
  nombrecomun: string
  nombrecientifico: string
  descripcion: string
  distribucion: string
  origen: string
  taxonomia: string
  biologiaecologia: string
  urlimagen: string
}

export interface RespuestaPez {
  id: number
  nombre: string
  descripcion: string
  imagen: string
  peces: Pez[]
}

@Injectable({
  providedIn: 'root'
})
export class PecesService {

  private apiUrl = environment.apiURL+"/peces";

  constructor(private http: HttpClient) { }

  verpeces(){
    return this.http.get<Pez[]>(`${this.apiUrl}`)
  }
  verPezId(id: number) {
    return this.http.get<Pez>(`${this.apiUrl}/verPezId/${id}`)
  }

}
