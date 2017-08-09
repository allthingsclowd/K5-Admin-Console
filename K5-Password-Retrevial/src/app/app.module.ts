import { PasswordManagementService } from './services/password-management.service';
import { ComputeService } from './services/compute.service';
import { IdentityService } from './services/identity.service';
import { UtilityService } from './services/utility.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SortObjectsByNamePipe } from './services/sort-objects-by-name.pipe';
import { LoginComponent } from './login.component';
import { ServerComponent } from './server.component';
import { NetworkComponent } from './network.component';
import { RouterComponent } from './router.component';
import { ProjectComponent } from './project.component';

@NgModule({
  declarations: [
    AppComponent,
    SortObjectsByNamePipe,
    LoginComponent,
    ServerComponent,
    NetworkComponent,
    RouterComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [IdentityService, UtilityService, ComputeService, PasswordManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
