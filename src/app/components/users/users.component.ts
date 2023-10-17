import { Component,OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  user : User = {};

  constructor(private userservice: AuthService, public router: Router){}

  ngOnInit(): void {
   this.loadUsers(); 
  }

  loadUsers(): void {
    this.userservice.getallusers().subscribe(
      (users)=>{
        this.users = users;
        console.log(users);
      }
    )
  }

}
