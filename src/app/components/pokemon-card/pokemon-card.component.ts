import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() numberPokemon = [{name: '', url:""},];
  @Input() receivedNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }
  formatUrlImage(){
    const formatNumber = this.leadingZero(this.receivedNumber)

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber}.png`
  }
  leadingZero(value: number, size = 3){
    let number = String(value);
    while(number.length < (size || 2)){
      number = '0'+ number;
    }
    return number;
  }
}
