import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from './../../providers/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private AuthService: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    console.log(this.form.value)
    if(this.AuthService.login(this.form.value)){
      this.router.navigate ( [ '/' ] );
    }else{
      if(this.AuthService.isLoggedIn){
        this.router.navigate ( [ '/' ] );              
      }
    }
    // this.router.navigate ( [ '/' ] );      
    // this.router.navigate ( [ '/dashboard' ] );
  }

}
