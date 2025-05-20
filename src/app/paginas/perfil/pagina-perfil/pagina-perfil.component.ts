import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";
import { VoluntariosService } from '@app/services/voluntarios.service';
import { DatosVoluntarioComponent } from '@app/componentes/perfil/datos-voluntario/datos-voluntario.component';
import { ZonasVoluntarioComponent } from '@app/componentes/perfil/zonas-voluntario/zonas-voluntario.component';
import { BatidasVoluntarioComponent } from '@app/componentes/perfil/batidas-voluntario/batidas-voluntario.component';
import { BatidasAdministradorComponent } from "../../../componentes/perfil/batidas-administrador/batidas-administrador.component";
import { ZonasAdministradorComponent } from "../../../componentes/perfil/zonas-administrador/zonas-administrador.component";
import { LoaderComponent } from '@app/componentes/globales/loader/loader.component';

@Component({
  selector: 'app-pagina-perfil',
  imports: [HeaderComponent, FooterComponent, DatosVoluntarioComponent, ZonasVoluntarioComponent, BatidasVoluntarioComponent, BatidasAdministradorComponent, ZonasAdministradorComponent, LoaderComponent],
  templateUrl: './pagina-perfil.component.html',
  styleUrl: './pagina-perfil.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaPerfilComponent {
  cargando = true;
  constructor(private voluntariosService: VoluntariosService, private cdRef: ChangeDetectorRef) { }
  ngOnInit() {
    setTimeout(() => {
      this.cargando = false;
      this.cdRef.markForCheck();
    }, 300);
  }
  get rol(){
    return this.voluntariosService.getRol(); 
    
  }
}
