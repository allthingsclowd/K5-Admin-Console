import { ComputeService } from './services/compute.service';
import { IdentityService } from './services/identity.service';
import { PasswordManagementService } from './services/password-management.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regions = ['uk-1', 'fi-1', 'de-1', 'es-1', 'us-1'];
  loginForm: FormGroup;
  loggedIn: boolean = false;
  failedLogIn: boolean = false;
  //projects :any;

  constructor(private identityService: IdentityService) { }

  ngOnInit() {
    this.identityService.loggedIn.subscribe(status => this.loggedIn = status)

    this.loginForm = new FormGroup({
      'loginData': new FormGroup({
        'user': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
        'contract': new FormControl(null, [Validators.required]),
        'region': new FormControl(null, [Validators.required])
      })
    });    
  }

  onLogin() {
    this.identityService.login( this.loginForm.get('loginData.user').value,
                                                this.loginForm.get('loginData.password').value,
                                                this.loginForm.get('loginData.contract').value,
                                                this.loginForm.get('loginData.region').value)
                                                .subscribe(
                                                    data => {
                                                        //this.identityService.loggedIn = true;
                                                        //this.failedLogIn = false;
                                                        console.log("Login.ts -> Logged In");
                                                        // this.identityService.getProjectList().subscribe(newProjectList => {
                                                        //   this.projects = newProjectList;
                                                        // });

                                                    },
                                                    error => {
                                                        //this.alertService.error(error);
                                                        //this.loading = false;
                                                        console.log('bang - something failed during login');
                                                        //this.failedLogIn = true;
                                                        this.loginForm.reset();
                                                        
                                                    });
    console.log(this.loginForm);
    //this.passwordForm.reset();
  }

 
}
