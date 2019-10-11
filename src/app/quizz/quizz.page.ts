import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import * as firebase from 'firebase';
import { ActivatedRouteSnapshot, ChildActivationEnd } from '@angular/router';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  rootRef;
    name;
    question
    answer=[];
  questions = [];
  constructor(public userService:UserService) {
    // var data = firebase.database().ref().child("Question1")
    // data.on("child_added",snap => {
    //   this.name = snap.child("Question").val();
    //   this.answer = snap.child("Answer").val();
    //   this.questions.push({
    //     Questions: this.name
    //   })
    // })
  
    this.name=this.userService.returnName();
  var data=firebase.database().ref("Questions")
  for(var i=1;i<=5;i++){
    var quiz =firebase.database().ref().child('Questions/'+ this.name +'/Question'+i);
    quiz.once("value",snap=>{
      this.question=snap.child("Question").val();
      this.questions.push({
        Name:this.question
      })
      console.log(this.question);
    })
  }    
  
}
  
  ngOnInit() {
  }

}
