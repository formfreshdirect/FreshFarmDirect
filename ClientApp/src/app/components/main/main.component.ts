import { Component, OnInit, ViewChild } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatSidenav } from '@angular/material/sidenav';

interface MenuItem {
  name: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }
  menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      route: '/dashboard',
    },
    {
      name: 'Products',
      children: [
        { name: 'Product List', route: '/products/list' },
        { name: 'Add Product', route: '/products/add' },
        { name: 'Edit Product', route: '/products/edit' },
      ]
    },
    {
      name: 'Orders',
      children: [
        { name: 'Order List', route: '/orders/list' },
        { name: 'Order Tracking', route: '/orders/tracking' }
      ]
    },
    {
      name: 'Analytics',
      route: '/analytics',
    },
    {
      name: 'Settings',
      route: '/settings',
    }
  ];
}
