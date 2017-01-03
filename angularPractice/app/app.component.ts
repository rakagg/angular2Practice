import { Component, OnInit } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})
export class AppComponent implements OnInit {
    constructor(private translate: TranslateService) { }
  
    ngOnInit() {
        this.translate.addLangs(["en", "fr"]);
        this.translate.setDefaultLang('en');

        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
}