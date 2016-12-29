import {Component , OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
declare var module:any;
@Component({
  moduleId: module.id,
  directives : [ROUTER_DIRECTIVES],
  selector: 'job',
  templateUrl: 'job.html'
})
export class Job implements OnInit{
  constructor() {

    

  }

  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
  }
}