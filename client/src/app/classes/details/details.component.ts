import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetailsService } from './details.service';
import { UnsubscribeService } from 'src/app/common/unsubcribe/unsubscribe.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() visible!: boolean;
  @Input() title!: string;
  @Input() studentsData!: any;
  @Input() teachersData!: any;
  @Input() update: boolean = false;
  @Input() delete: boolean = false;
  @Input() add: boolean = false;
  @Input() addNewTeacher: boolean = false;
  @Input() updateTeacher: boolean = false;
  @Input() deleteTeacher: boolean = false;
  @Input() teacher: boolean = false;
  studentForm!: FormGroup;
  teacherForm!: FormGroup;
  newStudent: any = {};

  constructor(
    private fb: FormBuilder,
    private services: DetailsService,
    private unsubscribeService: UnsubscribeService
  ) {
    this.studentForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      birth_date: [''],
    });
    this.teacherForm = this.fb.group({
      first_name: [''],
      last_name: [''],
    });
  }

  updateForm(): void {
    if (this.studentsData) {
      this.studentForm.patchValue({
        first_name: this.studentsData.first_name,
        last_name: this.studentsData.last_name,
        birth_date: this.studentsData.birth_date,
      });
    } else {
      this.teacherForm.patchValue({
        first_name: this.teachersData.first_name,
        last_name: this.teachersData.last_name,
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['studentsData'] || changes['teachersData']) {
      this.updateForm();
    }
  }

  ngOnInit() {}

  closeDialog() {
    this.visibleChange.emit(false);
  }

  submitForm() {
    const updatedStudentData = {
      ...this.studentsData,
      ...this.studentForm.value,
    };

    this.services
      .updateStudent(this.studentsData.student_id, updatedStudentData)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe(
        (response) => {
          console.log('Update successful', response);
        },
        (error) => {
          console.error('Error updating student', error);
        }
      );
  }

  handleUpdateTeacher() {
    const updatedStudentData = {
      ...this.teachersData,
      ...this.teacherForm.value,
    };
    this.services
      .updateTeacher(this.teachersData.teacher_id, updatedStudentData)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe(
        (response) => {
          console.log('Update successful', response);
        },
        (error) => {
          console.error('Error updating student', error);
        }
      );
  }

  deleteStudent() {
    const student_id = this.studentsData.student_id;

    this.services
      .deleteStudent(student_id)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe(
        (response) => {
          console.log('Delete successful', response);
        },
        (error) => {
          console.error('Error deleting student', error);
        }
      );
  }

  deleteDetailTeacher() {
    const teacher_id = this.teachersData.teacher_id;

    this.services
      .deleteTeacher(teacher_id)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe(
        (response) => {
          console.log('Delete successful', response);
        },
        (error) => {
          console.error('Error deleting student', error);
        }
      );
  }

  handleAdd() {
    if (this.addNewTeacher) {
      this.addTeacherNew();
    } else {
      this.addNewStudent();
    }
  }

  handleUpdate() {
    if (this.updateTeacher) {
      this.handleUpdateTeacher();
    } else {
      this.submitForm();
    }
  }

  handleDelete() {
    if (this.deleteTeacher) {
      this.deleteDetailTeacher();
    } else {
      this.deleteStudent();
    }
  }

  addNewStudent() {
    const newStudentData = this.studentForm.value;
    this.services
      .addStudent(newStudentData)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe(
        (response) => {
          console.log('Add new student successful', response);
          this.studentForm.reset();
        },
        (error) => {
          console.error('Error adding new student', error);
        }
      );
  }

  addTeacherNew() {
    const newTeacherData = this.studentForm.value;
    this.services
      .addTeacher(newTeacherData)
      .pipe(takeUntil(this.unsubscribeService.unsubscribe$))
      .subscribe(
        (response) => {
          console.log('Add new student successful', response);
          this.studentForm.reset();
        },
        (error) => {
          console.error('Error adding new student', error);
        }
      );
  }
}
