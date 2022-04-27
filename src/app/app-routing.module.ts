import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path:'', redirectTo: 'register', pathMatch: 'full' },
  { path:'register', component: CadastroComponent },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomePageComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
