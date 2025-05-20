import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Batida {
  id: number
  nombre: string
  descripcion: string
  fecha: string
  voluntariosbatida: string
  zonaid: number
}

export interface RespuestaBatidasZona {
  id: number
  nombre: string,
  latitud: number,
  longitud: number
  voluntarioszona: string
  ciudadid: number
  batidaid?: number[]
  batidas: Batida[]
}

@Injectable({
  providedIn: 'root'
})
export class BatidasService {

  private apiUrl = environment.apiURL+"/batidas"
  private apiUrlSing = environment.apiURL+"/batida"

  constructor(private http: HttpClient) { }

  verBatidasVoluntario(numeroVoluntario: string){
    const body = {voluntariosbatida: numeroVoluntario}
    return this.http.post<Batida[]>(`${this.apiUrl}/verBatidasVoluntario`, body)
  }
  verBatidas(){
    return this.http.get<Batida[]>(`${this.apiUrl}`)
  }

  apuntarVoluntarioBatida(id_batida: number, codigo_voluntario: string) {
    return this.http.patch(`${this.apiUrlSing}/${id_batida}/${codigo_voluntario}/apuntarse`, {}).pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error: HttpResponse<any>) {
    let mensaje = ''

    if(error.status === 400) {
      mensaje = 'Voluntario ya apuntado a la batida'
    }

    return throwError(() => new Error(mensaje))
  }
}
