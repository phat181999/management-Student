import { Component } from '@angular/core';
import { ClassesService } from './classes.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Students } from '../models/students.model';
import { UnsubscribeService } from '../common/unsubcribe/unsubscribe.service';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent {
  classes!: any[];
  data!: any[];
  students!: any[];
  teachers!: any[];
  title: string = '';
  visible: boolean = false;
  studentsData!: any[];
  teachersData!: any[];
  update: boolean = false;
  delete: boolean = false;
  add: boolean = false;
  updateTeacher: boolean = false;
  deleteTeacher: boolean = false;
  addNewTeacher: boolean = false;
  teacher: boolean = false;
  constructor(
    private services: ClassesService,
    private fb: FormBuilder,
    private unsubscribeService: UnsubscribeService
  ) {}
  ngOnInit() {
    this.getData();
    this.getStudents();
    this.getTeachers();
  }

  getData() {
    this.services
      .getAll()
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe((data) => {
        this.data = data;
      });
  }

  getTeachers() {
    this.services
      .getTeachers()
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe((data) => {
        this.teachers = data;
      });
  }

  getStudents() {
    this.services
      .getStudents()
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe((data) => {
        this.students = data;
      });
  }

  handleStudents(student_id: number) {
    this.update = true;
    this.visible = true;
    this.title = 'Edit Students';
    this.services
      .getDetailStudent(student_id)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe((data: any) => {
        this.studentsData = data;
      });
  }

  deleteStudents(student_id: number) {
    this.delete = true;
    this.visible = true;
    this.title = 'Are You Sure ?';
    this.services
      .getDetailStudent(student_id)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe((data: any) => {
        this.studentsData = data;
      });
  }

  onVisibleChange(value: boolean) {
    this.visible = value;
  }

  addStudent() {
    this.add = true;
    this.visible = true;
    this.title = 'Add Students';
  }

  addTeacher() {
    this.teacher = true;
    this.addNewTeacher = true;
    this.visible = true;
    this.title = 'Add Teachers';
  }

  handleUpdateTeacher(teacher_id: number) {
    this.teacher = true;
    this.updateTeacher = true;
    this.visible = true;
    this.title = 'Edit Teacher';
    this.services
      .getDetailTeacher(teacher_id)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe((data: any) => {
        this.teachersData = data;
      });
  }

  handleDeleteTeacher(teacher_id: number) {
    this.teacher = true;
    this.deleteTeacher = true;
    this.visible = true;
    this.title = 'Are You Sure ?';
    this.services
      .getDetailTeacher(teacher_id)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe((data: any) => {
        this.teachersData = data;
      });
  }
}
