import { Component, OnInit } from '@angular/core';
import { IpsecvpnService } from './services/ipsecvpn.service';

@Component({
  selector: 'app-ipsecvpn',
  templateUrl: './ipsecvpn.component.html',
  styleUrls: ['./ipsecvpn.component.css']
})
export class IpsecvpnComponent implements OnInit {
  vpnServices: any;
  vpnService: any;
  ipsecPolicies: any;
  ipsecPolicy: any;
  ikePolicies: any;
  ikePolicy: any;
  ipsecConnections: any;
  ipsecConnection: any;

  constructor(private ipsecvpnService: IpsecvpnService) {
    this.ipsecvpnService.ipsecPolicies.subscribe(policies => this.ipsecPolicies = policies);
    this.ipsecvpnService.ipsecPolicy.subscribe(policy => this.ipsecPolicy = policy);
    this.ipsecvpnService.ikePolicies.subscribe(policies => this.ikePolicies = policies);
    this.ipsecvpnService.ikePolicy.subscribe(policy => this.ikePolicy = policy);
    this.ipsecvpnService.vpnServices.subscribe(services => this.vpnServices = services);
    this.ipsecvpnService.vpnService.subscribe(service => this.vpnService = service);
    this.ipsecvpnService.ipsecConnections.subscribe(connections => this.ipsecConnections = connections);
    this.ipsecvpnService.ipsecConnection.subscribe(connection => this.ipsecConnection = connection);
  }

  ngOnInit() {
  }

}
