import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToast, IonToolbar } from '@ionic/angular/standalone';
import { CharactersApiService } from '../../../core/characters/characters-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonAvatar, RouterModule, IonToast ]
})
export class ListPage{

  pokemonService = inject(CharactersApiService);

  isToastOpen: boolean = false;
  className: "success-toast" | "error-toast" = 'success-toast';
  toastMessage: string = '';

  get data(){
    return this.pokemonService.data.results;
  }

  ionViewWillEnter() {
    if(!this.pokemonService.data.results.length) {
      this.pokemonService.getPokemons().subscribe({
        next: () => {
          this.isToastOpen = true;
          this.className = 'success-toast';
          this.toastMessage = 'Carga exitosa!';
        },
        error: err => {
          this.isToastOpen = true;
          this.className = 'error-toast';
          this.toastMessage = 'Error al cargar los personajes!';
          console.log('error', err);
        },
      })
    }
  }

  setToastOpen() {
    this.isToastOpen = !this.isToastOpen;
  }

}
