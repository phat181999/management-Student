import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { TableModule } from 'primeng/table';
import { ClassesService } from './classes.service';
import { PrimengModule } from '../common/primeng/primeng.module';

@NgModule({
  declarations: [ClassesComponent],
  imports: [CommonModule, PrimengModule],
  providers: [ClassesService],
})
export class ClassesModule {}
