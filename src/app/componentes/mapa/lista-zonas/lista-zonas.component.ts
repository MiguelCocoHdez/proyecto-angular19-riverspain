import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Zona } from '@app/services/zonas.service';
import { TarjetaZonaComponent } from '../tarjeta-zona/tarjeta-zona.component';
import { RespuestaBatidasZona } from '@app/services/batidas.service';

@Component({
  selector: 'app-lista-zonas',
  imports: [TarjetaZonaComponent],
  templateUrl: './lista-zonas.component.html',
  styleUrl: './lista-zonas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaZonasComponent {

  @Input() zonas: Zona[] | RespuestaBatidasZona[] = []
}
