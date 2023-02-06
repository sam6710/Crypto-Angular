import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Firestore, collectionData, collection, query, where } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
import { addDoc } from 'firebase/firestore';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
}) 
export class CuerpoComponent {

  // datosDB: Observable<any[]>;
  constructor(private http:HttpClient, public firestore:Firestore){
    const datos = collection(firestore, 'monedas');

    // this.datosDB = collectionData(datos);

    // this.datosDB = collectionData(query(datos, where("nombre", "==", "pepe")))
  }

  insertarenDB(){
    addDoc(collection(this.firestore, "monedas"),{
      nombre: "Juan",
      moneda: "btc"
    })
  }

  monedas=new Array;
  // nombreMoneda="";
  // categoria="";
  // imagen="";
  lanzarPeticionAJAX(){
    this.http.get("https://api.coingecko.com/api/v3/coins").subscribe(
      (datos:any)=>{
        console.log(datos);
        this.monedas = datos;
        console.log(this.monedas);
        
        // this.nombreMoneda = datos.name;
        // this.categoria = datos.categories[0];
        // this.imagen = datos.image.large;
      }
    );
  }

  eventoPeticionMoneda(id:any){
    this.eventoPeticion.emit(id)
  }
  @Output() eventoPeticion = new EventEmitter<string>();
}
