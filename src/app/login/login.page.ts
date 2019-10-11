import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email
password

  constructor(public userService:UserService,public alertController:AlertController) { }

  ngOnInit() {
  }
login(){
  this.userService.Signin(this.email,this.password)
}

async resetPassword(){
  let alert =await this.alertController.create({
    header: 'reset password',
    inputs: [{
      name: 'Email',
      type: 'email',
      placeholder:'please enter email'
    }],
    buttons:[
      {
        text: 'Cancel',
        handler: ()=>
        {
          console.log('confirm Cancel')
        }
      },{
        text: 'Ok',
        handler: (email)=>{
          this.userService.resetPassword(email.Email)
          console.log('Confirm OK')
        }
      }
    ]
  });

  await alert.present();
      
    }
}
