import { User, project, projects, ProjectToken } from './../model/user';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UtilityService } from './utility.service';

@Injectable()
export class IdentityService {
    user = new User();
    
    k5projects: projects;
    k5response: Response;
    k5Globalresponse: Response;
    loggedIn :boolean = false;
    currentProject: project;
    projects :projects;
    k5currentScopedToken :Response;

    constructor(private http: Http,
               private utilityService: UtilityService) {
        // this.currentProject.subscribe((project: project) => {
        //     console.log('Get new token' + project.id);
        //     this.getProjectScopedToken(project.id).subscribe((currentToken) => {
        //         this.k5currentScopedToken.emit(currentToken);
        //         console.log('got rescoped token');

        //     });
        // });
    }

    getKeystoneObjectList(objectType: string) {
        const k5token = this.k5response;
        console.log('Keystone Token Details ' + JSON.stringify(k5token));
        console.log('Keystone ObjectType Details ' + objectType);
        const identityURL = this.utilityService.getEndpoint(k5token, 'identityv3');
        const endpointDetail = identityURL.concat('/', objectType, '?domain_id=', this.user.contractId);
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(endpointDetail);

        // retrieve the K5/OpenStack authentication token from the response header
        const token = k5token.headers.get('x-subject-token');
        console.log('Getting KeystoneObject List');

        const postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);

        const postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.get(authURL, postopts)
            .map((res: any) => {
                //console.log('ObjectList => ' + JSON.stringify(res));
                return res;
             });

    }

    getProjectScopedToken(projectId: string) {

        const k5token = this.k5response;
        const identityURL = this.utilityService.getEndpoint(k5token, 'identityv3');
        const endpointDetail = identityURL.concat('/auth/tokens');
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(endpointDetail);

        const body = { 'auth':
                        { 'identity':
                            { 'methods':
                                [ 'token'],
                                'token':
                                    { 'id': k5token.headers.get('x-subject-token') }
                            }, 'scope':
                                    { 'project':
                                        { 'id': projectId  }
                                         }
                                     }
                                 };

        const bodyString = JSON.stringify(body); // Stringify payload

        const postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');

        const postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.post(authURL, bodyString, postopts)
            .map((res: any) => {
                const projectToken = new ProjectToken();

                // retrieve the K5/OpenStack authentication token from the response header
                projectToken.scopedToken = res.headers.get('x-subject-token');
                projectToken.projectId = projectId;
                //this.k5currentScopedToken.emit(res);

                if (projectToken.scopedToken != null) {
                    // store user details local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('gjl-currentProjecttoken', JSON.stringify(ProjectToken));
                    return res;
                }
            });

    }

    getProjectList() {

        const k5token = this.k5response;
        console.log(k5token)
        const identityURL = this.utilityService.getEndpoint(k5token, 'identityv3');

        const endpointDetail = identityURL.concat('/users/', k5token.json().token.user.id, '/projects');
        console.log(endpointDetail);
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        console.log(authURL);

        // retrieve the K5/OpenStack authentication token from the response header
        const token = k5token.headers.get('x-subject-token');
        console.log('Getting Project List');

        const postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);

        const postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.get(authURL, postopts)
            .map((res: Response) => res.json().projects as projects);


    }


    // Get unscoped K5 regional token
    getCentralPortalToken(username: string, password: string, contract: string) {
        // Without CORS Proxy Service in use
        const identityURL = 'https://auth-api.jp-east-1.paas.cloud.global.fujitsu.com/API/paas/auth/token';
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(identityURL);

        const body = {'auth':
                        {'identity':
                            {'password':
                                {'user':
                                   {'contract_number': contract,
                                    'name': username,
                                    'password': password
                                           }}}}};

        const bodyString = JSON.stringify(body); // Stringify payload

        const postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');

        const postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.post(authURL, bodyString, postopts)
            .map((gres: Response) => {

                this.k5Globalresponse = gres;
                // retrieve the K5/OpenStack authentication token from the response header
                this.user.globalToken = gres.headers.get('X-Access-Token');
                console.log('Central Portal Token => \n'+ JSON.stringify(gres) );
                                // test code
                //console.log(this.generateNewUserDetails('american.hero@grazzer.com', ''));
                //console.log(this.generateNewUserDetails('whoopsie@whoopsie.com','bananas'));
                //this.addNewUsertoCentralPortal().subscribe(adduser => console.log('New User Added -> '+ JSON.stringify(adduser)));
                //console.log('Deleting User -> ' + this.userService.removeUserfromCentralPortal('heroa'));

           });



    }



    // Get unscoped K5 regional token
    login(username: string, password: string, contract: string, region: string) {
        // Without CORS Proxy Service in use
        const identityURL = 'https://identity.'.concat(region, '.cloud.global.fujitsu.com/v3/auth/tokens');
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(identityURL);

        const body = {'auth':
                        {'identity':
                                {'methods': ['password'], 'password':
                                {'user':
                                    {'domain':
                                            {'name': contract},
                                             'name': username,
                                             'password': password
                                            }}}}};

        const bodyString = JSON.stringify(body); // Stringify payload

        const postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');

        const postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.post(authURL, bodyString, postopts)
            .map((res: Response) => {

                this.k5response = res;
                // retrieve the K5/OpenStack authentication token from the response header
                this.user.token = res.headers.get('x-subject-token');

                // retrieve the remainder of the values from the response body
                this.user.name = res.json().token.user.name;
                this.user.contractId = res.json().token.project.domain.id;
                this.user.id = res.json().token.user.id;
                this.user.catalog = res.json().token.catalog;
                this.user.roles = res.json().token.roles;
                this.user.expires = res.json().token.expires_at;
                this.loggedIn = true;
                //this.k5currentScopedToken = res;
                this.k5currentScopedToken = res;

                // display all token details in console for debug purposes
                //console.log('k5token -> ' + res.json().token.project.domain.id);
                //console.log('k5token -> ' + res.json().toString());
                //console.log('k5token -> ' + JSON.stringify(res));
                // console.log(this.getKeystoneObjectList('users').subscribe(objectList => {
                //     console.log(this.utilityService.getItemId(objectList, 'fannyadam', 'users'));
                // }));
                //console.log(this.getKeystoneObjectList('projects').subscribe());
                //console.log(this.getKeystoneObjectList('roles').subscribe());

                // retrieve Global token
                this.getCentralPortalToken(username, password, contract).subscribe();

                this.getProjectList().subscribe(value => {
                                            console.log('Bananas');
                                            this.k5projects = value;
                                            console.log(this.k5projects);
                                            this.projects = value;
                                            // sessionStorage.setItem('gjl-currentUserProjects', JSON.stringify(this.k5projects));
                                             });


                if (this.user.token != null) {
                    // store user details local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('gjl-currentUsertoken', JSON.stringify(this.user));
                    sessionStorage.setItem('gjl-currenttoken', JSON.stringify(res));
                }
            });



    }

    

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('gjl-currentUsertoken');
        sessionStorage.removeItem('gjl-currentUserProjects');
        this.loggedIn = false;
    }
}



