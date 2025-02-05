import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;

  setUser( user: User){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  constructor() { }
}
