import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username!: string ;
  password!: string ;

  constructor(private user_authservice: AuthService, public router: Router){}

  ngOnInit(): void {
    
  }

  login() {
    // Send the login request to the Flask backend.
    this.user_authservice.login(this.username, this.password).subscribe(response => {
      // Store the JWT in local storage.
      localStorage.setItem('token', response.token);

      // Redirect the user to the home page.
      this.router.navigate(['home']);
    }, error => {
      console.log(error);
    });
  }
}
  
    
    

  
  

  
