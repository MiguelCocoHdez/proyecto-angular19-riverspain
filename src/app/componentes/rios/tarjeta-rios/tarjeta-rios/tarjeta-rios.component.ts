import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-rios',
  imports: [],
  templateUrl: './tarjeta-rios.component.html',
  styleUrl: './tarjeta-rios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetaRiosComponent {
  @Input() nombre: string = ''
  @Input() descripcion: string = ''
  @Input() imagen: string = ''
}
