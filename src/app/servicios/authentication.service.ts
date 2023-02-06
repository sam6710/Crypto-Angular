import { Injectable } from '@angular/core';
import { Auth, getAuth, onAuthStateChanged } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  logueado:boolean = false;
  user_id:string = "";

  constructor(public auth:Auth){
    this.estadoLogin(getAuth());
  }

  registerWithEmailPassword(email:string, password:string){
    console.log("Registering user with" + email + "and" + password);
    createUserWithEmailAndPassword(this.auth, email, password)
    .then((user)=>{
      console.log("Usuario registrado");
    })
    .catch((error)=>{
      var errorMessage = error.message;           
      console.log(errorMessage);
    })
  }

  registerWithGoogle(){
    console.log("Registering user with Google");
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((result) => {
      console.log("Usuario registrado");
    }).catch((error) => {
      var errorMessage = error.message;           
      console.log(errorMessage);
    });
  }

  loginWithEmailPassword(email:string, password:string){
    console.log("Logging in user with" + email + "and" + password);
    signInWithEmailAndPassword(this.auth, email, password)
    .then((user)=>{
      console.log("Usuario logueado");
      this.logueado = true;
    })
    .catch((error)=>{
      var errorMessage = error.message;           
      console.log(errorMessage);
    })
  }

  loginWithGoogle(){
    console.log("usuario logeado con Google");
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
    .then((result) => {
      console.log("Usuario logueado");
      this.logueado = true;
      console.log(this.logueado);
    }).catch((error) => {
      var errorMessage = error.message;           
      console.log(errorMessage);
    });
  }

  estadoLogin(auth:any){
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log("Usuario logueado");
        this.logueado = true;
        this.user_id = user.uid;
      }else{
        console.log("Usuario deslogueado");
        this.logueado = false;
      }
    })
  }

  logOut(){
    console.log("Usuario deslogueado");
    signOut(this.auth);
    this.logueado = false;
  }
}
