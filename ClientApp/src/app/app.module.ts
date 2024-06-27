import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RetailerRegistrationComponent } from './components/Retailer/retailer-registration/retailer-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FarmerRegistrationComponent } from './components/farmer/farmer-registration/farmer-registration.component';
import { ProductListComponent } from './components/product-management/product-list/product-list.component';
import { AddProductComponent } from './components/product-management/add-product/add-product.component';
import { EditProductComponent } from './components/product-management/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/product-management/product-details/product-details.component';
import { InventoryManagementComponent } from './components/inventory-management/inventory-management/inventory-management.component';
import { OrderListComponent } from './components/order-management/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-management/order-details/order-details.component';
import { OrderTrackingComponent } from './components/order-management/order-tracking/order-tracking.component';
import { RatingsReviewsComponent } from './components/farmer/quality-assurance/ratings-reviews/ratings-reviews.component';
import { QualityAssuranceComponent } from './components/farmer/quality-assurance/quality-assurance.component';
import { PromotionsComponent } from './components/farmer/marketing-tools/promotions/promotions.component';
import { CustomerEngagementComponent } from './components/farmer/marketing-tools/promotions/customer-engagement/customer-engagement.component';
import { SalesAnalyticsComponent } from './components/farmer/analytics-reports/sales-analytics/sales-analytics.component';
import { MarketTrendsComponent } from './components/farmer/analytics-reports/market-trends/market-trends.component';
import { PerformanceReportsComponent } from './components/farmer/analytics-reports/performance-reports/performance-reports.component';
import { MainComponent } from './components/main/main.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { SettingsComponent } from './components/settings/settings.component';
import { MatMenuModule } from '@angular/material/menu';
import { AccountSettingsComponent } from './components/settings/account-settings.component';
import { FarmerProfileComponent } from './components/profile/farmer-profile/farmer-profile.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RetailerRegistrationComponent,
    FarmerRegistrationComponent,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ProductDetailsComponent,
    InventoryManagementComponent,
    OrderListComponent,
    OrderDetailsComponent,
    OrderTrackingComponent,
    RatingsReviewsComponent,
    QualityAssuranceComponent,
    PromotionsComponent,
    CustomerEngagementComponent,
    SalesAnalyticsComponent,
    MarketTrendsComponent,
    PerformanceReportsComponent,
    MainComponent,
    SettingsComponent,
    AccountSettingsComponent,
    FarmerProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
