import { Injectable } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User, projects, ProjectToken } from '../model/user';
import { IdentityService } from '../services/identity.service';
import { UtilityService } from '../services/utility.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ComputeService {
   // user = new User();
    //k5projects: projects;
    //k5response: any;

    constructor(private http: Http,
                private authService: IdentityService,
                private utilitiesService: UtilityService) { }


    getServerList(k5scopedtoken: any) {

        let computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/detail');
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);

        const getheaders: Headers = new Headers();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));

        const headeropts: RequestOptions = new RequestOptions();
        headeropts.headers = getheaders;

        return this.http.get(proxiedURL, headeropts)
            .map((res: any) => {
                console.log('nova server list');
                console.log(res.json().servers);
                return res;
                });

    }

    getServerDetails(k5scopedtoken: any, server: any) {

        let computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', server.id);
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);

        const getheaders: Headers = new Headers();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));

        const headeropts: RequestOptions = new RequestOptions();
        headeropts.headers = getheaders;

        return this.http.get(proxiedURL, headeropts)
            .map((res: any) => {
                console.log('nova server details');
                console.log(res.json());
                return res;
                });

    }

    getServerPassword(k5scopedtoken: any, serverid: any) {
        console.log('Server Password Function');
        console.log(k5scopedtoken);
        console.log(serverid);

        let computeURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'compute');
        computeURL = computeURL.concat('/servers/', serverid,'/os-server-password');
        // With CORS Proxy Service in use here
        const proxiedURL = this.utilitiesService.sendViaCORSProxy(computeURL);

        const getheaders: Headers = new Headers();
        getheaders.append('Content-Type', 'application/json');
        getheaders.append('Accept', 'application/json');
        getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));

        const headeropts: RequestOptions = new RequestOptions();
        headeropts.headers = getheaders;

        return this.http.get(proxiedURL, headeropts)
            .map((res: any) => {
                console.log('server password');
                console.log(res.json());
                return res;
                });

    }
}


