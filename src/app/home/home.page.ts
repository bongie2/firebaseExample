import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(public userService:UserService) {}
  

  logout(){
    this.userService.Signout()
  }
}
