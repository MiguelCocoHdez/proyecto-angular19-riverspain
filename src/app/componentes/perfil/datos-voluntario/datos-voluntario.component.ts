import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { Voluntario, VoluntariosService } from '@app/services/voluntarios.service';

@Component({
  selector: 'app-datos-voluntario',
  imports: [CommonModule],
  templateUrl: './datos-voluntario.component.html',
  styleUrl: './datos-voluntario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatosVoluntarioComponent {
  
  voluntario: Voluntario | null = null;
  numeroVoluntario: string | null = null;

  constructor(private voluntariosService: VoluntariosService, private cdRef: ChangeDetectorRef) { }
  
  ngOnInit(): void{
    this.numeroVoluntario = this.voluntariosService.getNumeroVoluntario();
    if (this.numeroVoluntario) {
      this.voluntariosService.verVoluntarioNum(this.numeroVoluntario)
        .subscribe({
          next: (voluntario) => {
            console.log('Voluntario cargado:', voluntario);
            this.voluntario = voluntario;
            this.cdRef.detectChanges();
          },
          error: (err) => {
            console.error('Error cargando el voluntario', err);
          }
        });
    }
  }
}
