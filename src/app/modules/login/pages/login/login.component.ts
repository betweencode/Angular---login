import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutentifacionService } from 'src/app/shared/servicios/autentifacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder,private loginPrd:AutentifacionService,
    private routerprd:Router) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
        Object.values(this.myForm.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }

     if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
          alert("Usuario o contraseña invalido");
     }else{
        this.routerprd.navigateByUrl("/sesion/principal");
     }
  }

  public get f():any{
    return this.myForm.controls;
  }

}
