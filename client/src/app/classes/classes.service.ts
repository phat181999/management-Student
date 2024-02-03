import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ODataQuery } from 'odata-query';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getClasses(): Observable<any[]> {
    const entity = `classes`;
    const url = `${this.baseUrl}/${entity}`;
    return this.http.get<any[]>(url);
  }
}
