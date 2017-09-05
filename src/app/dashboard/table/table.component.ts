import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
@Input() tableData;
@Input() user;
  constructor(private router: Router) {
    
  }

  ngOnInit() {
  }

  navigateTo(item){
  
    if(this.user.role !== 'admin'||this.user.role !== 'tm'){
          this.router.navigate ( [ '/pages/tabs' ] );
    }
  }

}
