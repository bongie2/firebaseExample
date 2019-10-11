import { Injectable } from '@angular/core';
import * as firebase from 'firebase';





@Injectable({
  providedIn: 'root'
})
export class UserService {
database=firebase.database();
userID
userEmail
Newname
name
  constructor() { }
  Signin(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then((result)=>{
      console.log("user is logged in")
    });
  }
  Signup(email,password,name, surname){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    }).then((user)=>{
   console.log(user);
   console.log(user['user'].uid);
   this.userID=user['user'].uid;
   this.userEmail=user['user'].email;
   console.log(this.userEmail);
   firebase.database().ref('user/'+ this.userID).set({
     name:name,
surname:surname,
     email:this.userEmail
   },
   (error)=>{
     if(error){
       console.log(error)
            }
            else{
              console.log("data saved");
            }
   })
   
    });
  }

  getUserID() {
    return this.userID;
  }

Signout(){
    firebase.auth().signOut().then(()=> {
      // Sign-out successful.
      console.log("sign-out successfull")
    }).catch((error)=> {
      // An error happened.
      console.log(error.Message)
    });
  }
  resetPassword(email){
    
    firebase.auth().sendPasswordResetEmail(email).then(()=>{

    }).catch((error) => {
      var errorCode=error.code
      var errorMessage=error.message
      console.log(email);
    })
  }

  getName(Name){
   this.name = Name;
  }

  returnName(){
    return this.name;
  }

}
