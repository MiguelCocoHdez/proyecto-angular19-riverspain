import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { HomepageComponent } from "../../home/homepage/homepage.component";
import { InfoZonasComponent } from "../../../componentes/zonas/info-zonas/info-zonas.component";
import { FormularioZonasComponent } from "../../../componentes/zonas/formulario-zonas/formulario-zonas.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";

@Component({
  selector: 'app-pagina-zonas',
  imports: [HeaderComponent, InfoZonasComponent, FormularioZonasComponent, FooterComponent],
  templateUrl: './pagina-zonas.component.html',
  styleUrl: './pagina-zonas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaZonasComponent {

}
