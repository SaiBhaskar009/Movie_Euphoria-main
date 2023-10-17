import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  users: User[]= [];
  user: User= {};

  constructor(private userAddservice: AuthService, public router: Router){}
  ngOnInit(): void {
    this.enter_user();
  }

  enter_user(): void{
    this.userAddservice.add_user(this.user).subscribe(
      (user)=>{
        this.user = {};
        console.log(user);
      }
     )
  }

}