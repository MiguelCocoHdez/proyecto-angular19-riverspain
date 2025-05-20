import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../../../componentes/globales/header/header.component";
import { FooterComponent } from "../../../componentes/globales/footer/footer.component";
import { FormularioLoginComponent } from "../../../componentes/loginRegister/formulario-login/formulario-login.component";
import { FormularioVoluntarioComponent } from "../../../componentes/home/formulario-voluntario/formulario-voluntario.component";
import { VoluntariosService } from '@app/services/voluntarios.service';


@Component({
  selector: 'app-login-register',
  imports: [HeaderComponent, FooterComponent, FormularioLoginComponent, FormularioVoluntarioComponent],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginRegisterComponent {
  mostrarLogin: boolean = true;

  alternarFormulario() {
    this.mostrarLogin = !this.mostrarLogin;
  }
}
