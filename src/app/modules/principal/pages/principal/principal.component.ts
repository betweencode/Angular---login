import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentifacionService } from 'src/app/shared/servicios/autentifacion.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  public objetounico = {};

  constructor(private aut:AutentifacionService,private router:Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public cerrarSesion(){
      this.aut.limpiarToken();
      this.router.navigateByUrl("/sinsesion/login");
  }

  

}
