import { CloudvisualisedService } from './services/cloudvisualised.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cloudvisualised',
  templateUrl: './cloudvisualised.component.html',
  styleUrls: ['./cloudvisualised.component.css']
})
export class CloudvisualisedComponent implements OnInit {

  nodeDetails: any;

  constructor(
    private cloudvisualisedService: CloudvisualisedService
  ) { 
    this.cloudvisualisedService.currentVisualData.subscribe(newData => this.nodeDetails = newData);
  }

  ngOnInit() {
  }

}
