import { StackService } from './services/stack.service';
import { UserMaintenanceService } from './services/user-maintenance.service';
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
  contractProjects: any = null;
  contractUsers: any = null;
  contractGroups: any = null;
  contractRoles: any = null;
  roleAssignment: any = null;
  groupUsers: any = null;
  userGlobalToken: any = null;

  constructor(private computeService: ComputeService,
              private userMaintenanceService: UserMaintenanceService,
              private identityService: IdentityService,
              private stackService: StackService) { }


  ngOnInit() {

    this.identityService.contractProjects.subscribe(projects => this.contractProjects = projects);
    this.identityService.usersInGroup.subscribe(gusers => this.groupUsers = gusers);
    this.identityService.roleAssignments.subscribe(roles => this.roleAssignment = roles);
    this.identityService.contractUsers.subscribe(users => this.contractUsers = users);
    this.identityService.contractGroups.subscribe(groups => this.contractGroups = groups);
    this.identityService.contractRoles.subscribe(roles => this.contractRoles = roles);
    this.identityService.userPToken.subscribe(currentProjectToken => this.currentProjectT = currentProjectToken);
    this.identityService.userGToken.subscribe(globalToken => this.userGlobalToken = globalToken);
    this.computeService.userServers.subscribe(servers => this.userServers = servers);
    this.computeService.serverDetails.subscribe(server => this.serverDetails = server);
    this.computeService.serverLogs.subscribe(logs => this.serverLogs = logs);
    this.stackService.stackDetails.subscribe(stackDetail => this.stackDetails = stackDetail);
    this.stackService.userStacks.subscribe(stacks => this.userStacks = stacks);
    this.stackService.stackOutputs.subscribe(outputs => this.stackOutputs = outputs);
    console.log('Contract Groups');
    console.log(this.contractGroups);
  }

  serverChange(server) {
    this.computeService.getServerDetails(this.currentProjectT, server);
    this.computeService.getServerLogs(this.currentProjectT, server);
    console.log('Change Server => ');
    console.log(this.serverDetails);
    console.log(this.serverLogs);
  }

  userSelection(user) {
    console.log('Calling USER EMAIL API');
    console.log(this.userGlobalToken);
    console.log(user);
    this.identityService.getUserInfo(user);

  }

  stackChange(stack) {
    this.stackService.getStackDetails(this.currentProjectT, stack);
    // outputs API call not currently implemented on K5
    // this.stackService.getStackOutputs(this.currentProjectT, stack);
    console.log('Change Stack => ');
    console.log(this.stackDetails);
  }

  groupSelection(role) {
    console.log('Group Users Entry');
    console.log(role);
    this.identityService.getUsersInGroup(role);

  }
}
