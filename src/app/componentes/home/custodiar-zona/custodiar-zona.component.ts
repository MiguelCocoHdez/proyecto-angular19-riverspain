import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BotonAguaComponent } from "../../globales/boton-agua/boton-agua.component";

@Component({
  selector: 'app-custodiar-zona',
  imports: [BotonAguaComponent],
  templateUrl: './custodiar-zona.component.html',
  styleUrl: './custodiar-zona.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustodiarZonaComponent {
  
}
