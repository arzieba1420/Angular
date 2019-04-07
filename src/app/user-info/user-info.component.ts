import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  name: string = 'Jan';
  name2: string = '';
  showP: boolean=true;
  userArray: User[]=[
    new User("Jan","Kowalski",33,"Kraków"),
    new User("Michał","Nowak",10,"Warszawa"),
    new User("TestName","TestLastName",99,"TestCity")
  ];

  isDisabled(): boolean{
    if(this.name==='Jan'){
      return false
    } else
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

  deleteUser(){
    this.name = '';
  }

  showPrimary(age: number): boolean{
    if(age>40) {
      return true;
    } else{
      return false;
    }
  }

  onSubmit(f: NgForm){
    console.log(f);
    let user: User = new User(
      f.value.firstName,
      f.value.lastName,
      f.value.age,
      f.value.city
    );
    this.userArray.push(user);
    f.reset();

  }

}
