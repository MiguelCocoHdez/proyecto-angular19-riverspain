import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PecesService, Pez } from '@app/services/peces.service';

@Component({
  selector: 'app-info-peces',
  imports: [],
  templateUrl: './info-peces.component.html',
  styleUrl: './info-peces.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoPecesComponent {
  pez!: Pez ;

  constructor(private pecesService: PecesService, private cdRef: ChangeDetectorRef, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pecesService.verPezId(id).subscribe((data) => {
      this.pez = data;
      this.cdRef.detectChanges();
    });
  }
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'https://static.vecteezy.com/system/resources/thumbnails/026/538/414/small_2x/fish-on-bait-black-white-error-404-flash-message-fishing-hobby-activity-monochrome-empty-state-ui-design-page-not-found-popup-cartoon-image-flat-outline-illustration-concept-vector.jpg';
    this.cdRef.detectChanges();
  }
}
