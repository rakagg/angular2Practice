import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'home',
  templateUrl: 'app/scripts/home/home.html'
})
export class Home implements OnInit {
  heading = 'Person Details';
  constructor() {

  }
    ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
  }
}