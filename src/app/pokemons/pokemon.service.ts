import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {ApiResponse} from "../models/api-response.model";
import {Pokemon} from "../models/pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.apiHost + "/pokemons";

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(result => console.log(result)),
      catchError(this.handleError<Pokemon>('getPokemon'))
    )
  }

  getPokemons(offset?: number, limit?: number, search?: string): Observable<ApiResponse<Pokemon>> {
    let params= new HttpParams();
    if(offset) {
      params = params.set('offset', `${offset}`);
    }
    if(limit) {
      params = params.set('limit', `${limit}`);
    }
    if(search) {
      params = params.set('search', search);
    }
    return this.http.get<ApiResponse<Pokemon>>(this.baseUrl, {params})
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError<ApiResponse<Pokemon>>('getPokemons'))
      );
  }
}
