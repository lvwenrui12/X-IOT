import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceManageModule } from '@modules/device-manage/device-manage.module';
import { VisualizedModule } from '@modules/visualized/visualized.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DeviceManageModule,
    VisualizedModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path: 'device', loadChildren: '@modules/device-manage/device-manage.module#DeviceManageModule'

    },
    {
      path: 'visualized', loadChildren: './modules/visualized/visualized.module#VisualizedModule'

    },
    {
      path: '',
      redirectTo: 'device',
      pathMatch: 'full'
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
