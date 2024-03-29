import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getTeachers(): Observable<any[]> {
    const entity = `students-classes`;
    const url = `${this.baseUrl}/${entity}`;
    return this.http.get<any[]>(url);
  }
}
