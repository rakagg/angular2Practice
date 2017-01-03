import { NgModule } from '@angular/core';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from 'ng2-translate';


import { Home } from './scripts/home/home.component';
import { Job } from './scripts/job/job.component';
import { AppComponent } from './app.component'


const appRoutes: Routes = [
    { path: 'home', component: Home },
    { path: 'job', component: Job },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot()
        
    ],
    declarations: [
        AppComponent,
        Home,
        Job
    ],
    bootstrap: [AppComponent],
    providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppModule { }