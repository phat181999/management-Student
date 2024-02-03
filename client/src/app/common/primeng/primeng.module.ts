import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, TableModule, MenubarModule, ButtonModule],
  exports: [TableModule, MenubarModule, ButtonModule],
})
export class PrimengModule {}
