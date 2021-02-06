import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {MatListModule} from "@angular/material/list";
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {RouterModule} from "@angular/router";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
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
    MatIconModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class PokemonsModule { }
