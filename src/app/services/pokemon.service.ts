import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = ' https://pokeapi.co/api/v2/pokemon?limit=100';
  constructor(private httpClient: HttpClient) { 
    
  }
  loadPokemon():Observable<any> {
    const req = this.httpClient.get<any>(this.apiUrl);
    return req
  }
  
}
