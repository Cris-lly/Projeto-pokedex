import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listPokemons= [{name: '', url:""},];
  numberPokemon = 0;
  position:number = 0;
  constructor(public pokemonService:PokemonService) { }

  getPokemonInfo(): void {
    this.pokemonService.loadPokemon().subscribe((pokemons) => {
      
      this.listPokemons = pokemons.results; console.log(this.listPokemons)
    
    }
  );
  }
  sendNumber(number: number){
    this.numberPokemon = number+1;
  }
  ngOnInit(): void {
    this.getPokemonInfo();
  }

}
