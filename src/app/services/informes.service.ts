import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Informes {
  id: number;
  formato: string;
}

@Injectable({
  providedIn: 'root'
})
export class InformesService {

  private apiUrl = environment.apiURL+"/informes"

  constructor(private http: HttpClient) { }

  generarInformeBatidaPDF(idBatida: number, formato: string) {
    const params = new HttpParams()
    .set('id_batida', idBatida.toString())
    .set('formato', formato);

  return this.http.get(`${this.apiUrl}/batida`, {params, responseType: 'blob'});
  }
  
  generarInformeZonaPDF(idZona: number, formato: string) {
    const params = new HttpParams()
    .set('id_zona', idZona.toString())
    .set('formato', formato);

    return this.http.get(`${this.apiUrl}/zona`, {params, responseType: 'blob'});
  }

  generarInformeBatidaExcel(idBatida: number, formato: string) {
    const params = new HttpParams()
    .set('id_batida', idBatida.toString())
    .set('formato', formato);

  return this.http.get(`${this.apiUrl}/batida`, {params, responseType: 'blob'});
  }

  generarInformeZonaExcel(idZona: number, formato: string) {
    const params = new HttpParams()
    .set('id_zona', idZona.toString())
    .set('formato', formato);

  return this.http.get(`${this.apiUrl}/zona`, {params, responseType: 'blob'});
  }
}
