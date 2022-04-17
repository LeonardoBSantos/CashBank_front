import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  { path:'', redirectTo: 'register', pathMatch: 'full' },
  { path:'register', component: CadastroComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
