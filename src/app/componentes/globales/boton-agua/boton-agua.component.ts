import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-agua',
  imports: [],
  templateUrl: './boton-agua.component.html',
  styleUrl: './boton-agua.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotonAguaComponent {
  @Input() textoBoton : String = ''
  @Input() redirigir: String = ''
}
