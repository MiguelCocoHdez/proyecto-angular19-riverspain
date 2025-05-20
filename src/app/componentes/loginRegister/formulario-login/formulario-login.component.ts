import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VoluntariosService } from '@app/services/voluntarios.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormularioLoginComponent {
  formularioUsuarios: FormGroup
  
  constructor(private formBuilder: FormBuilder, private voluntariosService: VoluntariosService,private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.formularioUsuarios = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  @Output() registroClick = new EventEmitter<void>();
  mostrarRegistro() {
    this.registroClick.emit();
  }

  errorLogin: string | null = null;

  async login(){
    try {
      await this.voluntariosService.login(this.formularioUsuarios.value.email, this.formularioUsuarios.value.password);
      console.log("El usuario se ha logueado en Firebase correctamente");
      this.errorLogin = null;
      const rol = await firstValueFrom(this.voluntariosService.obtenerRol(this.formularioUsuarios.value.email));
      this.voluntariosService.setRol(rol);
      const numeroVoluntario = this.formularioUsuarios.value.password;
      this.voluntariosService.setNumeroVoluntario(numeroVoluntario);
      this.router.navigate(['/perfilUsuario']);
    } catch (error: any) {
      console.error("Error al loguear el usuario", error);
      if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        this.errorLogin = "El email o la contraseña son incorrectos";
      } else if (error.code === 'auth/invalid-email') {
        this.errorLogin = "El email no es válido";
      }
      else {
        this.errorLogin = "Error desconocido, por favor intenta más tarde";
      }
    } finally {
      this.cdr.detectChanges(); //forzar los cambios
    }
  }
}
