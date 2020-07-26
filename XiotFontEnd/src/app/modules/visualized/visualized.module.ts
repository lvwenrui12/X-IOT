import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizedRoutingModule } from './visualized-routing.module';
import { VisualizedComponent } from './visualized.component';


@NgModule({
  declarations: [VisualizedComponent],
  imports: [
    CommonModule,
    VisualizedRoutingModule
  ]
})
export class VisualizedModule { }
