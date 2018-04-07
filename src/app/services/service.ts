import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export abstract class Service<T> {

  constructor(private http: HttpClient, private name: String) { }

  all(): Observable<T[]> {
    return this.http.get<T[]>(`/api/${name}`)
      .pipe(catchError(this.handleError));
  }

  by(id: String): Observable<T> {
    return this.http.get<T>(`/api/${name}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(t: T): Observable<T> {
    return this.http.post<T>(`/api/${name}`, t)
      .pipe(catchError(this.handleError));
  }

  upsert(t: T): Observable<T> {
    return this.http.put<T>(`/api/${name}`, t)
      .pipe(catchError(this.handleError));
  }

  update(id: String, t: T): Observable<T> {
    return this.http.patch<T>(`/api/${name}/${id}`, t)
      .pipe(catchError(this.handleError));
  }

  delete(id: String): Observable<T> {
    return this.http.delete<T>(`/api/${name}/${id}`)
      .pipe(catchError(this.handleError));
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Looks like something bad has happened; please try again later.');
  };

}
