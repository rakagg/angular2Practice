import {Component} from '@angular/core';

@Component({

  selector: 'home',
    templateUrl: 'home.html'
})
export class Home implements OnInit{
  heading = 'Person Details';
  constructor() {

  }
}