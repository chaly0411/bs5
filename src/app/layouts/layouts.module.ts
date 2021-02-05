import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SLayoutComponent } from './s-layout/s-layout.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';



@NgModule({
  declarations: [SLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule
  ]
})
export class LayoutsModule { }
