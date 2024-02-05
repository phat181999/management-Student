import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { PrimengModule } from 'src/app/common/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsService } from './details.service';
import { DateFormatPipe } from 'src/app/common/middles/date-format.pipe';

@NgModule({
  declarations: [DetailsComponent, DateFormatPipe],
  imports: [CommonModule, PrimengModule, ReactiveFormsModule, FormsModule],
  exports: [DetailsComponent],
  providers: [DetailsService],
})
export class DetailsModule {}
