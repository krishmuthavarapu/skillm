import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Caf } from './caf';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CafApiService {
  PHP_API_SERVER = "http://127.0.0.1:80";

  constructor(private httpClient: HttpClient) { }

  readStudent(): Observable<Caf[]>{
    return this.httpClient.get<Caf[]>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/read.php`);
  }
  createStudent(caf:Caf):Observable<Caf>{
    return this.httpClient.post<Caf>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/create.php`,caf);
  }
  updateStudent(caf:Caf){
    return this.httpClient.put<Caf>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/update.php`,caf);
  }
  deleteStudent(id:number){
    return this.httpClient.delete<Caf>(`${this.PHP_API_SERVER}/angular/skill-monks/skillphp/api/delete.php/?id=${id}`);
  }
}
