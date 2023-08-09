import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  pokemons = ['pokemon', 'squirtle', 'venosaur', 'charmaander'];
  
  constructor() { }

  ngOnInit(): void {
  }
  formatUrlImage(position:number){
    const formatNumber = '00'+position

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber}.png`
  }
}
