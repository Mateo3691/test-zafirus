import { Component } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonFooter, IonTitle, IonToolbar],
})
export class HomePage {
  constructor() {}
}
