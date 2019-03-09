import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [CustomerDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerDashboardComponent,
  ],
})
export class CustomerDashboardModule { }
