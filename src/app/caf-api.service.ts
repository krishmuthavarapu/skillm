import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Caf } from './caf';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CafApiService {
  PHP_API_SERVER = "http://127.0.0.1:80";

  constructor(private httpClient: HttpClient) { }

  readStudent(): Observable<Caf[]>{
    return this.httpClient.get<Caf[]>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/read.php`);
  }
  getStudents(id: number): Observable<Caf> {
    const url = `${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/read.php/${id}`;
    return this.httpClient.get<Caf>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Caf>(`getProduct id=${id}`))
    );
  }
  createStudent(caf:Caf):Observable<Caf>{
    return this.httpClient.post<Caf>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/create.php`,caf);
  }
  // updateStudent(caf:Caf){
  //   return this.httpClient.put<Caf>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/update.php`,caf);
  // }
  updateStudent (id, Caf): Observable<any>{
    const url =`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/update.php/${id}`;
    return this.httpClient.put(url,Caf,httpOptions).pipe(
      tap(_ => console.log(`update student id =${id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }
  deleteStudent(id:number){
    return this.httpClient.delete<Caf>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/delete.php/?id=${id}`);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
