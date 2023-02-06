import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component"
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CryptosComponent } from "./cryptos/cryptos.component";
import { AuthGuard } from "./auth/auth.guard";
import { PieComponent } from "./pie/pie.component";

const routes:Routes = [
  { path: "", component: LandingPageComponent},
  { path: "sign-in", component: LoginComponent },
  { path: "sign-up", component: RegisterComponent},
  { path: "coins", component: CryptosComponent},
  // { path: "privado", component: PieComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRooutingModule { }
