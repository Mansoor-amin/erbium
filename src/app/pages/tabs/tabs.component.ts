import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

systems: Object[] = [{
    id:1,
    question: 'you like our service?',
    answer: "no",
  }, {
     id:2,
    question: 'you like our service?',
    answer: "no",
  }, {
     id:3,
    question: 'you like our service?',
    answer: "no",
  }, {
     id:4,
    question: 'you like our service?',
    answer: "no",
  }, {
     id:5,
    question: 'you like our service?',
    answer: "no",
  }, {
     id:6,
    question: 'you like our service?',
    answer: "no",
  }
];
  ngOnInit() {
  }

  save(){
        this.router.navigate ( [ '/' ] );
  }
  cancle(){
        this.router.navigate ( [ '/' ] );
  }

}
