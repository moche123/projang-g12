import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IDataPokemon, IDataPokemonItem } from '../interfaces/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<IDataPokemonItem[]>{
    return this.http.get<IDataPokemon>('https://pokeapi.co/api/v2/pokemon/')
    .pipe(
      map( (res) => res.results )
    )
  }
}
