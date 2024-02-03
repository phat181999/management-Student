import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ClassesModule } from './classes/classes.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';

const routes: Routes = [
  {
    path: 'classes',
    component: ClassesComponent,
  },
  {
    path: 'teachers',
    component: TeachersComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    ClassesModule,
    TeachersModule,
    StudentsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
