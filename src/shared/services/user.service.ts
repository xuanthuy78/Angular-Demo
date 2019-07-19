import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../dto/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3000/users';

  constructor( private _https: HttpClient) { }

  getUsers() {
    return this._https.get<User[]>(this.apiUrl);
  }

  createUser(user): Observable<User> {
    return this._https.post<User>(this.apiUrl, user)
    .pipe()
  }
  
  deleteUser(id){
    return this._https.delete<User>(this.apiUrl + '/' + id)
    .pipe()
  }
}
