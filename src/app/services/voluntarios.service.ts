import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { createUserWithEmailAndPassword, Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

export interface Voluntario {
  id: number,
  nombre: string,
  apellidos: string,
  email: string,
  dni: string,
  numeroVoluntario: string,
  fechacreacion: string,
  rol: string
}

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private apiUrl = environment.apiURL+"/voluntarios"
  private rol: string | null = null;
  private numeroVoluntario: string | null = null;

  constructor(
    private http: HttpClient,
    private auth: Auth
  ) {}

  comprobarDNI(): Observable<String[]> {
    return this.http.get<Voluntario[]>(this.apiUrl).pipe(
      map(voluntarios => voluntarios.map(voluntario => voluntario.dni))
    )
  }

  verVoluntarios() {
    return this.http.get<Voluntario[]>(this.apiUrl)
  }

  crearVoluntario(datos: any) {
    return this.http.post(this.apiUrl, datos)
  }

  obtenerNumeroVoluntario(dni: string) {
    return this.http.get(`${this.apiUrl}/password?dni=${dni}`, {responseType: 'text'})
  }

  async registrarUsuarioEnFirebase(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth,email,password);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth,email,password);
  }

  obtenerRol(email: string) {
    return this.http.get(`${this.apiUrl}/rol?email=${email}`, {responseType: 'text'})	
  }

  setRol(rol: string) {
    this.rol = rol;
  }

  getRol() {
    return this.rol;
  }

  verVoluntarioNum(numeroVoluntario: string){
    const body = {numerovoluntario: numeroVoluntario}
    return this.http.post<Voluntario>(`${this.apiUrl}/verVoluntarioNum`, body)
  }

  setNumeroVoluntario(numeroVoluntario: string) {
    this.numeroVoluntario = numeroVoluntario;
  }
  
  getNumeroVoluntario() {
    return this.numeroVoluntario;
  }
}
