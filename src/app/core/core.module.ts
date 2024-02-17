import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    SliderComponent
  ]
})
export class CoreModule { }
