import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaBatidasZona } from './batidas.service';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Zona {
  id: number
  nombre: string,
  latitud: number,
  longitud: number
  voluntarioszona: string
  ciudadid: number
  batidaid?: number[]
}

@Injectable({
  providedIn: 'root'
})

export class ZonasService {
  private apiUrl = environment.apiURL+"/zonas"

  constructor(private http: HttpClient) {}

  verZonas() {
    return this.http.get<Zona[]>(this.apiUrl)
  }

  verZonasCiudad(id: number) {
    let params = new HttpParams().set('idCiudad', id)

    return this.http.get<Zona[]>(this.apiUrl+'/verZonasCiudad', { params })
  }

  verBatidasZona(zonaid: number, ids: string) {
    let params = new HttpParams().set('zonaid', zonaid).set('ids', ids)

    return this.http.get<RespuestaBatidasZona>(this.apiUrl+'/verBatidasZona', { params })
  }

  insertarVoluntarioZona(nombreZona: string, numerovoluntario: string | null) {
    return this.http.patch(this.apiUrl+'/insertarVoluntarioZona', {'nombre': nombreZona, 'voluntarioszona': numerovoluntario}).pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error: HttpResponse<any>) {
    let mensaje = '';

  if (error.status === 409) {
    mensaje = 'El voluntario ya esta en la zona';
  } else if (error.status === 0) {
    mensaje = 'No se pudo conectar con el servidor.';
  } else {
    mensaje = 'Error inesperado';
  }

  return throwError(() => new Error(mensaje));
  }
  verZonasVoluntario(numeroVoluntario: string){
    const body = {voluntarioszona: numeroVoluntario}
    return this.http.post<Zona[]>(`${this.apiUrl}/verZonasVoluntario`, body)
  }
}
