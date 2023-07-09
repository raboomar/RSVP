import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  addGuest (data:any):Observable<any>{
    return this.http
    .post<any>(
      `${environment.apiUrl}/saveGuestToSheet`,
      data,
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError))
  }

  getGuest():Observable<any>{
    return this.http
    .get( `${environment.apiUrl}`, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
