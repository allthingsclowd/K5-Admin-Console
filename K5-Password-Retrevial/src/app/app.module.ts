import { CryptRSAOAEPService } from './services/webcrypto.rsa-oaep.service';
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

@NgModule({
  declarations: [
    AppComponent,
    SortObjectsByNamePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [IdentityService, UtilityService, ComputeService, PasswordManagementService, CryptRSAOAEPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
