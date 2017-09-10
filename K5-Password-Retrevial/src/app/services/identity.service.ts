import { User, project, ProjectToken } from './../model/user';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UtilityService } from './utility.service';

@Injectable()
export class IdentityService {
    user = new User();

    // k5projects: projects;
    private userProjectList = new BehaviorSubject<project[]>(null);
    userProjects = this.userProjectList.asObservable();
    private userRegionalToken = new BehaviorSubject<Response>(null);
    userRToken = this.userRegionalToken.asObservable();
    private userGlobalToken = new BehaviorSubject<Response>(null);
    userGToken = this.userGlobalToken.asObservable();
    // k5response: Response;
    // k5Globalresponse: Response;
    // loggedIn :boolean = false;
    private userLoggedIn = new BehaviorSubject<boolean>(false);
    loggedIn = this.userLoggedIn.asObservable();
    // currentProject: project;
    private selectedProject = new BehaviorSubject<project>(null);
    currentProject = this.selectedProject.asObservable();
    private userProjectToken = new BehaviorSubject<Response>(null);
    userPToken = this.userProjectToken.asObservable();
    // projects :projects;
    // k5currentScopedToken: Response;

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

    changeProject(currentProject: project) {
        this.selectedProject.next(currentProject);
    }

    changeProjectList(userProjects: project[]) {
        this.userProjectList.next(userProjects);
    }

    changeLoginStatus(loggedInStatus: boolean) {
        this.userLoggedIn.next(loggedInStatus);
    }

    changeRegionalToken(userRToken: Response) {
        this.userRegionalToken.next(userRToken);
    }

    changeGlobalToken(userGToken: Response) {
        this.userGlobalToken.next(userGToken);
    }

    changeProjectToken(userPToken: Response) {
        this.userProjectToken.next(userPToken);
    }

    getKeystoneObjectList(objectType: string) {
        // const k5token = this.k5response;
        console.log('Keystone Token Details ' + JSON.stringify(this.userRegionalToken.getValue()));
        console.log('Keystone ObjectType Details ' + objectType);
        const identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        const endpointDetail = identityURL.concat('/', objectType, '?domain_id=', this.user.contractId);
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(endpointDetail);

        // retrieve the K5/OpenStack authentication token from the response header
        const token = this.userRegionalToken.getValue().headers.get('x-subject-token');
        console.log('Getting KeystoneObject List');

        const postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);

        const postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.get(authURL, postopts)
            .map((res: any) => {
                // console.log('ObjectList => ' + JSON.stringify(res));
                return res;
             });

    }

    getProjectScopedToken(projectId: string) {

        // const k5token = this.k5response;
        const identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');
        const endpointDetail = identityURL.concat('/auth/tokens');
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(endpointDetail);

        const body = { 'auth':
                        { 'identity':
                            { 'methods':
                                [ 'token'],
                                'token':
                                    { 'id': this.userRegionalToken.getValue().headers.get('x-subject-token') }
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
                // const projectToken = new ProjectToken();

                // retrieve the K5/OpenStack authentication token from the response header
                // projectToken.scopedToken = res.headers.get('x-subject-token');
                // projectToken.projectId = projectId;
                this.changeProjectToken(res);

                return res;
            });

    }

    getProjectList() {

        // const k5token = this.k5response;
        // console.log(this.currentProject);
        const identityURL = this.utilityService.getEndpoint(this.userRegionalToken.getValue(), 'identityv3');

        const endpointDetail = identityURL.concat('/users/', this.userRegionalToken.getValue().json().token.user.id, '/projects');
        console.log(endpointDetail);
        // With CORS Proxy Service in use here
        const authURL = this.utilityService.sendViaCORSProxy(endpointDetail);
        console.log(authURL);

        // retrieve the K5/OpenStack authentication token from the response header
        const token = this.userRegionalToken.getValue().headers.get('x-subject-token');
        console.log('Getting Project List');

        const postheaders: Headers = new Headers();
        postheaders.append('Content-Type', 'application/json');
        postheaders.append('Accept', 'application/json');
        postheaders.append('X-Auth-Token', token);

        const postopts: RequestOptions = new RequestOptions();
        postopts.headers = postheaders;

        return this.http.get(authURL, postopts)
            .map((res: Response) => {



                    this.changeProjectList(res.json().projects);
                    this.changeProject(res.json().projects[0]);
                    console.log('111111111. Get Project List with projects and actual project as follows: ');
                    console.log('All Unparsed Projects');
                    // console.log(res);
                    // console.log(res.json());
                    // console.log(res.json().projects);
                    console.log(this.userProjectList.getValue());
                    console.log(this.selectedProject.getValue().name);
                    // return res.json().projects as projects;
                    // return projects;
            });



    }


    // Get unscoped K5 global token
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

                this.changeGlobalToken(gres);
                // this.k5Globalresponse = gres;
                // retrieve the K5/OpenStack authentication token from the response header
                // this.user.globalToken = gres.headers.get('X-Access-Token');
                console.log('Central Portal Token => \n' + JSON.stringify(this.userGToken) );

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

                this.changeRegionalToken(res);
                // retrieve the K5/OpenStack authentication token from the response header
                // this.user.token = res.headers.get('x-subject-token');

                // // retrieve the remainder of the values from the response body
                // this.user.name = res.json().token.user.name;
                // this.user.contractId = res.json().token.project.domain.id;
                // this.user.id = res.json().token.user.id;
                // this.user.catalog = res.json().token.catalog;
                // this.user.roles = res.json().token.roles;
                // this.user.expires = res.json().token.expires_at;
                this.changeLoginStatus(true);
                // this.k5currentScopedToken = res;
                // this.k5currentScopedToken = res;

                // retrieve Global token
                this.getCentralPortalToken(username, password, contract).subscribe();

                // this.getProjectList().subscribe(value => {
                //                             console.log('Bananas ');
                //                             console.log(value);
                //                             this.changeProjectList(value);
                //                             console.log('New Project Name BElow');
                //                             console.log(this.selectedProject.getValue());

                //                             //this.projects = value;
                //                             // sessionStorage.setItem('gjl-currentUserProjects', JSON.stringify(this.k5projects));
                //                              });
                this.getProjectList().subscribe();


                // if (this.user.token != null) {
                //     // store user details local storage to keep user logged in between page refreshes
                //     sessionStorage.setItem('gjl-currentUsertoken', JSON.stringify(this.user));
                //     sessionStorage.setItem('gjl-currenttoken', JSON.stringify(res));
                // }
            });



    }


    logout() {
        // remove user from local storage to log user out
        // sessionStorage.removeItem('gjl-currentUsertoken');
        // sessionStorage.removeItem('gjl-currentUserProjects');
        this.changeLoginStatus(false);
    }
}



