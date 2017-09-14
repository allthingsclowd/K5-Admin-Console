import { PasswordManagementService } from './services/password-management.service';
import { ComputeService } from './services/compute.service';
import { IdentityService } from './services/identity.service';
import { UtilityService } from './services/utility.service';
import { StackService } from './services/stack.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SortObjectsByNamePipe } from './services/sort-objects-by-name.pipe';
import { LoginComponent } from './login.component';
import { ServerComponent } from './server.component';
import { NetworkComponent } from './network.component';
import { RouterComponent } from './router.component';
import { ProjectComponent } from './project.component';
import { DisplayObjectPipe } from './services/display-object.pipe';
import { ConvertSubset2ArrayPipe } from './services/convert-subset2-array.pipe';
import { RemoveQuotesPipe } from './services/remove-quotes.pipe';
import { LogoutComponent } from './logout.component';
import { ProjectPanelComponent } from './project-panel.component';
import { StackSorterPipe } from './services/stack-sorter.pipe';
import { ConvertUserIDtoNamePipe } from './services/convert-user-idto-name.pipe';
import { ConvertRoleIDtoNamePipe } from './services/convert-role-idto-name.pipe';
import { ConvertGroupIDtoNamePipe } from './services/convert-group-idto-name.pipe';
import { ConvertProjectIDtoNamePipe } from './services/convert-project-idto-name.pipe';
import { UserManagementComponent } from './user-management.component';
import { UserMaintenanceService } from './services/user-maintenance.service';
import { BillingComponent } from './billing.component';

@NgModule({
  declarations: [
    AppComponent,
    SortObjectsByNamePipe,
    LoginComponent,
    ServerComponent,
    NetworkComponent,
    RouterComponent,
    ProjectComponent,
    DisplayObjectPipe,
    ConvertSubset2ArrayPipe,
    RemoveQuotesPipe,
    LogoutComponent,
    ProjectPanelComponent,
    StackSorterPipe,
    ConvertUserIDtoNamePipe,
    ConvertRoleIDtoNamePipe,
    ConvertGroupIDtoNamePipe,
    ConvertProjectIDtoNamePipe,
    UserManagementComponent,
    BillingComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterialModule,            // <----- this module will be deprecated in the future version.
    MdDatepickerModule,        // <----- import(must)
    MdNativeDateModule,         // <----- import(optional)
    BrowserAnimationsModule
  ],
  providers: [IdentityService, UtilityService, StackService, ComputeService, PasswordManagementService, UserMaintenanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
