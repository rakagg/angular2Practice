import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  directives : [ROUTER_DIRECTIVES],
  selector: 'home',
  templateUrl: 'app/scripts/home/home.html'
})
export class Home {
  constructor() {

  }
}