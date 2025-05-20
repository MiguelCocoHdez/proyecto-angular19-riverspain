import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { InfoPecesComponent } from "../../../componentes/explorar-peces/info-peces/info-peces.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";

@Component({
  selector: 'app-info-peces-pagina',
  imports: [HeaderComponent, InfoPecesComponent, FooterComponent],
  templateUrl: './info-peces-pagina.component.html',
  styleUrl: './info-peces-pagina.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPecesPaginaComponent {

}
