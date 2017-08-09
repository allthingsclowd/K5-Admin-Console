import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.passwordForm = new FormGroup({
    //   'loginData': new FormGroup({
    //     'user': new FormControl(null, [Validators.required]),
    //     'password': new FormControl(null, [Validators.required]),
    //     'contract': new FormControl(null, [Validators.required]),
    //     'region': new FormControl(null, [Validators.required])
    //   }),
    //   'serverData': new FormGroup({
    //     'project': new FormControl(null, [Validators.required]),
    //     'server': new FormControl(null, [Validators.required]),
    //     'pemkey': new FormControl(null, [Validators.required])
    //   })
      
    // });
  }

  // projectChange(){
  //   this.identityService.getProjectScopedToken(this.passwordForm.get('serverData.project').value)
  //     .subscribe( data => {
  //       console.log(data);
  //       this.currentScopedToken = data;
  //       this.computeService.getServerList(data)
  //         .subscribe( serverList => {
  //           this.servers = serverList.json().servers;
  //           console.log(this.servers);
            
  //         });
  //     });
    
  // }
}
