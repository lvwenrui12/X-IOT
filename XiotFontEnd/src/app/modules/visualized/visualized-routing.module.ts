import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizedComponent } from '@modules/visualized/visualized.component'


const routes: Routes = [{
  path: '', component: VisualizedComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizedRoutingModule { }
