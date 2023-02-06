import { Component } from '@angular/core';
import { AuthenticationService } from "../servicios/authentication.service"

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor(public auth:AuthenticationService){}

  signOut(){
    this.auth.logOut();
  }
}
