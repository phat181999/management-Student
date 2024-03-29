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

  getAll(): Observable<any[]> {
    const entity = `classes`;
    const url = `${this.baseUrl}/${entity}`;
    return this.http.get<any[]>(url);
  }

  getStudents(): Observable<any[]> {
    const entity = `students`;
    const url = `${this.baseUrl}/${entity}`;
    return this.http.get<any[]>(url);
  }

  getDetailStudent(student_id: number): Observable<any[]> {
    const entity = `student`;
    const url = `${this.baseUrl}/${entity}/${student_id}`;
    return this.http.get<any[]>(url);
  }

  getTeachers(): Observable<any[]> {
    const entity = `teachers`;
    const url = `${this.baseUrl}/${entity}`;
    return this.http.get<any[]>(url);
  }

  getDetailTeacher(teacher_id: number): Observable<any[]> {
    const entity = `teacher`;
    const url = `${this.baseUrl}/${entity}/${teacher_id}`;
    return this.http.get<any[]>(url);
  }
}
