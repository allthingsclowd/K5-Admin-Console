import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects = ['Project A', 'Project B'];
  servers = ['Server 1', 'Server 2', 'Server 3'];
  passwordForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.passwordForm = new FormGroup({
      'loginData': new FormGroup({
        'user': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required]),
        'contract': new FormControl(null, [Validators.required])
      }),
      'project': new FormControl(null, [Validators.required]),
      'server': new FormControl(null, [Validators.required]),
      'pemkey': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.passwordForm);
    //this.passwordForm.reset();
  } 
}
