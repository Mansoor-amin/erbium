import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  private user = {}; 
  
  setUser(user){
    this.user = user;
  }
  getUser(){
    return this.user;
  }
  
}
