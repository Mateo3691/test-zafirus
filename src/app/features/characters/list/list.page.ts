import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToast, IonToolbar } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CharactersApiService } from '../../../core/characters/characters-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonAvatar, RouterModule, IonToast, TranslateModule, IonButton, IonIcon ]
})
export class ListPage {
  pokemonService = inject(CharactersApiService);
  translate = inject(TranslateService);

  isToastOpen: boolean = false;
  className: "success-toast" | "error-toast" = 'success-toast';
  toastMessage: string = 'SUCCESS-TOAST';

  get currentLang(){
    return this.translate.currentLang;
  }

  get data(){
    return this.pokemonService.data.results;
  }

  ionViewWillEnter() {
    console.log("idioma", this.translate.currentLang);
    if(!this.pokemonService.data.results.length) {
      this.pokemonService.getPokemons().subscribe({
        next: () => {
          this.className = 'success-toast';
          this.toastMessage = 'SUCCESS-TOAST';
        },
        error: () => { 
          this.className = 'error-toast';
          this.toastMessage = 'ERROR-TOAST';
        },
        complete: () => {
          this.isToastOpen = true;
        }
      })
    }
  }

  setToastOpen(): void{
    this.isToastOpen = !this.isToastOpen;
  }

  changeLanguage(): void{
    this.translate.use(this.translate.currentLang === 'en' ? 'es' : 'en');
  }

}
