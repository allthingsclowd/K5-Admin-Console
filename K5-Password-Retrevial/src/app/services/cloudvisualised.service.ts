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
      this.weight = weight || 1;
  }

}


interface IVisualNode {
  type: string;
  id: string;
  name: string;
  status?: string;
  availability_zone?: string;
  other?: string;
  links: Array<string>;
  device_id?: string;
  fixed_ips?: string;
  enable_dhcp?: boolean;
  network_id?: string;
  external_gateway_info?: any;
  LoadBalancerName?: string;
  State?: string;
  DNSName?: string;
  Subnets?: string;
  subnets?: string;



}

class VisualNode implements IVisualNode {
  type: string;
  id: string;
  name: string;
  availability_zone: string;
  links: Array<string>;
  status?: string;
  other?: string;
  device_id?: string;
  fixed_ips?: string;
  enable_dhcp?: boolean;
  network_id?: string;
  external_gateway_info?: any;
  LoadBalancerName?: string;
  State?: string;
  DNSName?: string;
  Subnets?: string;
  subnets?: string;

  constructor(  type: string,
                id: string,
                name: string,
                availability_zone: string
                ) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.availability_zone = availability_zone;
      this.links = [];
  }

  addLink(link: string): void {
      this.links.push(link);
  }
}

class VisualisationData {
  nodes: Array<VisualNode>;
  edges: Array<VisualLink>;

  constructor(nodes: Array<VisualNode>, edges: Array<VisualLink>) {
    this.nodes = nodes;
    this.edges = edges;

  }
}

@Injectable()
export class CloudvisualisedService {
  k5Nodes: VisualisationData;
  servers: any;
  ports: any;
  subnets: any;
  networks: any;
  routers: any;
  loadbalancers: any;

  localNodeList = new Array<VisualNode>();
  localEdgeList = new Array<VisualLink>();

  private nodeList = new BehaviorSubject<VisualNode[]>([]);
  currentNodeList = this.nodeList.asObservable();

  private edgeList = new BehaviorSubject<VisualLink[]>([]);
  currentEdgeList = this.edgeList.asObservable();

  private visualData = new BehaviorSubject<VisualisationData>(null);
  currentVisualData = this.visualData.asObservable();

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
  
  changeVisualData(data) {
    this.visualData.next(data);
  }

  updateNodeList(nodes) {
    console.log('Update Called');
    this.nodeList.next(nodes);
  }

  resetNodeList() {
    console.log('Reset Called');
    this.localNodeList = new Array<VisualNode>();
    this.nodeList.next(this.localNodeList);
  }

  locateIndexinNodeList(item: string, nodeList: Array<VisualNode>) {
    for (let node of nodeList) {
      if (item === node.id) {
        console.log('link Match') ;
        console.log(node.id, item);
        return nodeList.indexOf(node);
      }
    }
    console.log('link No Match') ;
    // console.log(node.id, item);
      
    return false;  
    
  }

  generateEdges(nodelist: Array<VisualNode>) {
    this.localEdgeList = new Array<VisualLink>();
    for (let node in nodelist) {
      console.log('Processing Node ', node);
      for (let link of nodelist[node].links) {
        const linkIndex = this.locateIndexinNodeList(link, this.localNodeList);
        if (linkIndex) {
          console.log('target');
          console.log(linkIndex);
          console.log('source');
          console.log(node);
          const newLink = new VisualLink(+node, linkIndex);
          this.localEdgeList.push(newLink);
        }
        // let source: number = +node;
        // let target: number = nodelist.indexOf(link);
        // this.localEdgeList.push(source,target);
        
        
      }
    }

    console.log('Finished Link List');
    console.log(this.localEdgeList);
    
  }

  getNodes(type: string, nodelist: Array<VisualNode>) {
    console.log('Visualisation Nodes ' + type);
    console.log(nodelist);
    this.localNodeList = this.nodeList.getValue();
    for (let node of nodelist) {
      console.log(node);
      let newNode = new VisualNode(type, node.id, node.name, node.availability_zone);
      // let newEdge = new VisualLink(1, 1);

      switch (type) {
        case 'port': {
           // statements;
           //newNode.availability_zone = node.availability_zone;
           if (node.name === '') {
             newNode.name = node.id;
           }
           newNode.status = node.status;
           newNode.addLink(node.device_id);
           // newNode.addLink(node.network_id);
           for (let link of node.fixed_ips) {
             if (link['subnet']) {
              newNode.addLink(link['subnet']);
             }
           }
           break;
        }
        case 'network': {
          // statements;
          newNode.status = node.status;
          for (let link of node.subnets) {
            console.log('Network Subnets');
            console.log(node.subnets);
            console.log(link);
            newNode.addLink(link);
          }
          break;
        }
        case 'subnetwork': {
          // statements;
          if (node.enable_dhcp) {
            newNode.status = 'DHCP';
          } else {
            newNode.status = 'NO_DHCP';
          }
          console.log('failing here => ' + node.network_id);
          newNode.addLink(node.network_id);
          break;
        }
        case 'router': {
          // statements;
          newNode.status = node.status;
          if (node.external_gateway_info != null) {
            newNode.addLink(node.external_gateway_info.network_id);
          } else {
            newNode.addLink(node.id);
          }

          break;
        }
        case 'lbaas': {
           // statements;
           newNode.name = node.LoadBalancerName;
           newNode.status = node.State;
           newNode.other = node.DNSName;
           newNode.id = node.LoadBalancerName;
           for (let link of node.Subnets) {
             newNode.addLink(link['member']);
            }
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
    this.localNodeList.push(newNode);
    }

    console.log(this.localNodeList);
    this.updateNodeList(this.localNodeList);
    console.log(this.currentNodeList);
    this.generateEdges(this.localNodeList);
    this.k5Nodes = new VisualisationData(this.localNodeList, this.localEdgeList);
    console.log('Final OutPut for D3JS');
    console.log(this.k5Nodes);
    this.changeVisualData(this.k5Nodes)

  }





}
