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
  loggedIn: boolean = false;
  projects: projects = null;
  currentProject: project = null;

  constructor(private identityService: IdentityService,
              private computeService: ComputeService) { }

  ngOnInit() {
    this.identityService.loggedIn.subscribe(status => this.loggedIn = status);
    this.identityService.userProjects.subscribe(currentProjects => this.projects = currentProjects);
    this.identityService.currentProject.subscribe(project => this.currentProject = project);

    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'project': new FormControl(null, [Validators.required])
      })      
    });
    //this.projects = this.identityService.k5projects;
    console.log("Projects, Project, Logged In Status are as follows (next three lines) : ");
    console.log(this.projects);
    console.log(this.currentProject);
    console.log(this.loggedIn);
  }

  projectChange(){

    this.identityService.changeProject(this.projectForm.get('projectData.project').value);
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
      console.log("PROJECT CHANGE SELECTED Projects, Project, Logged In Status are as follows (next three lines) : ");
      console.log(this.projects);
      console.log(this.currentProject);
      console.log(this.loggedIn);
    
  }
}
