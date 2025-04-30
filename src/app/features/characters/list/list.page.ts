import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MarvelCharacter } from '../../../core/characters/characters.model';
import { MOCK_MARVEL_DATA } from '../../../mocks/marvel';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonAvatar, RouterModule]
})
export class ListPage implements OnInit {

  data: MarvelCharacter[] = []

  ionViewWillEnter() {
    this.data = MOCK_MARVEL_DATA;
    console.log('caca invoco informacion desde el servicio');
  }

  ngOnInit() {
    console.log('ngOnInit ListPage');
  }

}
