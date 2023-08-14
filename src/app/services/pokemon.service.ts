import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = ' https://pokeapi.co/api/v2/';
  constructor(private httpClient: HttpClient) { 
    
  }
  loadPokemon():Observable<any> {
    const req = this.httpClient.get<any>(`${this.apiUrl}pokemon?limit=100`);
    console.log(req)
    
    return req
  }
  getUrlImage(number:number):Observable<any>{
    const request = this.httpClient.get<any>(`${this.apiUrl}pokemon/${number}`)
    console.log(request)
    return request
  }
  
}
