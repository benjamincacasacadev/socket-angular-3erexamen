import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ChartRandomComponent } from './components/chart-random/chart-random.component';
import { ChartGeneralComponent } from './components/chart-general/chart-general.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChartRandomComponent,
    ChartGeneralComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // providers: [NewsapiservicesService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
