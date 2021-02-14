import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexComponent} from "./pokemons/pokedex/pokedex.component";
import {ConnexionFormComponent} from "./connexion/connexion-form/connexion-form.component";
import {AuthGuard} from "./auth.guard";
import {TeamComponent} from "./pokemons/team/team.component";

const routes: Routes = [
  {path: 'pokedex', component: PokedexComponent},
  {path: 'login', component: ConnexionFormComponent},
  {path: 'team', component: TeamComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/pokedex', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
