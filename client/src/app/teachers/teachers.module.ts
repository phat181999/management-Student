import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeachersService } from './teachers.service';
import { PrimengModule } from '../common/primeng/primeng.module';

@NgModule({
  declarations: [TeachersComponent],
  imports: [CommonModule, PrimengModule],
  providers: [TeachersService],
})
export class TeachersModule {}
