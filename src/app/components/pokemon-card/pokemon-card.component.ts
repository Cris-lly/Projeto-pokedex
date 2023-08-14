import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() numberPokemon = [{name: '', url:""},];
  @Input() idPokemon = 1;
  imageName=[]
  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(): void{
    this.getImage();
  }
  
  getImage():void{
    this.pokemonService.getUrlImage(this.idPokemon).subscribe((pokemons) => {
      
      this.imageName = pokemons.sprites.other.dream_world.front_default; 
    
    }
  );

  }
}
