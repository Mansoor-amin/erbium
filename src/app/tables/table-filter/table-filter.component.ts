import { Component, TemplateRef, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {
    @ViewChild('actionTemp') actionTemp: TemplateRef<any>;

  rows = [];

  temp = [];

  columns = [];



  constructor( private router: Router) {
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
    });
    
  }

  ngOnInit(){
     this.columns = [
    { name: 'First Name',
      prop: 'first_name' 
    },
    { name: 'Last Name',
      prop: 'last_name' 
    },
    { name: 'SDU',
      prop: 'sdu' 
    },
    {
        cellTemplate: this.actionTemp, 
        name: 'Actions',
      }
  ];
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.1.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }



    delete(row: any) {
        console.log(row)
         this.rows.splice(row, 1);       
    }

    edit(row: any) {
        console.log(row) 
        this.router.navigate ( [ '/pages/user' ] );       
    }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
}
