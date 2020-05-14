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
import { ListWorkGroupsComponent } from './list-work-groups/list-work-groups.component';
import { WorkGroupViewComponent } from './work-group-view/work-group-view.component';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddWorkGroupComponent,
    AddUserToGroupComponent,
    ListTenantsComponent,
    ListWorkGroupsComponent,
    RemoveWorkGroupComponent,
    RemoveUserFromGroupComponent,
    RemoveUserComponent,
    TenantViewComponent,
    WorkGroupViewComponent,
    NavbarComponent,
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path : '', component: NavbarComponent}, // ändra till någon index
      {path : 'tenant-view', component: TenantViewComponent},
      {path : 'add-user', component: AddUserComponent},
      {path : 'add-work-group', component: AddWorkGroupComponent},
      {path : 'tenant/:groupname', component: AppComponent},
      {path : 'work-group/:groupname', component: AppComponent},
      {path : 'super', component: ListTenantsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
