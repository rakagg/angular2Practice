import {Component} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Home} from './scripts/home/home.component';
import {Job} from './scripts/job/job.component';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'my-app',
  templateUrl: 'app/app.html'
}
)
@RouteConfig([
  { path: '/',name: 'Home', component: Home},
  { path: '/job',name: 'Job', component: Job }
])

export class AppComponent {

}