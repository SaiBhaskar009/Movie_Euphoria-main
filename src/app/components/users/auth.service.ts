import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth_url = 'http://127.0.0.1:5000/users';


  constructor(private http: HttpClient) { }

  login(username: string, password: string):Observable<any>{
    const userData = {username, password};
    const url = `${this.auth_url}/login`;
    return this.http.post<any>(url,userData);
  }

  getallusers(): Observable<User[]>{
    const url = `${this.auth_url}/getallusers`;
    return this.http.get<User[]>(url);
  }

  add_user(user: User): Observable<User>{
    const url = `${this.auth_url}/register`;
    return this.http.post<User>(url,user);
  }

}

