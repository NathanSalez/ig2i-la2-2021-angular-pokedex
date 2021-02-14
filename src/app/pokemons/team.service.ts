import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl: string = environment.apiHost + "/trainers/me/team";

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

  getComposition(): Observable<number[]> {
    return this.http.get<number[]>(this.baseUrl)
      .pipe(
        tap(result => console.log(result)),
        catchError(this.handleError<number[]>('getComposition'))
      );
  }

  changeTeam(newTeam: number[]): Observable<undefined> {
    return this.http.put<undefined>(this.baseUrl,newTeam)
      .pipe(catchError(this.handleError<undefined>('changeTeam'))
      );
  }
}
