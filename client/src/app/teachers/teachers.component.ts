import { Component } from '@angular/core';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent {
  teachers!: any[];
  constructor(private services: TeachersService) {}
  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.services.getTeachers().subscribe((data) => {
      this.teachers = data;
    });
  }
}
