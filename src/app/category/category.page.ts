import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  name;
  category = [];
  constructor(public userService:UserService) {
    var data = firebase.database().ref().child("Categories")
    data.on("child_added",snap => {
      this.name = snap.child("CatName").val();
      this.category.push({
        Categories: this.name
      })
    })
  }

  ngOnInit() {
  }

  setName(name) {
    this.userService.getName(name);
  }
}
