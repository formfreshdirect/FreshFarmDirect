import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RetailerRegistrationComponent } from './components/Retailer/retailer-registration/retailer-registration.component';
import { FarmerRegistrationComponent } from './components/farmer/farmer-registration/farmer-registration.component';
import { MainComponent } from './components/main/main.component';
import { AddProductComponent } from './components/product-management/add-product/add-product.component';
import { ProductListComponent } from './components/product-management/product-list/product-list.component';
import { OrderListComponent } from './components/order-management/order-list/order-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountSettingsComponent } from './components/settings/account-settings.component';
import { FarmerProfileComponent } from './components/profile/farmer-profile/farmer-profile.component';
import { OrderDetailsComponent } from './components/order-management/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'retailer', component: RetailerRegistrationComponent },
      { path: 'farmer', component: FarmerRegistrationComponent },
      { path: 'main', component: MainComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'productList', component: ProductListComponent },
      { path: 'orderList', component: OrderListComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'accountsettings', component: AccountSettingsComponent },
      { path: 'pProfile', component: FarmerProfileComponent },
      { path: 'orderDetails', component: OrderDetailsComponent },
      
      
    ]
  },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
