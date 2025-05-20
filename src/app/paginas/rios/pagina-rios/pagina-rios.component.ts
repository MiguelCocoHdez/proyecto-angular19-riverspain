import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";
import { Rios, RiosService } from '@app/services/rios.service';
import { TarjetaRiosComponent } from "../../../componentes/rios/tarjeta-rios/tarjeta-rios/tarjeta-rios.component";
import { Router } from '@angular/router';
import { LoaderComponent } from '@app/componentes/globales/loader/loader.component';

@Component({
  selector: 'app-pagina-rios',
  imports: [HeaderComponent, FooterComponent, TarjetaRiosComponent, LoaderComponent],
  templateUrl: './pagina-rios.component.html',
  styleUrl: './pagina-rios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaRiosComponent implements OnInit {
  todosRios: Rios[] = []
  rioSeleccionado!: Rios
  cargando = true;

  constructor(private riosService: RiosService, private router: Router, private cdRef: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.riosService.verRios().subscribe({
      next: (data) => {
        this.todosRios = data
        this.cargando = false;
        this.cdRef.detectChanges()
        console.log(this.todosRios)
      },
      error: (err) => {
        this.cargando = false;
        console.log('Fallo al llamar a la API rios', err)
      }
    })
  }

  abrirModal(rio: Rios) {
    this.rioSeleccionado = rio
    console.log(this.rioSeleccionado)
  }

  navegarAPeces(idRio: number, ids: number[]) {
    this.router.navigate(['peces'], {
      queryParams: {
        idRio: idRio,
        ids: ids.join(',') //pasar el array de numeros a string
      }
    })
  }
}
