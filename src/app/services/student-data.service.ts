import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {StudentData} from '../classes/student-data';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  baseUrl = 'http://localhost/angular/post.php';
studentsData: StudentData[];

  constructor(private http: HttpClient) { }
}
