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
  azones: any;
  amendVpnServiceForm: FormGroup;
  addVpnServiceForm: FormGroup;
  amendIpsecPolicyForm: FormGroup;
  addIpsecPolicyForm: FormGroup;
  amendIkePolicyForm: FormGroup;
  addIkePolicyForm: FormGroup;
  amendConnectionForm: FormGroup;
  addConnectionForm: FormGroup;

  // api parameters
  defaultName = 'Component Name';
  // defaultDescription = 'Component Description';
  // powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  auth_algorithm = ['sha1'];
  encryption_algorithm = ['aes-128', 'aes-256', 'aes-192'];
  pfs = ['group2', 'group5', 'group14'];
  phase1_negotiation_mode = ['main'];
  ike_version = ['v1'];
  transform_protocol = ['esp'];
  encapsulation_mode = ['tunnel'];
  initiator = ['bi-directional', 'response-only'];
  dpdAction = ['hold', 'restart'];





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
    this.identityService.availabilityZones.subscribe(azList => this.azones = azList);

  }

  ngOnInit() {

    this.amendVpnServiceForm = new FormGroup({
      'name': new FormControl(this.vpnService.name || null),
      'adminState': new FormControl(this.vpnService.admin_state || null),
      'description': new FormControl(this.vpnService.description || null)
      });

    this.addVpnServiceForm = new FormGroup({
      'name': new FormControl(this.defaultName, [Validators.required]),
      'subnet_id': new FormControl(null, [Validators.required]),
      'router_id': new FormControl(null, [Validators.required]),
      'availability_zone': new FormControl(this.azones[0], [Validators.required])
      });

    this.amendIpsecPolicyForm = new FormGroup({
      'name': new FormControl(this.ipsecPolicy.name || null),
      'encryption_algorithm': new FormControl(this.ipsecPolicy.encryption_algorithm || null),
      'pfs': new FormControl(this.ipsecPolicy.pfs || null),
      'ipsecLtvalue': new FormControl(this.ipsecPolicy.lifetime.value || null),
      'description': new FormControl(this.ipsecPolicy.description || null)
      });

    this.addIpsecPolicyForm = new FormGroup({
      'name': new FormControl(this.defaultName, [Validators.required]),
      'transform_protocol': new FormControl(null, [Validators.required]),
      'auth_algorithm': new FormControl(null, [Validators.required]),
      'encapsulation_mode': new FormControl(null, [Validators.required]),
      'encryption_algorithm': new FormControl(null, [Validators.required]),
      'pfs': new FormControl(null, [Validators.required]),
      'ipsecLtValue': new FormControl(null, [Validators.required]),
      'availability_zone': new FormControl(this.azones[0], [Validators.required])
      });

    this.amendIkePolicyForm = new FormGroup({
      'encryption_algorithm': new FormControl(this.ikePolicy.encryption_algorithm || null),
      'pfs': new FormControl(this.ikePolicy.pfs || null),
      'ikeLtValue': new FormControl(this.ikePolicy.lifetime.value || null),
      'name': new FormControl(this.ikePolicy.name || null),
      'description': new FormControl(this.ikePolicy.name || null)
      });

    this.addIkePolicyForm = new FormGroup({
      'phase1_negotiation_mode': new FormControl(null, [Validators.required]),
      'auth_algorithm': new FormControl(null, [Validators.required]),
      'encryption_algorithm': new FormControl(null, [Validators.required]),
      'pfs': new FormControl(null, [Validators.required]),
      'ikeLtValue': new FormControl(null, [Validators.required]),
      'ike_version': new FormControl(null, [Validators.required]),
      'name': new FormControl(this.defaultName, [Validators.required]),
      'availability_zone': new FormControl(this.azones[0], [Validators.required])
      });

    this.amendConnectionForm = new FormGroup({
      'psk': new FormControl(this.ipsecConnection.psk || null),
      'peer_cidrs': new FormControl(this.ipsecConnection.peer_cidrs || null),
      'peer_address': new FormControl(this.ipsecConnection.peer_address || null),
      'peer_id': new FormControl(this.ipsecConnection.peer_id || null),
      'name': new FormControl(this.ipsecConnection.name || null),
      'description': new FormControl(this.ipsecConnection.description || null)
      });

    this.addConnectionForm = new FormGroup({
      'psk': new FormControl(null, [Validators.required]),
      'ipsecpolicy_id': new FormControl(null, [Validators.required]),
      'peer_cidrs': new FormControl(null, [Validators.required]),
      'ikepolicy_id': new FormControl(null, [Validators.required]),
      'vpnservice_id': new FormControl(null, [Validators.required]),
      'peer_address': new FormControl(null, [Validators.required]),
      'peer_id': new FormControl(null, [Validators.required]),
      'name': new FormControl(this.defaultName, [Validators.required]),
      'availability_zone': new FormControl(this.azones[0], [Validators.required])
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
