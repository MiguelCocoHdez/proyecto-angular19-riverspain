import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BotonAguaComponent } from "../../globales/boton-agua/boton-agua.component";


@Component({
  selector: 'app-explorar-especies',
  imports: [BotonAguaComponent],
  templateUrl: './explorar-especies.component.html',
  styleUrl: './explorar-especies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorarEspeciesComponent {

}
