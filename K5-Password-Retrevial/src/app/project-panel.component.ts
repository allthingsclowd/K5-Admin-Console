import { ComputeService } from './services/compute.service';
import { IdentityService } from './services/identity.service';
import { project } from './model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.css']
})
export class ProjectPanelComponent implements OnInit {
  userServers: any = null;
  currentProjectT: any = null;
  serverDetails: any = null;
  serverLogs: any = null;
  currentServer: any = null;

  constructor(private computeService: ComputeService,
              private identityService: IdentityService) { }

  ngOnInit() {
    //this.identityService.currentProject.subscribe(selectedProject => this.currentProject = selectedProject);
    this.identityService.userPToken.subscribe(currentProjectToken => this.currentProjectT = currentProjectToken);
    this.computeService.userServers.subscribe(servers => this.userServers = servers);
    this.computeService.serverDetails.subscribe(server => this.serverDetails = server);
    this.computeService.serverLogs.subscribe(logs => this.serverLogs = logs);
    console.log('Servers => ');
    console.log(this.userServers);
  }
  
  serverChange(server) {
    this.computeService.getServerDetails(this.currentProjectT, server);
    this.computeService.getServerLogs(this.currentProjectT, server);
    console.log('Change Server => ');
    console.log(this.serverDetails);
    console.log(this.serverLogs);

  }
}
