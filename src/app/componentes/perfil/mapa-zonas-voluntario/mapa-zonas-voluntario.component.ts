import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { GoogleMap, MapAdvancedMarker, MapInfoWindow } from '@angular/google-maps';
import { RespuestaBatidasZona } from '@app/services/batidas.service';
import { Zona } from '@app/services/zonas.service';

@Component({
  selector: 'app-mapa-zonas-voluntario',
  imports: [GoogleMap, MapAdvancedMarker, MapInfoWindow],
  templateUrl: './mapa-zonas-voluntario.component.html',
  styleUrl: './mapa-zonas-voluntario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapaZonasVoluntarioComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  @Input() idCiudad?: number
  @Input() latitud?: number
  @Input() longitud?: number
  @Input() center!: google.maps.LatLngLiteral
  zoom = 13
  @Input() zonas: Zona[] | RespuestaBatidasZona[] = []
  
  //infoWindowRef = viewChild.required(MapInfoWindow) //Referencia hacia el componente mapinfowindow
  //markersRef = viewChildren(MapAdvancedMarker)

  crearImgMarkerZona(zona: Zona): HTMLElement | null {
    if(isPlatformBrowser(this.platformId)) {
      const imgMarker = document.createElement('div')
      imgMarker.setAttribute('style', `
        background: linear-gradient(300deg, #3878d0 0%, #7bbcf1 100%); width: 38px; height: 40px; border-radius: 1.5rem; display: flex; align-items: center; justify-content: center;
      `);
      imgMarker.innerHTML = `<img src="img/logo-azul-claro.png" width="40" height="40"/>`

      return imgMarker
    }

    return null
  }

  abrirInfoMarker(zona: Zona, marker: MapAdvancedMarker) {
    const content = `
      <h1>${zona.nombre}</h1>
      <p>${zona.voluntarioszona}
    `

    //this.infoWindowRef().open(marker, false, content)
    console.log(zona)
  }


  mapOptions: google.maps.MapOptions = {
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    disableDefaultUI: false
  }
}
