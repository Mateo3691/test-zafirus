import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton, IonButtons,
  IonContent, IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonThumbnail,
  IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { CharactersApiService } from '../../../core/characters/characters-api.service';
import { MarvelCharacter } from '../../../core/characters/characters.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,  IonBackButton, IonButtons, IonThumbnail,
    IonItem,
    IonLabel,
    IonList,
    IonNote,]
})
export class DetailPage {

  characterService = inject(CharactersApiService);
  route = inject(ActivatedRoute);
  characterSelected: MarvelCharacter | undefined = undefined;

  get characterComics(){
    return this.characterSelected?.comics.available;;
  }

  get characterSeries(){
    return this.characterSelected?.series.available;;
  }

  get characterStories(){
    return this.characterSelected?.stories.available;;
  }

  get characterImage(){
    return this.characterSelected?.thumbnail.path + '.' + this.characterSelected?.thumbnail.extension;
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id", id);
    if (id) {
      this.characterSelected = this.characterService.data.find((character) => character.id === Number(id));
      console.log("characterSelected", this.characterSelected);
    }
  }

}
