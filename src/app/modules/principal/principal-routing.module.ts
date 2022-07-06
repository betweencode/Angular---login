import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./pages/principal/principal.component";

const rutas:Routes = [{
    path:'',children:[
        {path:'principal',component:PrincipalComponent}
    ]
}];
@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})
export class principalRoutingModule{

}