import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";
import { ZonasService } from '@app/services/zonas.service';
import { ActivatedRoute } from '@angular/router';
import { Batida, RespuestaBatidasZona } from '@app/services/batidas.service';
import { MapaZonasComponent } from '@app/componentes/mapa/mapa-zonas/mapa-zonas.component';
import { TarjetaBatidaComponent } from '@app/componentes/batidas/tarjeta-batida/tarjeta-batida.component';
import { LoaderComponent } from '@app/componentes/globales/loader/loader.component';

@Component({
  selector: 'app-pagina-batidas',
  imports: [HeaderComponent, FooterComponent, MapaZonasComponent, TarjetaBatidaComponent, LoaderComponent],
  templateUrl: './pagina-batidas.component.html',
  styleUrl: './pagina-batidas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaBatidasComponent implements OnInit {
  zonaId!: number
  ids!: string

  todaInfoBatidasZona: RespuestaBatidasZona[] = []
  batidasZona: Batida[] = []
  
  latitud!: number
  longitud!: number
  center!: google.maps.LatLngLiteral
  cargando = true;

  constructor(private zonaService: ZonasService, private router: ActivatedRoute, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.zonaId = params['zonaId']
      this.ids = params['ids']

      console.log(this.zonaId)
      console.log(this.ids)

      this.zonaService.verBatidasZona(this.zonaId, this.ids).subscribe({
        next: (data) => {
          this.todaInfoBatidasZona = [data]

          this.batidasZona = data.batidas

          console.log(this.todaInfoBatidasZona)
          
          this.latitud = this.todaInfoBatidasZona[0].latitud
          this.longitud = this.todaInfoBatidasZona[0].longitud
          this.center = {lat: this.todaInfoBatidasZona[0].latitud, lng: this.todaInfoBatidasZona[0].longitud}
          this.cargando = false;
          this.cdRef.detectChanges()
        },
        error: (err) => {
          console.log('Error al cargar las batidas de la zona', err)
        }
      })
    })
  }
}
