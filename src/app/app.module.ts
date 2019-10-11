import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyC0UTAZMqEGAKokApZk7ORm8TduSbc60f0",
  authDomain: "example1-7d755.firebaseapp.com",
  databaseURL: "https://example1-7d755.firebaseio.com",
  projectId: "example1-7d755",
  storageBucket: "",
  messagingSenderId: "570969658110",
  appId: "1:570969658110:web:29e15bc1f1cc4b00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
