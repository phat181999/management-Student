import { Component } from '@angular/core';
import { ClassesService } from './classes.service';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent {
  classes!: any[];
  constructor(private services: ClassesService) {}
  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.services.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }
}
