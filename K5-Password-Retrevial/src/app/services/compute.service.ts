import { Injectable} from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User, project, projects, ProjectToken } from '../model/user';
import { IdentityService } from '../services/identity.service';
import { UtilityService } from '../services/utility.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ComputeService {
    private userServerList = new BehaviorSubject<any>(null);
    userServers = this.userServerList.asObservable();
    private userServerDetails = new BehaviorSubject<any>(null);
    serverDetails = this.userServerDetails.asObservable();
    // private userProjectToken = new BehaviorSubject<Response>(null);
    // userPToken = this.userProjectToken.asObservable();
    currentProject: project = null;
    currentProjectToken: Response = null;

    constructor(private http: Http,
                private utilitiesService: UtilityService) { }


    changeServerList(userServers: any) {
        this.userServerList.next(userServers);
    }

    changeServerDetails(serverDetails: any) {
        this.userServerDetails.next(serverDetails);
    }

    getServerList(k5scopedtoken: any) {
        console.log('compute token');
        console.log(k5scopedtoken);

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
                console.log('New Server List ->');
                console.log(res.json().servers);
                this.changeServerList(res.json().servers);

                // return res;
                })
            .subscribe(
                    data => console.log(data),
                    err => console.log(err),
                    () => console.log('yay'));

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
                console.log(res.json().server);
                this.changeServerDetails(res.json().server);
                return res;
                })
            .subscribe(
                        data => console.log(data),
                        err => console.log(err),
                        () => console.log('yay'));

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
                console.log(res.json().password);
                return res.json().password;
                });

    }
}


