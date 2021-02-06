import {Component, Input, OnChanges} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../../models/pokemon.model";
import { DecimalPipe } from '@angular/common';
import {Location} from '@angular/common';
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  @Input() id?: number;
  pokemon$: Observable<Pokemon>;

  constructor(private pokemonService: PokemonService, private decimalPipe: DecimalPipe) { }

  ngOnChanges() {
    this.getPokemon(this.id);
  }

  transformNumber(n: number): string {
    return this.decimalPipe.transform(n, '3.0-0')
  }

  getPokemon(id?: number): void {
    this.pokemon$ = this.pokemonService.getPokemon(id);

  }

}
