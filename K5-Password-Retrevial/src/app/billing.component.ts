import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billingForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.billingForm = new FormGroup({
      'billingData': new FormGroup({
        'startDate': new FormControl(null, [Validators.required]),
        'endDate': new FormControl(null, [Validators.required]),
        'contract': new FormControl(null, [Validators.required]),
        'region': new FormControl(null, [Validators.required])
      })
    });
  }

}
