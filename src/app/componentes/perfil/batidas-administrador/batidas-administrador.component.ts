import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BatidasService } from '@app/services/batidas.service';
import { InformesService } from '@app/services/informes.service';
import { UtilidadesService } from '@app/services/utilidades.service';

@Component({
  selector: 'app-batidas-administrador',
  imports: [],
  templateUrl: './batidas-administrador.component.html',
  styleUrl: './batidas-administrador.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BatidasAdministradorComponent {

  batidas: any[] = [];
  constructor(private batidasService: BatidasService, private cdRef: ChangeDetectorRef,
    private informesService: InformesService, private utilidadesService: UtilidadesService
  ) { }

  ngOnInit() {
    this.batidasService.verBatidas().subscribe((batidas) => {
      console.log(batidas);
      this.batidas = batidas;
      this.cdRef.detectChanges();
    });
  }

  generarInformeBatidaPDF(idBatida: number) {
    this.informesService.generarInformeBatidaPDF(idBatida, 'pdf').subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `informe_batida_${idBatida}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url); 
      },
      error: (err) => {
        console.error('Error al generar el PDF:', err);
      }
    });
  }

  generarInformeBatidaExcel(idBatida: number) {
    this.informesService.generarInformeBatidaExcel(idBatida, 'excel').subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `informe_batida_${idBatida}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url); 
      },
      error: (err) => {
        console.error('Error al generar el Excel:', err);
      }
    });
  }

  enviarEmail(idBatida: number) {
    this.utilidadesService.enviarEmailRecordatorio(idBatida).subscribe({
      next: (response) => {
        console.log('Email enviado:', response);
      },
      error: (err) => {
        console.error('Error al enviar el email:', err);
      }
    });
  }
}
