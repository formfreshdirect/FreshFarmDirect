import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html', // Adjust this path as per your actual file structure
  styleUrls: ['./add-product.component.css'] // Optional: Adjust the stylesheet path if needed
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;
  categories = ['Fruits', 'Vegetables', 'Dairy'];
  imagePreviews: string[] = [];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      sku: ['', Validators.required],
      supplier: ['', Validators.required]
    });
  }
    ngOnInit(): void {
     
    }

  onFileSelected(event: any) {
    if (event.target.files) {
      this.imagePreviews = [];
      for (let file of event.target.files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product added:', this.productForm.value);
    }
  }

  onCancel() {
    this.productForm.reset();
  }
  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
  }

}
