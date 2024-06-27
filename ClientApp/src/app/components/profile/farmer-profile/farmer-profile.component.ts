import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmer-profile',
  templateUrl: './farmer-profile.component.html',
  styleUrls: ['./farmer-profile.component.css']
})
export class FarmerProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  updateProfile() {
    if (this.profileForm.valid) {
      console.log('Updating profile:', this.profileForm.value);
    } else {
      console.error('Invalid form data.');
    }
  }

}
