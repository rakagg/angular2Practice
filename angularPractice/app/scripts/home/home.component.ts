import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
declare var module:any;
@Component({
  moduleId: module.id,
  directives : [ROUTER_DIRECTIVES],
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home implements OnInit{
  heading = 'Person Details';
  constructor() {

  }

  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
  }
}