import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-retailer-registration',
  templateUrl: './retailer-registration.component.html',
  styleUrls: ['./retailer-registration.component.css']
})
export class RetailerRegistrationComponent implements OnInit {
  retailerForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.retailerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      deliveryAddress: ['', Validators.required],
      storeName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.retailerForm.valid) {
      console.log(this.retailerForm.value);
      // Implement the logic to handle the form submission
    }
  }
}
