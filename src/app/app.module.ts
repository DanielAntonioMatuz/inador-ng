import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';

import { AppRoutingModule } from './app-routing.module';
import { CreateRfidComponent } from './create-rfid/create-rfid.component';
import { ListRfidComponent } from './list-rfid/list-rfid.component';
import {ChartsModule} from 'ng2-charts';
import { TemperaturasComponent } from './temperaturas/temperaturas.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    SearchCustomersComponent,
    CreateRfidComponent,
    ListRfidComponent,
    TemperaturasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
