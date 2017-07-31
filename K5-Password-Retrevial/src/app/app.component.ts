import { IdentityService } from './services/identity.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects :any;
  servers = ['Server 1', 'Server 2', 'Server 3'];
  regions = ['uk-1', 'fi-1', 'de-1', 'es-1', 'us-1'];
  passwordForm: FormGroup;
  loggedIn : boolean = false;
  projectList : boolean = false;
  failedLogIn : boolean = false;

  constructor(private identityService: IdentityService) {}


  ngOnInit() {
    this.passwordForm = new FormGroup({
      'loginData': new FormGroup({
        'user': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
        'contract': new FormControl(null, [Validators.required]),
        'region': new FormControl(null, [Validators.required])
      }),
      'serverData': new FormGroup({
        'project': new FormControl(null, [Validators.required]),
        'server': new FormControl(null, [Validators.required]),
        'pemkey': new FormControl(null, [Validators.required])
      })
      
    });
  }

  projectChange(){
    console.log(this.passwordForm);
  }

  onLogin() {
    // console.log(this.passwordForm.get('loginData.user').value,
    //                                             this.passwordForm.get('loginData.password').value,
    //                                             this.passwordForm.get('loginData.contract').value);
    this.identityService.login( this.passwordForm.get('loginData.user').value,
                                                this.passwordForm.get('loginData.password').value,
                                                this.passwordForm.get('loginData.contract').value,
                                                this.passwordForm.get('loginData.region').value)
                                                .subscribe(
                                                    data => {
                                                        //console.log('Next should be the data');
                                                        //console.log(data);
                                                        this.identityService.loggedIn = true;
                                                        //this.identityService.k5response = data;
                                                        this.failedLogIn = false;
                                                        this.loggedIn = true;
                                                        this.identityService.getProjectList().subscribe(newProjectList => {
                                                          this.projects = newProjectList;
                                                          console.log('projects ->');
                                                          console.log(this.projects);
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
