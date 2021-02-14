import {Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, OnChanges, Input} from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {PokemonService} from "../pokemon.service";
import {ApiResponse} from "../../models/api-response.model";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];

  @Input() message?: string;

  lastSearch: string = "";

  @Output() selectPokemonEvent = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons(0,20);
  }

  getPokemons(offset?: number, limit?: number, search?: string): void {
    this.lastSearch = search;
    this.pokemonService.getPokemons(offset, limit, search).subscribe(
      (result: ApiResponse<Pokemon>) => {
        if( !offset )
          this.pokemons = result.data
        else
          this.pokemons.push(...result.data)
      }
    );
  }

  emitNewPokemon(id: number) {
    this.selectPokemonEvent.emit(id);
  }

  /**
   * Récupérer les 10 prochains pokémons
   */
  onScroll(): void {
    const offset: number = this.pokemons.length;
    const limit: number = 10;
    this.getPokemons(offset, limit, this.lastSearch);
  }

}
