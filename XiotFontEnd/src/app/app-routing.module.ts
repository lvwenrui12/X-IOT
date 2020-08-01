import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path: 'device', loadChildren: '@modules/device-manage/device-manage.module#DeviceManageModule'
},
{
  path: 'visualized', loadChildren: '@modules/visualized/visualized.module#VisualizedModule'
},
{
  path: '',
  redirectTo: 'device',
  pathMatch: 'full'
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
