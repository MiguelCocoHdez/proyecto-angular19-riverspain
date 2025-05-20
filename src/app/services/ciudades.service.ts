import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Ciudad {
  id: number,
  nombre: string,
  latitud: number,
  longitud: number
}

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  private apiUrl = environment.apiURL+"/ciudades"

  constructor(private http: HttpClient) {}

  verCiudades() {
    return this.http.get<Ciudad[]>(this.apiUrl)
  }
}
