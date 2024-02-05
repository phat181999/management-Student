import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  updateStudent(student_id: number, data: any): Observable<any> {
    const entity = `update/student`;
    const url = `${this.baseUrl}/${entity}/${student_id}`;
    const jsonData = {
      firstName: data.first_name,
      lastName: data.last_name,
      birthDate: data.birth_date,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.patch<any>(url, jsonData, { headers });
  }

  updateTeacher(student_id: number, data: any): Observable<any> {
    const entity = `update/teacher`;
    const url = `${this.baseUrl}/${entity}/${student_id}`;
    const jsonData = {
      firstName: data.first_name,
      lastName: data.last_name,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.patch<any>(url, jsonData, { headers });
  }

  deleteStudent(student_id: number): Observable<any> {
    const entity = `delete/student`;
    const url = `${this.baseUrl}/${entity}/${student_id}`;

    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.delete<any>(url, { headers });
  }

  deleteTeacher(teacher_id: number): Observable<any> {
    const entity = `delete/teacher`;
    const url = `${this.baseUrl}/${entity}/${teacher_id}`;

    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.delete<any>(url, { headers });
  }

  addStudent(data: any): Observable<any> {
    const entity = `create/student`;
    const url = `${this.baseUrl}/${entity}`;
    const jsonData = {
      firstName: data.first_name,
      lastName: data.last_name,
      birthDate: data.birth_date,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post<any>(url, jsonData, { headers });
  }

  addTeacher(data: any): Observable<any> {
    const entity = `create/teacher`;
    const url = `${this.baseUrl}/${entity}`;
    const jsonData = {
      firstName: data.first_name,
      lastName: data.last_name,
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post<any>(url, jsonData, { headers });
  }
}
