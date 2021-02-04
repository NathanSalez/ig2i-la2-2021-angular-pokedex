import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../../models/pokemon.model";
import { DecimalPipe } from '@angular/common';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private decimalPipe: DecimalPipe, private location: Location) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  transformNumber(n: number): string {
    return this.decimalPipe.transform(n, '3.0-0')
  }

  getPokemon(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemon(id).subscribe(
      result => this.pokemon = result
    );
  }

  goBack(): void {
    this.location.back();
  }

}
