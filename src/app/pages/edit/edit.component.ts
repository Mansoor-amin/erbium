import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  currentLang = 'en';
  systems: Object[] = [{
    name: 'Encryption',
    on: false,
  }, {
    name: 'License',
    on: true,
  }, {
    name: 'CDN',
    on: true,
  }
];
role = ['Administrator','Transport Officer','Forklift Driver']
  constructor(public translate: TranslateService ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
