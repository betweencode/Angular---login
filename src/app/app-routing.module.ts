import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosRutasService } from './core/permisosRutas/permisos-rutas.service';
import { ContenidoComponent } from './layout/privado/contenido/contenido.component';

import { SesionComponent } from './layout/publico/sesion/sesion.component';

const routes: Routes = [{
  path:'sinsesion',component:SesionComponent,loadChildren:()=>import('./modules/login/login.module').then(m=>m.loginModule)
},
{
  path:'sesion',component:ContenidoComponent,canActivate:[PermisosRutasService],loadChildren:()=>import('./modules/principal/principal.module').then(m=>m.principalModule)
},
{
  path:"**",redirectTo:'sinsesion/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
