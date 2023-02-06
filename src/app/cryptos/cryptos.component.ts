import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Firestore, collectionData, collection, query, where, getFirestore } from '@angular/fire/firestore';
import { doc, setDoc, getDocs } from "firebase/firestore";
import { AuthenticationService } from "../servicios/authentication.service";

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent {
  constructor(private http:HttpClient, public firestore:Firestore, public auth:AuthenticationService){
    const datos = collection(firestore, 'monedas');
    var db = getFirestore();
  }

  page = 1;
  pageSize = 10;

  monedas = new Array;

  ngOnInit(){
    this.http.get("https://api.coingecko.com/api/v3/coins/").subscribe(
      (datos:any)=>{
        this.monedas = datos;
        // console.log(this.monedas);
      }
    );
    this.favouritesPetition();
  }

  addToFav(coin_id:string){
    let doc_id = "S" + this.auth.user_id + "a" + coin_id + "m";
    setDoc(doc(this.firestore, "monedas", doc_id),{
      userId: this.auth.user_id,
      coinId: coin_id,
    });
  }

  favouritesPetition(){
    const datos = collection(this.firestore, 'monedas');
    const q = query(datos, where("userId", "==", this.auth.user_id));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  }
}