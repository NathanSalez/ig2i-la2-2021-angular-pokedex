import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from "@angular/material/list";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from "@angular/router";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {InfiniteScrollModule} from "ngx-infinite-scroll";



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    InfiniteScrollModule
  ]
})
export class PokemonsModule { }
