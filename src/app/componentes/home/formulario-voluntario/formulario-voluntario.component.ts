import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VoluntariosService } from '@app/services/voluntarios.service';
import { CustomValidators } from '@app/validaciones/custom-validators';
import { firstValueFrom } from 'rxjs';
import { LoaderComponent } from "../../globales/loader/loader.component";

@Component({
  selector: 'app-formulario-voluntario',
  imports: [ReactiveFormsModule, NgClass, LoaderComponent],
  templateUrl: './formulario-voluntario.component.html',
  styleUrl: './formulario-voluntario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormularioVoluntarioComponent {
  formularioVoluntarios: FormGroup
  registroExitoso: boolean | null = null;
  formularioVisible: boolean = true;
  iniciandoDesvanecimiento: boolean = false;
  cargando = false;

  constructor(private formBuilder: FormBuilder, private voluntariosService: VoluntariosService, private validacionCustom: CustomValidators,
    private cdRef: ChangeDetectorRef
  ) {
    this.formularioVoluntarios = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      dni: formBuilder.control(
        '',
        {
          validators: [Validators.required, Validators.pattern(/^\d{8}[A-HJ-NP-TV-Z]$/)],
          asyncValidators: [validacionCustom.dniExiste()],
          updateOn: 'change'
        }
      ),
    })
  }

  async crearVoluntario() {
  if (this.formularioVoluntarios.valid) {
    const voluntarios = this.formularioVoluntarios.value;
    try {
      this.cargando = true;
      this.iniciandoDesvanecimiento = true;
      this.cdRef.detectChanges();

      // Esperamos a que termine la animación de desvanecimiento
      setTimeout(async () => {
        try {
          await firstValueFrom(this.voluntariosService.crearVoluntario(voluntarios));
          const password = await firstValueFrom(this.voluntariosService.obtenerNumeroVoluntario(voluntarios.dni));
          await this.voluntariosService.registrarUsuarioEnFirebase(voluntarios.email, password);

          this.cargando=false;
          this.formularioVisible = false;
          this.registroExitoso = true;
          this.iniciandoDesvanecimiento = false;
          this.cdRef.detectChanges();

          setTimeout(() => {
            this.registroExitoso = null;
            this.formularioVisible = true;
            this.formularioVoluntarios.reset();
            this.cdRef.detectChanges();
          }, 3000);
        } catch (error) {
          console.error("Error al crear el voluntario", error);
          this.cargando = false;
          this.formularioVisible = false;
          this.registroExitoso = false;
          this.iniciandoDesvanecimiento = false;
          this.formularioVoluntarios.reset();
          this.cdRef.detectChanges();
          
          setTimeout(() => {
            this.registroExitoso = null;
            this.formularioVisible = true;
            this.cdRef.detectChanges();
          }, 3000);
        }
      }, 500);
    } catch (error) {
      console.error(error);
    }
  } else {
    this.formularioVoluntarios.markAllAsTouched();
  }

  }

  @Output() loginClick = new EventEmitter<void>();
  mostrarLogin() {
    this.loginClick.emit();
  }

  @Input() mostrarInformacion1: boolean = true;
  @Input() mostrarInformacion2: boolean = true;
  @Input() mostrarInformacion3: boolean = true;
  @Input() estilosRegister1: boolean = false;
  @Input() estilosRegister2: boolean = false;
}
