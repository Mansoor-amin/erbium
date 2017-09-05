import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private UserService:UserService) { }

  ngOnInit() {
    this.form = this.fb.group ( {
      primary_sid: [null , Validators.compose ( [ Validators.required ] )] , 
      car_owner: [null , Validators.compose ( [ Validators.required ] )],
      allocation: [null , Validators.compose ( [ Validators.required ] )],
      ADR: [null , Validators.compose ( [ Validators.required ] )],
      transport_id: [null , Validators.compose ( [ Validators.required ] )],
      process: [null , Validators.compose ( [ Validators.required ] )],
    } );
  }

  onSubmit(){
    console.log(this.form.value)
    this.UserService.tableData.push(this.form.value);
    this.form.reset();
    this.form.markAsUntouched();
  }

}
