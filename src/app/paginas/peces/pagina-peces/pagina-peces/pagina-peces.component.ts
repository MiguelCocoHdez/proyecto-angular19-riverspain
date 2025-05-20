import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RiosService } from '@app/services/rios.service';
import { HeaderComponent } from "../../../../componentes/globales/header/header.component";
import { FooterComponent } from "../../../../componentes/globales/footer/footer.component";
import { Pez, RespuestaPez } from '@app/services/peces.service';
import { TarjetaPecesComponent } from '@app/componentes/peces/tarjeta-peces/tarjeta-peces.component';

@Component({
  selector: 'app-pagina-peces',
  imports: [HeaderComponent, FooterComponent, TarjetaPecesComponent],
  templateUrl: './pagina-peces.component.html',
  styleUrl: './pagina-peces.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaPecesComponent {

}
