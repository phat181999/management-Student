import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { ClassesService } from './classes.service';
import { PrimengModule } from '../common/primeng/primeng.module';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [ClassesComponent],
  imports: [CommonModule, PrimengModule, DetailsModule],
  providers: [ClassesService],
})
export class ClassesModule {}
