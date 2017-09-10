import { ComputeService } from './services/compute.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.css']
})
export class ProjectPanelComponent implements OnInit {
  userServers: any = null;

  constructor(private computeService: ComputeService) { }

  ngOnInit() {
    this.computeService.userServers.subscribe(servers => this.userServers = servers);
    console.log('Servers => ');
    console.log(this.userServers);
  }

}
