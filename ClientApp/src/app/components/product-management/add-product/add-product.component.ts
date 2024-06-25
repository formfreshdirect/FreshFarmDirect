import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;
  categories = ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Meat', 'Others'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0.01)]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Handle form submission logic here
      console.log(this.productForm.value);
    }
  }

  onCancel(): void {
    // Handle form cancellation logic here
    this.productForm.reset();
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    // Handle file selection logic here
    console.log(files);
  }

}
