import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more fields as needed
    });
  }
  updateAccount() {
    if (this.accountForm.valid) {
      // Implement logic to update user account
      console.log('Updating account:', this.accountForm.value);
      // Example: Call service to update user data
    } else {
      // Handle form validation errors
      console.error('Invalid form data.');
    }
  }

}
