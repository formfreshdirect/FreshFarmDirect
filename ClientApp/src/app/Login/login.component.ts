import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle login logic
      console.log('Form Submitted', this.loginForm.value);
    }
  }
  navigateToFarmerRegistration() {
   this.router.navigate(['/farmer']);
  }

  navigateToRetailerRegistration() {
    this.router.navigate(['/retailer']);
  }
}
