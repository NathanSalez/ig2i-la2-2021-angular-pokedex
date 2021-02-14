import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon.model";
import {PokemonService} from "../pokemon.service";
import {TeamService} from "../team.service";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  COMPO_MAX: number = 6;
  public compo: Pokemon[] = [];

  private appels: Observable<Pokemon>[] = [];

  constructor(private pokemonService: PokemonService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam(): void {
    this.appels.length = this.compo.length = 0;
    this.teamService.getComposition().subscribe(
      (result: number[]) => {
        for(const id of result)
          this.appels.push(this.pokemonService.getPokemon(id));
        forkJoin(this.appels).subscribe( (r:Pokemon[]) => {this.compo = r;});
      })
  }

  private synchronizeTeam(): void {
    this.teamService
      .changeTeam(this.compo.map( (p: Pokemon) => p.id )) // envoi d'un tableau d'entiers (chaque entier représente un id de pokemon)
      .subscribe(); // todo : prendre en compte les erreurs de l'API
  }

  removePokemon(index: number): void {
    this.compo.splice(index,1);
    this.synchronizeTeam();
  }

  addPokemon(id: number): void {
    if( this.compo.length < this.COMPO_MAX) { // pas de vérif sur l'ID, car un utilisateur lambda ne peut pas provoquer cette erreur
      this.pokemonService.getPokemon(id).subscribe(
        (p: Pokemon) => this.compo.push(p)
      );
      this.synchronizeTeam();
    }
  }

}
