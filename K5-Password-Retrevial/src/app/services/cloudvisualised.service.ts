import { NetworkService } from './network.service';
import { LoadbalancerService } from './loadbalancer.service';
import { ComputeService } from './compute.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
  other: string;
  az: string;
  links: Array<string>;

  constructor(type: string, id?: string, name?: string, other?: string, az?: string, status?: string, links?: Array<string>) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.status = status;
      this.other = other;
      this.az = az;
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

  newNodeList = new VisualisationData();
  // private userNodeList = new BehaviorSubject<VisualisationData>(null);
  // newNodeList = this.userNodeList.asObservable();

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


  getNodes(type: string, nodelist: Array<any>) {
    console.log('Visualisation Nodes');
    console.log(nodelist);
    for (let node of nodelist) {
      let newNode = new VisualNode(type, node.id, node.name, node.availability_zone);
      let newEdge = new VisualLink(1, 1);

      switch (type) {
        case 'port': {
           // statements;
           newNode.status = node.status;
           break;
        }
        case 'network': {
          // statements;
          newNode.status = node.status;
          break;
        }
        case 'subnetwork': {
          // statements;
          newNode.status = node.status;
          break;
        }
        case 'router': {
          // statements;
          newNode.status = node.status;
          break;
        }
        case 'lbaas': {
           // statements;
           newNode.name = node.LoadBalancerName;
           newNode.status = node.State;
           newNode.other = node.DNSName;
           newNode.id = node.LoadBalancerName;
           break;
        }
        default: {
           // statements;
           break;
        }
     }
     console.log(newNode);
      // console.log(this.routers);
      // console.log(this.loadbalancers);
    this.newNodeList.addNodes(newNode, newEdge);
    }

    console.log(this.newNodeList);

  }

  // let k5Nodes = [
  //   new VisualNode(item.id, item.name, 'port',item.status,item.link)
  // ];

}
