import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';
import { delay, finalize, from, Observable, of, switchMap, tap } from 'rxjs';
import { MarvelCharacter } from './characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  http = inject(HttpClient);
  loadingCtrl =  inject(LoadingController);

  data: MarvelCharacter[] = [];
  
  /**
   * Este metodo solo se va a ejecutar al inicio de la aplicacaion y en caso de que se refresque la pagina estando en la pagina de detail (en el guard)
   * ya que es mejor para apis que se puedne actualizar con frecuencia (aunque no es el caso) y no se puede cachear ya que la data puede cambiar
   * @returns 
   */
  getProducts(): Observable<MarvelCharacter[]> {
    if (this.data.length) return of(this.data);

    // Es mejor crear aca el loadinController para no repetir logia en el guard y en la pantalla de list
      return from(this.loadingCtrl.create({
        message: 'Cargando personajes...',
        spinner: 'crescent',
        backdropDismiss: false
      })).pipe(
        switchMap(loading => {
          loading.present();
          return this.http.get<MarvelCharacter[]>('assets/mocks/marvel.json').pipe(
            tap(p => this.data = p),
            delay(3000),
            finalize(() => loading.dismiss())
          );
        })
      );
  }

}
