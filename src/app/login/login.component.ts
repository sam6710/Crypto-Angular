import { Component } from '@angular/core';
import { AuthenticationService } from "../servicios/authentication.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email="";
  password="";

  constructor(private authService:AuthenticationService){}

  logInEmailPassword(){
    this.authService.loginWithEmailPassword(this.email, this.password);
    this.email="";
    this.password="";
  }

  logInGoogle(){
    this.authService.loginWithGoogle();
  }
}
