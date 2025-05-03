import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Capacitor, CapacitorHttp } from '@capacitor/core';
import { from, map, Observable, tap } from 'rxjs';
import { PokemonCharacter, PokemonCharacterDetail } from './characters.model';

@Injectable({ providedIn: 'root' })
export class CharactersApiService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  isNative = Capacitor.getPlatform() !== 'web';

  data: { results: PokemonCharacter[] } = { results: [] };

  getPokemons(): Observable<{ results: PokemonCharacter[] }> {
    if (this.isNative) {
      console.log('Native platform detected, using CapacitorHttp');
      return from(CapacitorHttp.get({ url: this.baseUrl })).pipe(
        map(res => res.data),
        tap(p => this.data = p)
      );
    }

    return this.http.get<{ results: PokemonCharacter[] }>(this.baseUrl).pipe(
      tap(p => this.data = p)
    );
  }

  getPokemonById(name: string): Observable<PokemonCharacterDetail> {
    const url = `${this.baseUrl}/${name}`;

    if (this.isNative) {
      console.log('Native platform detected, using CapacitorHttp');
      return from(CapacitorHttp.get({ url })).pipe(
        map(res => res.data)
      );
    }

    return this.http.get<PokemonCharacterDetail>(url);
  }
}
