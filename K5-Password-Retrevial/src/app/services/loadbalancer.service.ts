import { Injectable } from '@angular/core';
import { Http, RequestMethod, Request, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { User, project, projects, ProjectToken } from '../model/user';
import { IdentityService } from '../services/identity.service';
import { UtilityService } from '../services/utility.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadbalancerService {

  private userLBaaSList = new BehaviorSubject<any>(null);
  userLBaaS = this.userLBaaSList.asObservable();
  private userLBaaSDetails = new BehaviorSubject<any>(null);
  LBaaSDetails = this.userLBaaSDetails.asObservable();

  constructor(private http: Http,
    private utilitiesService: UtilityService) { }

  changeLBaaSDetails(LBaaSDetails: any) {
    this.userLBaaSDetails.next(LBaaSDetails);
  }

  changeLBaaSList(userLBaaS: any) {
    this.userLBaaSList.next(userLBaaS);
  }

  // set LBaaSName to 'all' to retrieve all LBaaS associated with scoped token
  // otherwise provide the name of an existing LBaaS to get it's details
  getLBaaSDetailOrList(k5scopedtoken: any, LBaaSName: string) {
      // console.log('lbaas token');
      // console.log(k5scopedtoken);

      let lbaasURL = this.utilitiesService.getEndpoint(k5scopedtoken, 'loadbalancing');

      if (LBaaSName === 'all') {
        lbaasURL = lbaasURL.concat('/?Version=2014-11-01&Action=DescribeLoadBalancers');
      } else {
        lbaasURL = lbaasURL.concat('/?LoadBalancerNames.member.1=', LBaaSName, '&Version=2014-11-01&Action=DescribeLoadBalancers');
      }

      // With CORS Proxy Service in use here
      const proxiedURL = this.utilitiesService.sendViaCORSProxy(lbaasURL);

      const getheaders: Headers = new Headers();
      getheaders.append('Content-Type', 'application/json');
      getheaders.append('Accept', 'application/json');
      getheaders.append('X-Auth-Token', k5scopedtoken.headers.get('x-subject-token'));

      const headeropts: RequestOptions = new RequestOptions();
      headeropts.headers = getheaders;

      return this.http.get(proxiedURL, headeropts)
          .map((res: any) => {
              console.log('New LBaaS List ->');
              console.log(res.json());
              this.changeLBaaSList(res.json().loadbalancer.name);

              // return res;
              })
          .subscribe(
                  data => console.log(data),
                  err => console.log(err),
                  () => console.log('Finished LBaaS List or Details Observable'));

  }

}
