import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class IpsecvpnService {

  private listIpsecPolicies = new BehaviorSubject<any>(null);
  ipsecPolicies = this.listIpsecPolicies.asObservable();

  private currentIpsecPolicy = new BehaviorSubject<any>(null);
  ipsecPolicy = this.currentIpsecPolicy.asObservable();

  private listIkePolicies = new BehaviorSubject<any>(null);
  ikePolicies = this.listIkePolicies.asObservable();

  private currentIkePolicy = new BehaviorSubject<any>(null);
  ikePolicy = this.currentIkePolicy.asObservable();

  private listVpnServices = new BehaviorSubject<any>(null);
  vpnServices = this.listVpnServices.asObservable();

  private currentVpnService = new BehaviorSubject<any>(null);
  vpnService = this.currentVpnService.asObservable();

  private listIpsecConnections = new BehaviorSubject<any>(null);
  ipsecConnections = this.listIpsecConnections.asObservable();

  private currentIpsecConnection = new BehaviorSubject<any>(null);
  ipsecConnection = this.currentIpsecConnection.asObservable();

  constructor(  private http: Http,
                private utilitiesService: UtilityService) { }

  changeIpsecPolicies(policies: any) {
                  this.listIpsecPolicies.next(policies);
  }

  changeIpsecPolicy(policy: any) {
                this.currentIpsecPolicy.next(policy);
  }

  changeIkePolicies(policies: any) {
    this.listIkePolicies.next(policies);
  }

  changeIkePolicy(policy: any) {
    this.currentIkePolicy.next(policy);
  }

  changeVpnServices(services: any) {
    this.listVpnServices.next(services);
  }

  changeVpnService(service: any) {
    this.currentVpnService.next(service);
  }

  changeIpsecConnections(connections: any) {
    this.listIpsecConnections.next(connections);
  }

  changeIpsecConnection(connection: any) {
    this.currentIpsecConnection.next(connection);
  }

  setRequestHeaders(k5token: any) {

    const requestHeaders: Headers = new Headers();
    requestHeaders.append('Content-Type', 'application/json');
    requestHeaders.append('Accept', 'application/json');
    requestHeaders.append('X-Auth-Token', k5token.headers.get('x-subject-token'));

    const headeropts: RequestOptions = new RequestOptions();
    headeropts.headers = requestHeaders;

    return headeropts;

  }

  ipsecPolicieslist(k5token) {

    let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
    vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies');
    // With CORS Proxy Service in use here
    const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

    const headeropts = this.setRequestHeaders(k5token);

    return this.http.get(proxiedURL, headeropts)
      .map((response: Response) => {
            response.json();
            console.log('List IPSEC VPNs');
            console.log(response.json());
            this.changeIpsecPolicies(response.json());
            return response.json(); })
      .subscribe(
              data => console.log(data),
              err => console.log(err),
              () => console.log('IPSEC VPN List Success'));
  }

  ipsecPolicyShow(k5token, policyId) {
    
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policyId);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
    
        const headeropts = this.setRequestHeaders(k5token);
        
            return this.http.get(proxiedURL, headeropts)
              .map((response: Response) => {
                    response.json();
                    console.log('IPSEC Policy Show');
                    console.log(response.json()); 
                    return response.json(); })
              .subscribe(
                      data => console.log(data),
                      err => console.log(err),
                      () => console.log('IPSEC Policy Show Success'));
    }

    ipsecPolicyCreate(k5token, name, protocol, auth_alg, enc_alg, encapmode, pfsgroup,  ipseclt, az) {

      let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
      vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies');
      // With CORS Proxy Service in use here
      const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

      const headeropts = this.setRequestHeaders(k5token);

      const body = {
        'ipsecpolicy': {
            'name': name,
            'transform_protocol': protocol,
            'auth_algorithm': auth_alg,
            'encapsulation_mode': encapmode,
            'encryption_algorithm': enc_alg,
            'pfs': pfsgroup,
            'lifetime': {
                'units': 'seconds',
                'value': ipseclt},
            'availability_zone': az
        }
    };

    const bodyString = JSON.stringify(body); // Stringify payload

      return this.http.post(proxiedURL, bodyString, headeropts)
        .map((response: Response) => {
              console.log('IPSEC Policy Creation');
              console.log(response.json());
              this.changeIpsecPolicy(response.json());
              return response.json(); })
        .subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('IPSEC Policy Create Success'));
    }

    ipsecPolicyUpdate(k5token, policyId, name, enc_alg, pfsgroup, ipseclt, description) {
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policyId);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

        const headeropts = this.setRequestHeaders(k5token);

        const body = {
          'ipsecpolicy': {
              'name': name,
              'encryption_algorithm': enc_alg,
              'pfs': pfsgroup,
              'lifetime': {
                  'units': 'seconds',
                  'value': ipseclt},
              'description': description
          }
      };

      const bodyString = JSON.stringify(body); // Stringify payload

        return this.http.put(proxiedURL, bodyString, headeropts)
          .map((response: Response) => {
                response.json();
                console.log('IPSEC Policy Update');
                console.log(response.json());
                this.changeIpsecPolicy(response.json());
                return response.json(); })
          .subscribe(
                  data => console.log(data),
                  err => console.log(err),
                  () => console.log('IPSEC Policy Update Success'));
      }

      ipsecPolicyDelete(k5token, policyId) {
        
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policyId);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
    
        const headeropts = this.setRequestHeaders(k5token);
        
            return this.http.delete(proxiedURL, headeropts)
              .map((response: Response) => {
                    response.json();
                    console.log('IPSEC Delete Policy');
                    console.log(response.json());
                    return response.json(); })
              .subscribe(
                      data => console.log(data),
                      err => console.log(err),
                      () => console.log('IPSEC Delete Policy Success'));

      }

      ipsecSiteConnectionsList(k5token) {

        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections');
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

        const headeropts = this.setRequestHeaders(k5token);

        return this.http.get(proxiedURL, headeropts)
          .map((response: Response) => {
                response.json();
                console.log('List IPSEC Site Connections');
                console.log(response.json());
                this.changeIpsecPolicies(response.json());
                return response.json(); })
          .subscribe(
                  data => console.log(data),
                  err => console.log(err),
                  () => console.log('IPSEC Site Connections List Success'));

      }

      ipsecSiteConnectionShow(k5token, connectionId) {
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections/', connectionId);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

        const headeropts = this.setRequestHeaders(k5token);

        return this.http.get(proxiedURL, headeropts)
        .map((response: Response) => {
              response.json();
              console.log('IPSEC Site Connection Show');
              console.log(response.json()); 
              return response.json(); })
        .subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('IPSEC Site Connection Show Success'));

      }

      ipsecSiteConnectionCreate(k5token, name, vpnsid, ikepid, secpid, peeradr, peercidr, psk, az) {

        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections');
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

        const headeropts = this.setRequestHeaders(k5token);

        const body = {
          'ipsec_site_connection': {
              'psk': psk,
              'initiator': 'bi-directional',
              'ipsecpolicy_id': secpid,
              'admin_state_up': true,
              'peer_cidrs': peercidr,
              'ikepolicy_id': ikepid,
              'dpd': {
                  'action': 'hold',
                  'interval': 60,
                  'timeout': 240
              },
              'vpnservice_id': vpnsid,
              'peer_address': peeradr,
              'peer_id': peeradr,
              'name': name,
              'availability_zone': az
          }
      };

        const bodyString = JSON.stringify(body); // Stringify payload

        return this.http.post(proxiedURL, bodyString, headeropts)
          .map((response: Response) => {
                console.log('IPSEC Policy Creation');
                console.log(response.json());
                this.changeIpsecPolicy(response.json());
                return response.json(); })
          .subscribe(
                  data => console.log(data),
                  err => console.log(err),
                  () => console.log('IPSEC Policy Create Success'));
      }

      ipsecSiteConnectionUpdate(k5token, connectionId, peeradr, peercidr, psk, name, desc) {
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections/', connectionId);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

        const headeropts = this.setRequestHeaders(k5token);

        const body = {
          'ipsec_site_connection': {
              'psk': psk,
              'initiator': 'bi-directional',
              'admin_state_up': true,
              'peer_cidrs': peercidr,
              'dpd': {
                  'action': 'hold',
                  'interval': 60,
                  'timeout': 240
              },
              'peer_address': peeradr,
              'peer_id': peeradr,
              'name': name,
              'description': desc
          }
      };

        const bodyString = JSON.stringify(body); // Stringify payload

        return this.http.post(proxiedURL, bodyString, headeropts)
          .map((response: Response) => {
                console.log('IPSEC Policy Creation');
                console.log(response.json());
                this.changeIpsecPolicy(response.json());
                return response.json(); })
          .subscribe(
                  data => console.log(data),
                  err => console.log(err),
                  () => console.log('IPSEC Policy Create Success'));
      }

      ipsecSiteConnectionDelete(k5token, connectionid, region) {
        
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsec-site-connections/', connectionId);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

        const headeropts = this.setRequestHeaders(k5token);

        return this.http.delete(proxiedURL, headeropts)
        .map((response: Response) => {
              response.json();
              console.log('IPSEC Site Connection Delete');
              console.log(response.json()); 
              return response.json(); })
        .subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('IPSEC Site Connection Delete Success'));

      }

      vpnServicesList(k5token, region) {

      }

      vpnServiceShow(k5token, serviceid, region) {

      }

      vpnServiceCreate(k5token, name, routerid, subnetid, az, region) {

      }

      vpnServiceUpdate(k5token, name, routerid, subnetid, az, region) {

      }

      vpnServiceDelete(k5token, serviceid, region) {

      }

      ikePoliciesList(k5token, region) { 

      }

      ikePolicyShow(k5token, policyid, region) {

      }

      ikePolicyDelete(k5token, policyid, region) {

      }

      ikePolicyCreate(k5token, name, authalg, encryalg, ikelt, ikev, pfs, neg, az, region) {

      }

      ikePolicyUpdate(k5token, name, authalg, encryalg, ikelt, ikev, pfs, neg, az, region) {

      }
}


