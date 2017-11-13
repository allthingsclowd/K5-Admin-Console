import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IdentityService } from './services/identity.service';
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
  currentProjectT: any;
  amendVpnServiceForm: FormGroup;
  addVpnServiceForm: FormGroup;
  amendIpsecPolicyForm: FormGroup;
  addIpsecPolicyForm: FormGroup;
  amendIkePolicyForm: FormGroup;
  addIkePolicyForm: FormGroup;
  amendConnectionForm: FormGroup;
  addConnectionForm: FormGroup;

  constructor(private ipsecvpnService: IpsecvpnService,
              private identityService: IdentityService) {
    this.ipsecvpnService.ipsecPolicies.subscribe(policies => this.ipsecPolicies = policies);
    this.ipsecvpnService.ipsecPolicy.subscribe(policy => this.ipsecPolicy = policy);
    this.ipsecvpnService.ikePolicies.subscribe(policies => this.ikePolicies = policies);
    this.ipsecvpnService.ikePolicy.subscribe(policy => this.ikePolicy = policy);
    this.ipsecvpnService.vpnServices.subscribe(services => this.vpnServices = services);
    this.ipsecvpnService.vpnService.subscribe(service => this.vpnService = service);
    this.ipsecvpnService.ipsecConnections.subscribe(connections => this.ipsecConnections = connections);
    this.ipsecvpnService.ipsecConnection.subscribe(connection => this.ipsecConnection = connection);
    this.identityService.userPToken.subscribe(currentProjectToken => this.currentProjectT = currentProjectToken);
  }

  ngOnInit() {
    this.amendVpnServiceForm = new FormGroup({
      'name': new FormControl(null),
      'adminState': new FormControl(null),
      'description': new FormControl(null)
      });

    this.addVpnServiceForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'subnet_id': new FormControl(null, [Validators.required]),
      'router_id': new FormControl(null, [Validators.required]),
      'availability_zone': new FormControl(null, [Validators.required])
      });

    this.amendIpsecPolicyForm = new FormGroup({
      'name': new FormControl(null),
      'encryption_algorithm': new FormControl(null),
      'pfs': new FormControl(null),
      'value': new FormControl(null),
      'description': new FormControl(null)
      });

    this.addIpsecPolicyForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'transform_protocol': new FormControl(null, [Validators.required]),
      'auth_algorithm': new FormControl(null, [Validators.required]),
      'encapsulation_mode': new FormControl(null, [Validators.required]),
      'encryption_algorithm': new FormControl(null, [Validators.required]),
      'pfs': new FormControl(null, [Validators.required]),
      'value': new FormControl(null, [Validators.required]),
      'availability_zone': new FormControl(null, [Validators.required])
      });

    this.amendIkePolicyForm = new FormGroup({
      'name': new FormControl(null),
      'adminState': new FormControl(null),
      'description': new FormControl(null)
      });

    this.addIkePolicyForm = new FormGroup({
      'name': new FormControl(null),
      'adminState': new FormControl(null),
      'description': new FormControl(null)
      });

    this.amendConnectionForm = new FormGroup({
      'psk': new FormControl(null),
      'peer_cidrs': new FormControl(null),
      'peer_address': new FormControl(null),
      'peer_id': new FormControl(null),
      'name': new FormControl(null),
      'description': new FormControl(null)
      });
    
    this.addConnectionForm = new FormGroup({
      'psk': new FormControl(null, [Validators.required]),
      'ipsecpolicy_id': new FormControl(null, [Validators.required]),
      'peer_cidrs': new FormControl(null, [Validators.required]),
      'ikepolicy_id': new FormControl(null, [Validators.required]),
      'vpnservice_id': new FormControl(null, [Validators.required]),
      'peer_address': new FormControl(null, [Validators.required]),
      'peer_id': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'availability_zone': new FormControl(null, [Validators.required])
      });

      
  }

  vpnChange(service) {
    console.log(service);
    this.ipsecvpnService.vpnServiceShow(this.currentProjectT, service.id);
    this.ipsecvpnService.changeVpnService(service);
  }

  ipsecPolicyChange(policy) {
    console.log(policy);
    this.ipsecvpnService.ipsecPolicyShow(this.currentProjectT, policy.id);
    this.ipsecvpnService.changeIpsecPolicy(policy);
  }

  ikePolicyChange(policy) {
    console.log(policy);
    this.ipsecvpnService.ikePolicyShow(this.currentProjectT, policy.id);
    this.ipsecvpnService.changeIkePolicy(policy);
  }

  connectionChange(connection) {
    console.log(connection);
    this.ipsecvpnService.ipsecSiteConnectionShow(this.currentProjectT, connection.id);
    this.ipsecvpnService.changeIpsecConnection(connection);
  }
}
