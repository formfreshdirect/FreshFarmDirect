import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockOrderService } from '../../../service/mock-order.service';
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
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orders: Order[] = [];
  selectedOrderId: number | undefined;
  selectedOrder: Order | undefined;
  isLoading = true;

  constructor(private router: Router, private orderService: MockOrderService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }
  fetchOrders(): void {
    this.orderService.getOrders().subscribe(
      (orders: Order[]) => {
        this.orders = orders;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching orders:', error);
        this.isLoading = false;
      }
    );
  }
  viewOrderDetails(orderId: number): void {
    this.selectedOrderId = orderId;
    this.orderService.getOrderById(orderId).subscribe(
      (order: Order | undefined) => {
        this.selectedOrder = order;
      },
      (error) => {
        console.error('Error fetching order details:', error);
        // Handle error scenario
      }
    );
  }
  processOrder(orderId: number): void {
    this.orderService.updateOrderStatus(orderId, 'Processing').subscribe(
      (success: boolean) => {
        if (success) {
          console.log('Order processing initiated.');
          this.fetchOrders(); // Refresh order list
        } else {
          console.error('Failed to update order status.');
          // Handle failure scenario
        }
      },
      (error) => {
        console.error('Error processing order:', error);
        // Handle error scenario
      }
    );
  }
}
