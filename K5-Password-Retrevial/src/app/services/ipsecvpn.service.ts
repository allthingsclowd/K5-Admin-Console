import { Injectable } from '@angular/core';

@Injectable()
export class IpsecvpnService {

  constructor() { }

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
    
    return this.http.get('url')
    .map((response: Response) => response.json());
  }


}
