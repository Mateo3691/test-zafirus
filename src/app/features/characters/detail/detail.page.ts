import { CommonModule } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonBackButton, IonButtons,
  IonContent, IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonThumbnail,
  IonTitle,
  IonToast,
  IonToolbar
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { CharactersApiService } from '../../../core/characters/characters-api.service';
import { PokemonCharacterDetail } from '../../../core/characters/characters.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,  IonBackButton, IonButtons, IonThumbnail,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonToast,
    TranslateModule]
})
export class DetailPage {

  characterService = inject(CharactersApiService);
  route = inject(ActivatedRoute);
  pokemonSelected: PokemonCharacterDetail | undefined = undefined;
  pokemonName: string = '';
  isToastOpen: WritableSignal<boolean> = signal(false);

  get pokemonMoves(){
    return this.pokemonSelected?.moves.length;
  }

  get pokemonTypes(){
    return this.pokemonSelected?.types.length;
  }

  get pokemonAbilities(){
    return this.pokemonSelected?.abilities.length;
  }

  get pokemonImage(){
    return this.pokemonSelected?.sprites.front_default;
  }

  ionViewWillEnter() {
    this.pokemonName = this.route.snapshot.paramMap.get('name')!;
    if (this.pokemonName) {
      this.characterService.getPokemonById(this.pokemonName).subscribe({
        next: (data) => {
          this.pokemonSelected = data;
        },
        error: (err) => {
          this.isToastOpen.set(true);
        }
      });
    }
  }

  setToastOpen() {
    this.isToastOpen.set(!this.isToastOpen());
  }

}
