import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Batida, BatidasService } from '@app/services/batidas.service';

@Component({
  selector: 'app-tarjeta-batida',
  imports: [],
  templateUrl: './tarjeta-batida.component.html',
  styleUrl: './tarjeta-batida.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetaBatidaComponent implements OnInit {

  @Input() batida!: Batida

  nVoluntariosBatida: string[] = []
  numeroVoluntario: string  = ''
  mensaje: string = ''

  constructor(private batidasService: BatidasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(localStorage.getItem('numeroVoluntario') != undefined) {
      this.numeroVoluntario = localStorage.getItem('numeroVoluntario') || ''
    }
    else {
      this.numeroVoluntario = ''
    }

    if(this.batida.voluntariosbatida !== null) {
      this.nVoluntariosBatida = this.batida.voluntariosbatida.split(',')
    }
  }

  custodiarBatida() {
    this.batidasService.apuntarVoluntarioBatida(this.batida.id, this.numeroVoluntario).subscribe({
      next: (respuesta) => {
        this.mensaje = 'Apuntado a la batida con exito'
        this.cdr.detectChanges()
      },
      error: (err) => {
        this.mensaje = 'Voluntario ya apuntado a la batida', err
        this.cdr.detectChanges()
      }
    })
  }
}
