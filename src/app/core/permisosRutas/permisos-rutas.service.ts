import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentifacionService } from 'src/app/shared/servicios/autentifacion.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosRutasService implements CanActivate {

  constructor(private router:Router,private autenticacionPrd:AutentifacionService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!Boolean(this.autenticacionPrd.getAutenticationByToken())){
      return this.router.parseUrl("/sinsesion/login");
    }
    return Boolean(this.autenticacionPrd.getAutenticationByToken());
  }
}
