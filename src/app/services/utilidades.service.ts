import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Utilidades {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  private apiUrl = environment.apiURL+"/utilidades"

  constructor(private http: HttpClient) { }

  enviarEmailRecordatorio(idBatida: number) {
    return this.http.post(`${this.apiUrl}/enviar_recordatorio_manual/${idBatida}`, { responseType: 'text' });
  }
}
