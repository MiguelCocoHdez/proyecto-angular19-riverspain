import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { VoluntariosService } from '@app/services/voluntarios.service';
import { ZonasService } from '@app/services/zonas.service';
import { MapaZonasComponent } from "../../mapa/mapa-zonas/mapa-zonas.component";
import { MapaZonasVoluntarioComponent } from "../mapa-zonas-voluntario/mapa-zonas-voluntario.component";

@Component({
  selector: 'app-zonas-voluntario',
  imports: [MapaZonasVoluntarioComponent],
  templateUrl: './zonas-voluntario.component.html',
  styleUrl: './zonas-voluntario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonasVoluntarioComponent {

  numeroVoluntario: string | null = null;
  zonas: any[] = [];

  constructor(private voluntariosService: VoluntariosService, private zonasService: ZonasService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit(){
    this.numeroVoluntario = this.voluntariosService.getNumeroVoluntario();
    if (this.numeroVoluntario) {
      this.zonasService.verZonasVoluntario(this.numeroVoluntario).subscribe({
        next: (zonas) => {
          this.zonas = zonas;
          this.cdRef.detectChanges();
        },
        error: (err) => {
          console.error('Error cargando las zonas', err);
        }
      });
    }
  }
}
