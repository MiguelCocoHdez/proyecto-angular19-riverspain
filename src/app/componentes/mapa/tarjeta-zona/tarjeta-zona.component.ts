import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Zona, ZonasService } from '@app/services/zonas.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-tarjeta-zona',
  imports: [],
  templateUrl: './tarjeta-zona.component.html',
  styleUrl: './tarjeta-zona.component.css',
})
export class TarjetaZonaComponent implements OnInit {
  @Input() nombreZona: string = ''
  @Input() zona!: Zona 

  mensaje: string = ''
  numeroVoluntario: string | null = ''

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private zonaService: ZonasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const numeroVoluntarioRaw = localStorage.getItem('numeroVoluntario');
    this.numeroVoluntario = numeroVoluntarioRaw ? numeroVoluntarioRaw.trim() : null;

    console.log('numeroVoluntario recuperado:', this.numeroVoluntario);
  }

  irABatidas() {
    this.router.navigate(['zonas/mapaZonas/infoBatidas'], {
      queryParams: {
        zonaId: this.zona.id,
        ids: this.zona.batidaid?.join(',')
      }
    })
  }

  custodiarZona() {
    if (!this.numeroVoluntario) {
      this.mensaje = 'Número de voluntario no disponible'
      return
    }

    console.log('Enviando a backend: ', this.zona.nombre, this.numeroVoluntario)
    this.zonaService.insertarVoluntarioZona(this.zona.nombre, this.numeroVoluntario).subscribe({
      next: (respuesta) => {
        console.log('Respuesta OK:', respuesta)
        this.mensaje = 'Zona Custodiada con exito'
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.error('Error:', err);

        if (err.message === 'Error inesperado') {
          this.mensaje = 'Zona Custodiada con éxito';
        } else {
          this.mensaje = err.message || 'Zona ya custodiada';
        }

        this.cdr.detectChanges();
      }
    })
  }
}
