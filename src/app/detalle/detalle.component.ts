import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  id:any;
  moneda:any;

  constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.id = window.location.href.split("/")[4];
    this.coinPetition().subscribe((data:any)=>{
      this.moneda = data;
      console.log(this.moneda)
    });
  }

  coinPetition(){
    return this.http.get('https://api.coingecko.com/api/v3/coins/' + this.id)
  }
}

