import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { IDataPokemonItem } from './interfaces/pokemon.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  //*BINDING
  public title: string;
  public people = [
    { name: 'Andres', age: 20 },
    { name: 'Juan', age: 13 },
    { name: 'Francisco', age: 45 },
    { name: 'Jhon', age: 40 },
  ]

  public pokemons: IDataPokemonItem[] = [];
  public subscription: Subscription = new Subscription();
  public pokemonsObs$: Observable<IDataPokemonItem[]> = new Observable();

  constructor( private pokeService:PokemonService ){
    this.title = 'ceti';
  }
 
  //*METODOS, GETTERS
  ngOnInit(): void {
    // this.subscription = this.pokeService.getPokemons().subscribe(res => {
    //   this.pokemons = res
    // });

    this.pokemonsObs$ = this.pokeService.getPokemons()
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
}
