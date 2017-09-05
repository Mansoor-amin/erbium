import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(private UserService:UserService) { }
  islogin = false;
  isLoggedIn(){
    return this.islogin;
  }

  login(user){

    let users= this.UserService.users;
    users.forEach(element => {
      if(user.uname === element.email){
        console.log('user found')
        if(user.password === element.password){
          console.log('password matched')
          this.UserService.setUser(element)
          this.islogin = true;
          return true;
        }else{
          alert('invalid email or password');
        }
      }
    });
    // let users= JSON.parse(localStorage.getItem('users')) || [];
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