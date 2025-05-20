import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { ExplorarPecesTodosComponent } from "../../../componentes/explorar-peces/explorar-peces-todos/explorar-peces-todos.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";

@Component({
  selector: 'app-pagina-explorar-peces',
  imports: [HeaderComponent, ExplorarPecesTodosComponent, FooterComponent],
  templateUrl: './pagina-explorar-peces.component.html',
  styleUrl: './pagina-explorar-peces.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaExplorarPecesComponent {

}
