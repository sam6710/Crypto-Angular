import { Component } from '@angular/core';
import { AuthenticationService } from "../servicios/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  name="";
  email="";
  password="";

  constructor(private authService:AuthenticationService){}

  registerEmailPassword(){
    this.authService.registerWithEmailPassword(this.email, this.password);
    this.name="";
    this.email="";
    this.password="";
  }

  registerGoogle(){
    this.authService.registerWithGoogle();
  }
}
