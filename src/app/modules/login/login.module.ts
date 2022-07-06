import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { loginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
    declarations:[LoginComponent, RegistroComponent],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,loginRoutingModule]
})
export class loginModule{

}