import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrincipalComponent } from './pages/principal/principal.component';
import { principalRoutingModule } from "./principal-routing.module";

@NgModule({
    declarations:[
    PrincipalComponent
  ],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,principalRoutingModule]
})
export class principalModule{
    
}