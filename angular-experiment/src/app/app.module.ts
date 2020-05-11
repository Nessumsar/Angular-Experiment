import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantViewComponent } from './tenant-view/tenant-view.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';


@NgModule({
  declarations: [
    AppComponent, TenantViewComponent, AddUserComponent, RemoveUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
