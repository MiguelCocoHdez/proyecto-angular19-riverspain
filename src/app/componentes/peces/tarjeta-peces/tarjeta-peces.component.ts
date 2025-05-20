import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pez, RespuestaPez } from '@app/services/peces.service';
import { RiosService } from '@app/services/rios.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LoaderComponent } from '@app/componentes/globales/loader/loader.component';

@Component({
  selector: 'app-tarjeta-peces',
  imports: [LoaderComponent],
  templateUrl: './tarjeta-peces.component.html',
  styleUrl: './tarjeta-peces.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class TarjetaPecesComponent implements OnInit{
  idRio!: number
  ids!: string

  peces: Pez[] = []

  constructor(private riosService: RiosService, private route: ActivatedRoute, private cdRef: ChangeDetectorRef, 
    @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

    cargando = true;

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      document.body.style.overflow = 'auto';
      if (backdrop) {
        backdrop.remove();
      }
    }

    this.route.queryParams.subscribe(params => {
      this.idRio = params['idRio']
      this.ids = params['ids']

      console.log(this.idRio)
      console.log(this.ids)

      this.riosService.verRiosPeces(this.idRio, this.ids).subscribe({
        next: (data: RespuestaPez) => {
          console.log(data)
          this.peces = data.peces
          this.cargando = false;
          this.cdRef.markForCheck();
          console.log(this.peces)
        },
        error: (err) => {
          this.cargando = false;
          console.log("error al obtener los peces", err)
        }
      })
    })
  }
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'https://static.vecteezy.com/system/resources/thumbnails/026/538/414/small_2x/fish-on-bait-black-white-error-404-flash-message-fishing-hobby-activity-monochrome-empty-state-ui-design-page-not-found-popup-cartoon-image-flat-outline-illustration-concept-vector.jpg';
    this.cdRef.detectChanges();
  }
  verInfoPez(idPez: number){
    this.router.navigate(['/info-peces', idPez]);
  }
}
