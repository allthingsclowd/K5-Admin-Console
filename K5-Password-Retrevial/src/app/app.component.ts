import { PasswordManagementService } from './services/password-management.service';
import { ComputeService } from './services/compute.service';
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
  servers : any;
  regions = ['uk-1', 'fi-1', 'de-1', 'es-1', 'us-1'];
  passwordForm: FormGroup;
  loggedIn : boolean = false;
  projectList : boolean = false;
  failedLogIn : boolean = false;
  currentScopedToken: Response;
  passwordReceived : boolean = false;
  encryptedPassword : string = '';

  constructor(private identityService: IdentityService,
              private computeService: ComputeService,
              private passwordManagementService: PasswordManagementService) {
                console.log('Crypto Test');
                console.log(this.passwordManagementService.getKey());
              }


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
    this.identityService.getProjectScopedToken(this.passwordForm.get('serverData.project').value)
      .subscribe( data => {
        console.log(data);
        this.currentScopedToken = data;
        this.computeService.getServerList(data)
          .subscribe( serverList => {
            this.servers = serverList.json().servers;
            console.log(this.servers);
            
          });
      });
    
  }
  
  serverChange(){
    let token = this.currentScopedToken;
    let serverId = this.passwordForm.get('serverData.server').value;
    console.log('Server Password Prerequisites');
    console.log(token);
    console.log(serverId);
    this.passwordReceived = false;
    this.computeService.getServerPassword(token, serverId)
          .subscribe( serverPassword => {
            this.passwordReceived = true;
            console.log('Encrypted Password is');
            console.log(serverPassword);
            this.encryptedPassword = serverPassword;
            

            
          });
          
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
    this.passwordReceived = false;
    this.loggedIn = false;

  }

  onThisButton() {
    console.log(this.passwordForm.get('serverData'));
    console.log("Importing Key...");
    console.log(this.passwordManagementService.keyImport(this.passwordForm.get('serverData.keypem').value));
  } 
}
