import { Injectable } from '@angular/core';
import { MOCK_MARVEL_DATA } from '../../mocks/marvel';
import { MarvelCharacter } from './characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  data: MarvelCharacter[] = MOCK_MARVEL_DATA;
  
}
