import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  filteredProducts :any[]=[];
  searchForm!: FormGroup;
  products = [
    { id: 1, name: 'Tomatoes', category: 'Vegetables', price: 2.5, quantity: 100, image: 'assets/tomato.jpg' },
    { id: 2, name: 'Apples', category: 'Fruits', price: 3, quantity: 150, image: 'assets/apples.jpg' },
    { id: 3, name: 'Milk', category: 'Dairy', price: 1.5, quantity: 200, image: 'assets/milk.jpg' },
    { id: 4, name: 'Bread', category: 'Grains', price: 2, quantity: 80, image: 'assets/bread.jpg' },
    { id: 5, name: 'Bread', category: 'Grains', price: 2, quantity: 80, image: 'assets/bread.jpg' },
    { id: 6, name: 'Bread', category: 'Grains', price: 2, quantity: 80, image: 'assets/bread.jpg' },
    { id: 7, name: 'Bread', category: 'Grains', price: 2, quantity: 80, image: 'assets/bread.jpg' }
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
      category: [''],
      priceRange: [0]
    });
  }

  ngOnInit(): void {
    this.filteredProducts = this.products;
    this.searchForm.valueChanges.subscribe(() => {
      this.filterProducts();
    });
  }

  navigateToAddProduct(): void {
    // Logic to navigate to the Add Product screen
  }

  editProduct(product:any): void {
    // Logic to navigate to the Edit Product screen with the product details
  }

  deleteProduct(productId:any): void {
    // Logic to delete the product
    this.products = this.products.filter(p => p.id !== productId);
  }
  logOut() {

  }

  filterProducts() {
    const { searchQuery, category, priceRange } = this.searchForm.value;
    this.filteredProducts = this.products.filter(product => {
      return (
        (!searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (!category || product.category === category) &&
        product.price <= priceRange
      );
    });
  }

  onSearch() {
    this.filterProducts();
  }

  onReset() {
    this.searchForm.reset({ searchQuery: '', category: '', priceRange: 1000 });
  }
}
