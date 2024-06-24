import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RetailerRegistrationComponent } from './components/Retailer/retailer-registration/retailer-registration.component';
import { FarmerRegistrationComponent } from './components/farmer/farmer-registration/farmer-registration.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'retailer', component: RetailerRegistrationComponent},
  { path: 'farmer', component: FarmerRegistrationComponent},
  { path: 'main', component: MainComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
