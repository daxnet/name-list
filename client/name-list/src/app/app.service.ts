import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getNames(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.serviceUri}/api/names`)
    .pipe(
      tap(_ => console.log('fetched names')),
      catchError(this.handleError<string[]>([]))
    );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
