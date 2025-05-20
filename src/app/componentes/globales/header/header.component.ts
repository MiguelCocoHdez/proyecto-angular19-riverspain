import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  rutaActual: string = '';
  contenidoBoton: string = '';

  @ViewChild('navbarTogglerDemo02') navbarCollapse!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.rutaActual = this.router.url;
    console.log(this.rutaActual);

    if (this.rutaActual.split('?')[0] === '/peces') {
      this.contenidoBoton = 'Añadir Pez';
    } else if (this.rutaActual === '/rios') {
      this.contenidoBoton = 'Añadir Rios';
    } else {
      this.contenidoBoton = 'Hazte voluntario';
    }
  }

  closeMenu() {
    if (this.navbarCollapse) {
      this.navbarCollapse.nativeElement.classList.remove('show');
    }
  }
}