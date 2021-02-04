import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {PokemonService} from "../pokemon.service";
import {ApiResponse} from "../../models/api-response.model";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(
      (result: ApiResponse<Pokemon>) => this.pokemons = result.data
    );
  }

  /**
   * Récupérer les 10 prochains pokémons
   */
  onScroll(): void {
    console.log("scrolled!")
    const offset: number = this.pokemons.length;
    const limit: number = 10;
    this.pokemonService.getPokemons(offset, limit).subscribe(
      (result: ApiResponse<Pokemon>) => this.pokemons.push(...result.data)
    );
  }

}
