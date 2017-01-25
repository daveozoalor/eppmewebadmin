import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {

  public loginForm = this.fb.group({
     email: ["", Validators.required],
     password: ["", Validators.required]
   });

   userProfile : any;

  constructor(public fb: FormBuilder, public router: Router) {
      this.userProfile = firebase.database().ref('users');
  }

  ngOnInit() {
  }


login(){
  /*
  // Show the value of the form
  let formData = this.loginForm.value;
  // { email: 'blah@blah.net', password: 'imnottelling1' }

  // Or, grab the value of one control:
  let email = this.loginForm.controls.email.value

  */

  this.router.navigate([{outlets: {popup: ['message', 12564]}}]).then(_ => {
     // navigation is done
   });

}


loginWithGoogle(){

  var provider = new firebase.auth.GoogleAuthProvider();
  //provider.addScope('https://www.googleapis.com/auth/plus.login');
firebase.auth().signInWithRedirect(provider);

//log in
var that = this;

  firebase.auth().getRedirectResult().then((result) => {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;

  if (result.user) {

    // The signed-in user info.
  var user = result.user;

    var res = result.user.displayName.split(" ");


    that.userProfile.child(user.uid).set({
      email: user.email,
      photo: user.photoURL,
      username: user.displayName,
       name:{
        first: res[0],
        middle: res[1],
        last: res[2],
      },
    });



  }

}).catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  //var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  //var credential = error.credential;
  // ...
});

}

logout(){
  //logout
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });

}



}
