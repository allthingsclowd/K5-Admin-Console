import { NetworkService } from './network.service';
import { LoadbalancerService } from './loadbalancer.service';
import { ComputeService } from './compute.service';
import { Injectable } from '@angular/core';

interface IVisualLink {
  source: number;
  target: number;
  weight: number;
}

class VisualLink implements IVisualLink {
  source: number;
  target: number;
  weight: number;

  constructor(source: number, target: number, weight?: number) {
      this.source = source;
      this.target = target;
      this.weight = weight || undefined;
  }
}

interface IVisualNode {
  id: string;
  name: string;
  type: string;
  status: string;
  links: Array<string>;
}

class VisualNode implements IVisualNode {
  id: string;
  name: string;
  type: string;
  status: string;
  links: Array<string>;

  constructor(id: string, name: string, type: string, status: string, links?: Array<string>) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.status = status;
      this.links = links || [];
  }

  addLink(link: string): void {
      this.links.push(link);
  }
}

class VisualisationData {
  nodes: Array<VisualNode>;
  edges: Array<VisualLink>;

  constructor() {
    this.nodes = [];
    this.edges = [];

  }

  addNodes(node: VisualNode, edge: VisualLink): void {
    this.nodes.push(node);
    this.edges.push(edge);
}
}

@Injectable()
export class CloudvisualisedService {
  k5Nodes: Array<VisualNode>;
  servers: any;
  ports: any;
  subnets: any;
  networks: any;
  routers: any;
  loadbalancers: any;

  constructor() {}
              // private computeService: ComputeService,
              // private loadBalancerService: LoadbalancerService,
              // private networkService: NetworkService) {

              //   // this.computeService.userServers.subscribe(currentServers => this.servers = currentServers);
              //   // this.loadBalancerService.userLBaaS.subscribe(currentLbaas => this.loadbalancers = currentLbaas);
              //   // this.networkService.userPorts.subscribe(currentPorts => this.ports = currentPorts);
              //   // this.networkService.userSubNetworks.subscribe(currentSubnets => this.subnets = currentSubnets);
              //   // this.networkService.userNetworks.subscribe(currentNetworks => this.networks = currentNetworks);
              //   // this.networkService.userRouters.subscribe(currentRouters => this.routers = currentRouters);
              // }


  getNodes(nodelist: Array<any>) {
    console.log('Visualisation Nodes');
    let node in nodelist
    console.log(this.ports);
    console.log(this.subnets);
    console.log(this.networks);
    console.log(this.routers);
    console.log(this.loadbalancers);
  }

  // let k5Nodes = [
  //   new VisualNode(item.id, item.name, 'port',item.status,item.link)
  // ];

}
