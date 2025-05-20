import { Routes } from '@angular/router';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [{
        path: '',
        loadComponent: () => import('./paginas/home/homepage/homepage.component').then(m => m.HomepageComponent)
    },
    {
        path: 'zonas',
        loadComponent: () => import('./paginas/zonas/pagina-zonas/pagina-zonas.component').then(m => m.PaginaZonasComponent)
    },
    {
        path: 'zonas/mapaZonas',
        loadComponent: () => import('./paginas/mapa/mapa/mapa.component').then(m => m.MapaComponent)
    },
    {
        path: 'zonas/mapaZonas/infoBatidas',
        loadComponent: () => import('./paginas/batidas/pagina-batidas/pagina-batidas.component').then(m => m.PaginaBatidasComponent)
    },
    {
        path: 'rios',
        loadComponent: () => import('./paginas/rios/pagina-rios/pagina-rios.component').then(m => m.PaginaRiosComponent)
    },
    {
        path: 'peces',
        loadComponent: () => import('./paginas/peces/pagina-peces/pagina-peces/pagina-peces.component').then(m => m.PaginaPecesComponent)
    },
    {
        path: 'explorar-peces',
        loadComponent: () => import('./paginas/explorar-peces/pagina-explorar-peces/pagina-explorar-peces.component').then(m => m.PaginaExplorarPecesComponent)
    },
    {
        path: 'info-peces/:id',
        loadComponent: () => import('./paginas/info-peces/info-peces-pagina/info-peces-pagina.component').then(m => m.InfoPecesPaginaComponent),
        data: {
            renderMode: 'browser'
        }
    },
    {
        path: 'loginRegister',
        loadComponent: () => import('./paginas/loginRegister/login-register/login-register.component').then(m => m.LoginRegisterComponent)
    },
    {
        path: 'perfilUsuario',
        loadComponent: () => import('./paginas/perfil/pagina-perfil/pagina-perfil.component').then(m => m.PaginaPerfilComponent)
    }
];
