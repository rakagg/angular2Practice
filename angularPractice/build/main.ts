/// <reference path="../../node_modules/@types/node/index.d.ts" />
import {AppComponent} from './app.component';
import {bootstrap} from '@angular/platform-browser-dynamic'
import {ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {APP_BASE_HREF} from '@angular/common';
import {provide} from '@angular/core'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);