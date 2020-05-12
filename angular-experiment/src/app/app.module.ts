import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantViewComponent } from './tenant-view/tenant-view.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RemoveWorkGroupComponent } from './remove-work-group/remove-work-group.component';
import { AddUserToGroupComponent } from './add-user-to-group/add-user-to-group.component';
import { RemoveUserFromGroupComponent } from './remove-user-from-group/remove-user-from-group.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { AddWorkGroupComponent } from './add-work-group/add-work-group.component';
import { ListTenantsComponent } from './list-tenants/list-tenants.component';

@NgModule({
  declarations: [
    AppComponent, TenantViewComponent, AddUserComponent, RemoveWorkGroupComponent,
    AddUserToGroupComponent, RemoveUserFromGroupComponent, RemoveUserComponent, AddWorkGroupComponent, ListTenantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
