import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const browserLeng = navigator.language.split('-')[0];

    const soportados = ['en', 'es'];
    const selectedLang = soportados.includes(browserLeng) ? browserLeng : 'en';

    this.translate.use(selectedLang);
  }

}
