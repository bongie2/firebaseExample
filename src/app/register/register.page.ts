import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
name 
surname
email
password
  constructor(public userService:UserService) { }

  ngOnInit() {
  }
register(){
  this.userService.Signup(this.email,this.password,this.name,this.surname)
}
}
