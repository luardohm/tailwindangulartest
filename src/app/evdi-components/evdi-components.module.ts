import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline/headline.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [HeadlineComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeadlineComponent,
    ButtonComponent
  ]
})
export class EvdiComponentsModule { }
