import { Component } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  students!: any[];
  constructor(private services: StudentsService) {}
  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.services.getStudents().subscribe((data) => {
      this.students = data;
    });
  }
}
