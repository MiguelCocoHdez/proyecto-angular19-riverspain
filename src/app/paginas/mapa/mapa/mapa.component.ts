import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";
import { MapaZonasComponent } from "../../../componentes/mapa/mapa-zonas/mapa-zonas.component";
import { ListaZonasComponent } from "../../../componentes/mapa/lista-zonas/lista-zonas.component";
import { Zona, ZonasService } from '@app/services/zonas.service';
import { ActivatedRoute } from '@angular/router';
import { RespuestaBatidasZona } from '@app/services/batidas.service';
import { LoaderComponent } from '@app/componentes/globales/loader/loader.component';

@Component({
  selector: 'app-mapa',
  imports: [HeaderComponent, FooterComponent, MapaZonasComponent, ListaZonasComponent, LoaderComponent],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaComponent implements OnInit {

  zonas: Zona[] = []
  idCiudad!: number
  latitud!: number
  longitud!: number
  center!: google.maps.LatLngLiteral
  cargando = true;

  constructor(private zonasService: ZonasService, private route: ActivatedRoute, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idCiudad = Number(params['idCiudad'])
      this.latitud = Number(params['latitud'])
      this.longitud = Number(params['longitud'])

      this.center = {lat: this.latitud, lng: this.longitud}
    })

    this.zonasService.verZonasCiudad(this.idCiudad).subscribe({
      next: (data) => {
        this.zonas = data
        this.cargando = false;
        this.cdRef.detectChanges()
        console.log(this.zonas)
      },
      error: (err) => {
        console.log('error al obtener las ciudades', err)
      }
    })
  }
}
