import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar, LoadingController } from '@ionic/angular/standalone';
import { CharactersApiService } from '../../../core/characters/characters-api.service';
import { MarvelCharacter } from '../../../core/characters/characters.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonAvatar, RouterModule ]
})
export class ListPage implements OnInit {

  marvelService = inject(CharactersApiService);

  data: WritableSignal<MarvelCharacter[]>  = signal([]);
  isLoading: WritableSignal<boolean>  = signal(false);
  loadingCtrl =  inject(LoadingController);

  ionViewWillEnter() {
    if(!this.marvelService.data.length) {
      this.marvelService.getProducts().subscribe({
        next: data => {
          this.data.set(data);
        console.log('data', this.data());
        console.log("data SERVICE", this.marvelService.data);
        },
      })
    }
  }

  ngOnInit() {
    console.log('ngOnInit ListPage');
  }

}
