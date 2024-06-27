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
  imagePreview!: string | ArrayBuffer | null;
  constructor(private fb: FormBuilder) {
   
  }

      ngOnInit(): void {
        this.productForm = this.fb.group({
          productName: ['', Validators.required],
          sku: ['', Validators.required],
          category: ['', Validators.required],
          description: ['', Validators.required],
          price: [0, Validators.required],
          quantityAvailable: [0, Validators.required],
          unitOfMeasure: [''],
          farmerName: ['', Validators.required],
          farmName: ['', Validators.required],
          location: ['', Validators.required],
          harvestDate: ['', Validators.required],
          expirationDate: [''],
          organicCertification: [false],
          packagingType: ['', Validators.required],
          shippingDetails: [''],
          nutritionalInformation: [''],
          tags: [''],
          image: [null]
        });
        this.imagePreview = null;
      }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file: File = event.target.files[0];
      if (file) {
        this.productForm.patchValue({ image: file });
        this.previewImage(file);
      }
    }
  }
  previewImage(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
  }
  clearImagePreview(): void {
    this.productForm.patchValue({ image: null });
    this.imagePreview = null;
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log('Product added:', this.productForm.value);
    }
  }

  cancel() {
    console.log('Cancelled');
  }
  onCancel() {
    this.productForm.reset();
  }
  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
  }

}
