import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRegisterComponent } from './users-register/users-register.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { PingsListComponent } from './pings-list/pings-list.component';
import { PingsAddComponent } from './pings-add/pings-add.component';
import { PingsViewComponent } from './pings-view/pings-view.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import * as firebase from 'firebase';


import {RouterModule, Routes, Router} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';

const appRoutes = [
  {path: '', component: UsersLoginComponent},
  {path: 'profile', component: UsersProfileComponent},
  {path: 'edit', component: UsersProfileComponent},
  {path: 'profile', component: UsersProfileComponent},
  {path: 'signin', component: UsersLoginComponent},
  {path: 'signup', component: UsersRegisterComponent},
  {path: 'pings-list', component: PingsListComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersRegisterComponent,
    UsersLoginComponent,
    UsersProfileComponent,
    PingsListComponent,
    PingsAddComponent,
    PingsViewComponent,
    NavTopComponent,
    DashboardComponent,
    SidebarMenuComponent,
    ForgotPasswordComponent,
    ComposeMailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

public isLoggedIn : any;

   constructor( router: Router){
     // Initialize Firebase
      var config = {
        apiKey: "AIzaSyA9_v7XLl6oycSPKDzi22c55mlmBs7gmqw",
        authDomain: "eppme-d5458.firebaseapp.com",
        databaseURL: "https://eppme-d5458.firebaseio.com",
        storageBucket: "eppme-d5458.appspot.com",
        messagingSenderId: "323086846387"
      };
      firebase.initializeApp(config);

      //check logged in status
    firebase.auth().onAuthStateChanged((user) => {

    if(user){
     // this.rootPage = TabsPage;
     this.isLoggedIn = true;
     //this.router.navigate
    }else {
      //this.rootPage = LoginPage;
       this.isLoggedIn = false;
    }
  });



  }

}
