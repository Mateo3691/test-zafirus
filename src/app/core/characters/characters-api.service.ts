import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';
import { Observable, tap } from 'rxjs';
import { PokemonCharacter, PokemonCharacterDetail } from './characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  http = inject(HttpClient);
  loadingCtrl =  inject(LoadingController);

  data: {results:PokemonCharacter[]} = {results: []};
  
  /**
   * Este metodo solo se va a ejecutar al inicio de la aplicacaion
   * @returns 
   */
  getPokemons(): Observable<{results:PokemonCharacter[]}> {
      return this.http.get<{results:PokemonCharacter[]}>('https://pokeapi.co/api/v2/pokemon').pipe(
        tap(p => this.data = p))
  }

  getPokemonById(name: string): Observable<PokemonCharacterDetail> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
      tap(p => console.log('getPokemonById', p))
    );
  }

}
