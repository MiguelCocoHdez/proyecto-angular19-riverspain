import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BatidasService } from '@app/services/batidas.service';
import { Voluntario, VoluntariosService } from '@app/services/voluntarios.service';

@Component({
  selector: 'app-batidas-voluntario',
  imports: [NgStyle],
  templateUrl: './batidas-voluntario.component.html',
  styleUrl: './batidas-voluntario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BatidasVoluntarioComponent {
  numeroVoluntario: string | null = null;
  batidas: any[] = [];

  constructor(private voluntariosService: VoluntariosService, private batidasService: BatidasService,
    private cdRef: ChangeDetectorRef){}

  ngOnInit(){
    this.numeroVoluntario = this.voluntariosService.getNumeroVoluntario();
    if(this.numeroVoluntario) {
      this.batidasService.verBatidasVoluntario(this.numeroVoluntario).subscribe({
        next: (batidas) => {
          this.batidas = batidas;
          this.cdRef.detectChanges();
        },
        error: (err) => {
          console.error('Error cargando las batidas', err);
        }
      })
    }
  }

  getCoordenadas(index: number): { x: number, y: number } {
    return {
      x: Math.floor(Math.random() * 90),
      y: Math.floor(Math.random() * 90) 
    };
  }
}
