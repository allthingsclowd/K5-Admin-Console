import { StackService } from './services/stack.service';
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
  stackDetails: any = null;
  userStacks: any = null;
  stackOutputs: any = null;

  constructor(private computeService: ComputeService,
              private identityService: IdentityService,
              private stackService: StackService) { }

  ngOnInit() {

    this.identityService.userPToken.subscribe(currentProjectToken => this.currentProjectT = currentProjectToken);
    this.computeService.userServers.subscribe(servers => this.userServers = servers);
    this.computeService.serverDetails.subscribe(server => this.serverDetails = server);
    this.computeService.serverLogs.subscribe(logs => this.serverLogs = logs);
    this.stackService.stackDetails.subscribe(stackDetail => this.stackDetails = stackDetail);
    this.stackService.userStacks.subscribe(stacks => this.userStacks = stacks);
    this.stackService.stackOutputs.subscribe(outputs => this.stackOutputs = outputs);
  }

  serverChange(server) {
    this.computeService.getServerDetails(this.currentProjectT, server);
    this.computeService.getServerLogs(this.currentProjectT, server);
    console.log('Change Server => ');
    console.log(this.serverDetails);
    console.log(this.serverLogs);
  }

  stackChange(stack) {
    this.stackService.getStackDetails(this.currentProjectT, stack);
    // outputs API call not currently implemented on K5
    // this.stackService.getStackOutputs(this.currentProjectT, stack);
    console.log('Change Stack => ');
    console.log(this.stackDetails);
  }
}
