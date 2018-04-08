import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export abstract class Service<T> {

  constructor(private http: HttpClient, private name: String) { }

  public static isErrorObservable<T>(observable: T | ErrorObservable):
    observable is ErrorObservable {
    return (<ErrorObservable>observable).error !== undefined;
  }

  all(): Observable<T[] | ErrorObservable> {
    return this.http.get<T[]>(`/api/${this.name}`)
      .pipe(catchError(this.handleError));
  }

  by(id: String): Observable<T | ErrorObservable> {
    return this.http.get<T>(`/api/${this.name}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(t: T): Observable<T | ErrorObservable> {
    return this.http.post<T>(`/api/${this.name}`, t)
      .pipe(catchError(this.handleError));
  }

  upsert(t: T): Observable<T | ErrorObservable> {
    return this.http.put<T>(`/api/${this.name}`, t)
      .pipe(catchError(this.handleError));
  }

  update(id: String, t: T): Observable<T | ErrorObservable> {
    return this.http.patch<T>(`/api/${this.name}/${id}`, t)
      .pipe(catchError(this.handleError));
  }

  delete(id: String): Observable<T | ErrorObservable> {
    return this.http.delete<T>(`/api/${this.name}/${id}`)
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
