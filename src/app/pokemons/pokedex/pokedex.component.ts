import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  currentPokemonId: number = 1;
  constructor() { }

  printNewPokemon(newId: number) {
    this.currentPokemonId = newId;
  }

  ngOnInit(): void {
  }

}
