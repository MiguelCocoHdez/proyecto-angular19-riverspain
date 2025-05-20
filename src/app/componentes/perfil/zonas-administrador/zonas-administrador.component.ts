import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { InformesService } from '@app/services/informes.service';
import { ZonasService } from '@app/services/zonas.service';

@Component({
  selector: 'app-zonas-administrador',
  imports: [],
  templateUrl: './zonas-administrador.component.html',
  styleUrl: './zonas-administrador.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonasAdministradorComponent {

  zonas:any[] = [];

  constructor(private zonasService: ZonasService, private cdRef: ChangeDetectorRef,
    private informesService: InformesService
  ) { }

  ngOnInit() {
    this.zonasService.verZonas().subscribe((zonas) => {
      console.log(zonas);
      this.zonas = zonas;
      this.cdRef.detectChanges();
    });
  }

  generarInformeZonaPDF(idZona: number) {
    this.informesService.generarInformeZonaPDF(idZona, 'pdf').subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `informe_zona_${idZona}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url); 
      },
      error: (err) => {
        console.error('Error al generar el PDF:', err);
      }
    });
  }

  generarInformeZonaExcel(idZona: number) {
    this.informesService.generarInformeZonaExcel(idZona, 'excel').subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `informe_zona_${idZona}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url); 
      },
      error: (err) => {
        console.error('Error al generar el excel:', err);
      }
    });
  }
}
