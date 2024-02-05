import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
  ],
  exports: [
    TableModule,
    MenubarModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
  ],
})
export class PrimengModule {}
