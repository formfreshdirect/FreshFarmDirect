import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}
export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  productName: string;
  quantity: number;
  price: number;
  status: string;
  retailerName: string;
  date: Date;
  products: Product[]; 
}

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  filteredOrders: Order[] = [];
  selectedOrder: Order | null = null;
  orderStatuses: string[] = ['Approved','Pending', 'Shipped', 'Delivered', 'Cancelled'];
  selectedStatus: any;
  displayedColumns: string[] = ['orderId', 'customerName', 'productName', 'quantity', 'price', 'status', 'actions'];

  // Initialize orders array with mock data
  orders: Order[] = [
    {
      id: 1,
      orderNumber: 'ORD001',
      customerName: 'John Doe',
      productName: 'Organic Apples',
      quantity: 10,
      price: 50.00,
      status: 'Pending',
      retailerName: 'xyz',
      date: new Date('2024-06-26'),
      products: [
        { id: 1, name: 'Apple', quantity: 10, price: 5.00 },
        { id: 2, name: 'Orange', quantity: 5, price: 3.00 }
      ]
    },
    {
      id: 2,
      orderNumber: 'ORD002',
      customerName: 'Jane Smith',
      productName: 'Fresh Tomatoes',
      quantity: 15,
      price: 30.00,
      status: 'Approved',
      retailerName: 'xyz',
      date: new Date('2024-06-26'),
      products: [
        { id: 1, name: 'Apple', quantity: 10, price: 5.00 },
        { id: 2, name: 'Orange', quantity: 5, price: 3.00 }
      ]
    },
    {
      id: 3,
      orderNumber: 'ORD002',
      customerName: 'Jane Smith',
      productName: 'Fresh Tomatoes',
      quantity: 15,
      price: 30.00,
      status: 'Approved',
      retailerName: 'xyz',
      date: new Date('2024-06-26'),
      products: [
        { id: 1, name: 'Apple', quantity: 10, price: 5.00 },
        { id: 2, name: 'Orange', quantity: 5, price: 3.00 }
      ]
    },
    {
      id: 4,
      orderNumber: 'ORD002',
      customerName: 'Jane Smith',
      productName: 'Fresh Tomatoes',
      quantity: 15,
      price: 30.00,
      status: 'Approved',
      retailerName: 'xyz',
      date: new Date('2024-06-26'),
      products: [
        { id: 1, name: 'Apple', quantity: 10, price: 5.00 },
        { id: 2, name: 'Orange', quantity: 5, price: 3.00 }
      ]
    },
    // Add more sample orders as needed
  ];

  constructor() { }

  ngOnInit(): void {
    this.filteredOrders = this.orders; // Initialize filtered orders with all orders
  }

  applyStatusFilter(event: any): void {
    this.selectedStatus = event.value;
    // Apply your filter logic based on selectedStatus
    // Example: Filter orders based on selectedStatus
    if (this.selectedStatus) {
      this.filteredOrders = this.orders.filter(order => order.status === this.selectedStatus);
    } else {
      this.filteredOrders = this.orders;
    }
  }

  viewOrderDetails(order: Order): void {
    this.selectedOrder = order;
    //this.dialog.open(OrderDetailsDialog, {
    //  data: { order: this.selectedOrder }
    //});
  }

  cancelOrder(orderId: number): void {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'Cancelled';
     // this.applyStatusFilter(order); // Reapply filters after modifying order status
    }
  }
}
