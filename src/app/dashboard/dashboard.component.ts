import { Component } from '@angular/core';
import { UserService } from './../providers/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  user;
  tableData =[]

  constructor(private UserService:UserService) {
    this.user = this.UserService.getUser();
    console.log(this.user)

    this.tableData = this.UserService.tableData;

  }
}
