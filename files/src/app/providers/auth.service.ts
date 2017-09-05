import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(private UserService:UserService) { }
  islogin = false;
  isLoggedIn(){
    if(this.islogin){
      return true
    }else{
      return false;
    }
  }

  login(user){
    let users= JSON.parse(localStorage.getItem('users')) || [];
    // users.forEach(element => {
    //   if(user.uname === element.uname){
    //     console.log('user found')
    //     if(user.password === element.password){
    //       console.log('password matched')
    //       this.UserService.setUser(element)
    //       return true;
    //     }
    //   }
    // });


  }
}