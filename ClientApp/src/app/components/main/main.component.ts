import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ThemeService } from '../../service/theme.service';

interface MenuItem {
  displayName: string;
  iconName?: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded: boolean = true;
  panelOpenState = false;
  currentTheme: any;
  constructor(private themeService: ThemeService) { }


  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  filtermenu: MenuItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: '/dashboard'
    },
    {
      displayName: 'Products',
      iconName: 'shopping_cart',
      children: [
        { displayName: 'Product List', iconName: 'list', route: '/main/productList' },
        { displayName: 'Add Product', iconName: 'add', route: '/main/addProduct' },
        { displayName: 'Edit Product', iconName: 'edit', route: '/products/edit' },
      ]
    },
    {
      displayName: 'Orders',
      iconName: 'receipt',
      children: [
        { displayName: 'Order List', iconName: 'list_alt', route: '/orders/list' },
        { displayName: 'Order Tracking', iconName: 'track_changes', route: '/orders/tracking' }
      ]
    },
    {
      displayName: 'Analytics',
      iconName: 'analytics',
      route: '/analytics'
    },
    {
      displayName: 'Setting',
      iconName: 'settings',
      children: [
        { displayName: 'Order List', iconName: 'list_alt', route: '/main/settings' },
      ]
    }
  ];

  logOut() {
    // Implement logout logic
  }
}
