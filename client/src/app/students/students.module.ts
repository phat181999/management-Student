import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsService } from './students.service';
import { PrimengModule } from '../common/primeng/primeng.module';

@NgModule({
  declarations: [StudentsComponent],
  providers: [StudentsService],
  imports: [CommonModule, PrimengModule],
})
export class StudentsModule {}
