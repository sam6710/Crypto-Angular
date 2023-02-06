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

  user_Coins:any;
  fireCoins = new Array;
  favouriteCoins = new Array;
  datos:any;

  constructor(private http:HttpClient, public firestore:Firestore, public auth:AuthenticationService){
    this.datos = collection(firestore, 'monedas');
    var db = getFirestore();
  }

  monedas = new Array;

  ngOnInit(){
    this.http.get("https://api.coingecko.com/api/v3/coins/").subscribe(
      (datos:any)=>{
        this.monedas = datos;
        console.log(this.monedas);
      }
    );
    this.favouritesPetition();
    console.log(this.favouriteCoins)
  }

  addToFav(coin_id:string){
    let doc_id = "S" + this.auth.user_id + "a" + coin_id + "m";
    setDoc(doc(this.firestore, "monedas", doc_id),{
      userId: this.auth.user_id,
      coinId: coin_id,
    });
  }

  favouritesPetition(){
    this.user_Coins = collectionData(this.datos, {idField: "id"});
    this.user_Coins.subscribe((data:any)=>{
      this.fireCoins = data;
      this.fireCoins.forEach((element:any) => {
        this.coinPetition(element.coinId).subscribe((data:any)=>{
          this.favouriteCoins.push(data);
          // console.log(this.favouriteCoins);
        });
      });
    });
  }

  coinPetition(coin_id:string){
    return this.http.get('https://api.coingecko.com/api/v3/coins/' + coin_id)
  }

  prueba(){
    console.log("aaaaa");
  }
}