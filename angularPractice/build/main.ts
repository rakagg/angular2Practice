import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common';
import {provide} from '@angular/core'


bootstrap(AppComponent,[ROUTER_PROVIDERS,provide(APP_BASE_HREF, {useValue: '/'})]);