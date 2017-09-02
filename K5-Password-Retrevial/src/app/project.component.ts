import { projects, project } from './model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentityService } from './services/identity.service';
import { ComputeService } from './services/compute.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  userLoggedin: boolean = false;
  projects: projects = null;
  currentProject: project = null;

  constructor(private identityService: IdentityService,
              private computeService: ComputeService) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'project': new FormControl(null, [Validators.required])
      })      
    });
    this.userLoggedin = this.identityService.loggedIn;
    this.projects = this.identityService.k5projects;
  }

  projectChange(){
    this.identityService.getProjectScopedToken(this.projectForm.get('projectData.project').value)
      .subscribe( data => {
        console.log('new project token');
        console.log(data);
        //this.currentScopedToken = data;
        // this.computeService.getServerList(data)
        //   .subscribe( serverList => {
        //     this.servers = serverList.json().servers;
        //     console.log(this.servers);
            
         // });
      });
    
  }
}
