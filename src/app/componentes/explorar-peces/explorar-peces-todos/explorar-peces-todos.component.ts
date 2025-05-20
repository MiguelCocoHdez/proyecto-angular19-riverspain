import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '@app/componentes/globales/loader/loader.component';
import { TarjetaPecesComponent } from '@app/componentes/peces/tarjeta-peces/tarjeta-peces.component';
import { PecesService } from '@app/services/peces.service';

@Component({
  selector: 'app-explorar-peces-todos',
  imports: [LoaderComponent],
  templateUrl: './explorar-peces-todos.component.html',
  styleUrl: './explorar-peces-todos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorarPecesTodosComponent {

  peces: any[] = [];
  cargando = true;

  constructor(private pecesService: PecesService, private cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.pecesService.verpeces().subscribe((data: any) => {
      this.peces = data;
      this.cargando = false;
      this.cdRef.detectChanges();
    });
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
