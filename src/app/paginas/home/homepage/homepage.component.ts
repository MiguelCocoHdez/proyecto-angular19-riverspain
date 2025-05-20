import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { HeaderComponent } from '@app/componentes/globales/header/header.component';
import { VideoHomeComponent } from "../../../componentes/home/video-home/video-home.component";
import { ExplorarEspeciesComponent } from "../../../componentes/home/explorar-especies/explorar-especies.component";
import { CustodiarZonaComponent } from "../../../componentes/home/custodiar-zona/custodiar-zona.component";
import { DefendemosComponent } from "../../../componentes/home/defendemos/defendemos.component";
import { DonacionesComponent } from "../../../componentes/home/donaciones/donaciones.component";
import { FormularioVoluntarioComponent } from "../../../componentes/home/formulario-voluntario/formulario-voluntario.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";
import { LoaderComponent } from '@app/componentes/globales/loader/loader.component';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, VideoHomeComponent, ExplorarEspeciesComponent, CustodiarZonaComponent, DefendemosComponent, DonacionesComponent, FormularioVoluntarioComponent, FooterComponent, LoaderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {
  cargando = true;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.cargando = false;
      this.cdRef.markForCheck();
    }, 300);
  }
}
