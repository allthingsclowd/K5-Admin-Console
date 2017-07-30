import { IdentityService } from './services/identity.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects :any;
  servers = ['Server 1', 'Server 2', 'Server 3'];
  passwordForm: FormGroup;
  loggedIn : boolean = false;
  failedLogIn : boolean = false;

  constructor(private identityService: IdentityService) {}

  ngOnInit() {
    this.passwordForm = new FormGroup({
      'loginData': new FormGroup({
        'user': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
        'contract': new FormControl(null, [Validators.required])
      }),
      'serverData': new FormGroup({
        'project': new FormControl(null, [Validators.required]),
        'server': new FormControl(null, [Validators.required]),
        'pemkey': new FormControl(null, [Validators.required])
      })
      
    });
  }

  onLogin() {
    // console.log(this.passwordForm.get('loginData.user').value,
    //                                             this.passwordForm.get('loginData.password').value,
    //                                             this.passwordForm.get('loginData.contract').value);
    this.identityService.getCentralPortalToken( this.passwordForm.get('loginData.user').value,
                                                this.passwordForm.get('loginData.password').value,
                                                this.passwordForm.get('loginData.contract').value)
                                                .subscribe(
                                                    data => {
                                                        //console.log('Next should be the data');
                                                        //console.log(data);
                                                        this.identityService.loggedIn = true;
                                                        //this.identityService.k5response = data;
                                                        this.failedLogIn = false;
                                                        this.loggedIn = true;
                                                        this.identityService.getProjectList().subscribe(value => {
                                                                console.log('login - got project list');
                                                                this.projects = value;

                                                            });
                                                    },
                                                    error => {
                                                        //this.alertService.error(error);
                                                        //this.loading = false;
                                                        console.log('bang - something failed during login');
                                                        this.failedLogIn = true;
                                                        this.passwordForm.reset();
                                                        
                                                    });
    console.log(this.passwordForm);
    //this.passwordForm.reset();
  }

  onLogout() {
    this.identityService.logout();
    this.passwordForm.reset();
    this.loggedIn = false;

  }

  onThisButton() {
    console.log(this.passwordForm.get('serverData'));
    //this.passwordForm.reset();
  } 
}
