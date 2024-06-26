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
  userName: string | undefined;
  greeting = '';
  constructor(private themeService: ThemeService) { }


  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
    this.userName = this.getUsername();
    this.setGreeting();
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
        { displayName: 'Order List', iconName: 'list_alt', route: '/main/orderList' },
        { displayName: 'Order Tracking', iconName: 'track_changes', route: '/main/orderDetails' }
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
  }
  getUsername(): string {
    return 'Mahesh';
  }
  setGreeting() {
    const time = new Date().getHours();
    if (time >= 5 && time < 12) {
      this.greeting = 'Good morning';
    } else if (time >= 12 && time < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good evening';
    }
  }
}
