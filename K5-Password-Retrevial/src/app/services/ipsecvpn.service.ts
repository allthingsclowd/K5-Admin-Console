import { Injectable } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class IpsecvpnService {

  constructor(  private http: Http,
                private utilitiesService: UtilityService) { }

  list_ipsec_policies(k5token) {

    let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
    vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies');
    // With CORS Proxy Service in use here
    const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);

    const getheaders: Headers = new Headers();
    getheaders.append('Content-Type', 'application/json');
    getheaders.append('Accept', 'application/json');
    getheaders.append('X-Auth-Token', k5token.headers.get('x-subject-token'));

    const headeropts: RequestOptions = new RequestOptions();
    headeropts.headers = getheaders;

    return this.http.get(proxiedURL, headeropts)
      .map((response: Response) => {
            response.json();
            console.log('IPSEC VPN');
            console.log(response.json()); })
      .subscribe(
              data => console.log(data),
              err => console.log(err),
              () => console.log('IPSEC VPN List Success'));
  }

  show_ipsec_policy(k5token, policy) {
    
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policy.id);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
    
        const getheaders: Headers = new Headers();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5token.headers.get('x-subject-token'));
    
        const headeropts: RequestOptions = new RequestOptions();
        headeropts.headers = getheaders;
    
        return this.http.get(proxiedURL, headeropts)
          .map((response: Response) => {
                response.json();
                console.log('Show IPSEC VPN Details');
                console.log(response.json()); })
          .subscribe(
                  data => console.log(data),
                  err => console.log(err),
                  () => console.log('IPSEC VPN Show Success'));
      }

      create_ipsec_policy(k5token, name, protocol, auth_alg, enc_alg, encapmode, pfsgroup,  ipseclt, az, region){
        let vpnURL = this.utilitiesService.getEndpoint(k5token, 'networking');
        vpnURL = vpnURL.concat('/v2.0/vpn/ipsecpolicies/', policy.id);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(vpnURL);
    
        const getheaders: Headers = new Headers();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5token.headers.get('x-subject-token'));
    
        const headeropts: RequestOptions = new RequestOptions();
        headeropts.headers = getheaders;
    
        return this.http.get(proxiedURL, headeropts)
          .map((response: Response) => {
                response.json();
                console.log('Show IPSEC VPN Details');
                console.log(response.json()); })
          .subscribe(
                  data => console.log(data),
                  err => console.log(err),
                  () => console.log('IPSEC VPN Show Success'));
      }
      }

}
