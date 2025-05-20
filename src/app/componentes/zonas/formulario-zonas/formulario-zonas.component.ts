import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudad, CiudadesService } from '@app/services/ciudades.service';
import { CustomValidators } from '@app/validaciones/custom-validators';

@Component({
  selector: 'app-formulario-zonas',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-zonas.component.html',
  styleUrl: './formulario-zonas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormularioZonasComponent implements OnInit {

  formularioZonas: FormGroup

  constructor(private ciudadesService: CiudadesService, private formBuilder: FormBuilder, private router: Router, private validacionCustom: CustomValidators) {
    this.formularioZonas = formBuilder.group({
      numeroVoluntario: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
          asyncValidators: [this.validacionCustom.numeroVoluntarioExiste()],
          updateOn: 'change'
        }
      ),
      zonaSeleccionada: [null]
    })
  }

  ciudades: Ciudad[] = []

  ngOnInit(): void {
    this.ciudadesService.verCiudades().subscribe({
      next: (data) => {
        this.ciudades = data
        console.log(this.ciudades)
      },
      error: (err) => {
        console.error('error al obtener ciudades', err)
      }
    })
  }

  irAlMapa() {
    console.log(this.formularioZonas.value);


    const idCiudad = this.formularioZonas.get('zonaSeleccionada')?.value
    const latitud = this.ciudades[idCiudad-1].latitud
    const longitud = this.ciudades[idCiudad-1].longitud
    const numeroVoluntario = this.formularioZonas.get('numeroVoluntario')?.value

    
    if(this.formularioZonas.valid) {
      localStorage.setItem('numeroVoluntario', numeroVoluntario)

      this.router.navigate(['zonas/mapaZonas'], {
        queryParams: {
          idCiudad: idCiudad,
          latitud: latitud,
          longitud: longitud
        }
      })
    }
    else {
      this.formularioZonas.markAllAsTouched()

      this.formularioZonas.updateValueAndValidity();
    }
  }
}
