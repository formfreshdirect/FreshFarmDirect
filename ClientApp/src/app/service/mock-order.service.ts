import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Order {
  id: number;
  retailerName: string;
  date: Date;
  status: string;
  products: Product[];
}

export interface Product {
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class MockOrderService {

  constructor() { }
  private orders: Order[] = [
    {
      id: 1,
      retailerName: 'Retailer A',
      date: new Date('2023-01-01'),
      status: 'Processing',
      products: [
        { name: 'Product A', quantity: 2, price: 50 },
        { name: 'Product B', quantity: 1, price: 30 }
      ]
    },
    {
      id: 2,
      retailerName: 'Retailer B',
      date: new Date('2023-02-15'),
      status: 'Shipped',
      products: [
        { name: 'Product C', quantity: 1, price: 25 }
      ]
    },
    {
      id: 3,
      retailerName: 'Retailer C',
      date: new Date('2023-03-10'),
      status: 'Delivered',
      products: [
        { name: 'Product D', quantity: 3, price: 40 },
        { name: 'Product E', quantity: 1, price: 60 }
      ]
    },
    {
      id: 4,
      retailerName: 'Retailer C',
      date: new Date('2023-03-10'),
      status: 'Pending',
      products: [
        { name: 'Product D', quantity: 3, price: 40 },
        { name: 'Product E', quantity: 1, price: 60 }
      ]
    }

  ];
  getOrders(): Observable<Order[]> {
    // Simulating fetching orders from a backend
    return of(this.orders).pipe(delay(1000)); // Simulate async delay
  }

  getOrderById(id: number): Observable<Order | undefined> {
    // Simulating fetching order details by ID
    const order = this.orders.find(o => o.id === id);
    return of(order).pipe(delay(500)); // Simulate async delay
  }
  updateOrderStatus(orderId: number, newStatus: string): Observable<boolean> {
    const orderIndex = this.orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
      this.orders[orderIndex].status = newStatus;
      return of(true); // Simulated success response
    } else {
      return of(false); // Simulated failure response
    }
  }
}
