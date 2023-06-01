import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ChartRandomComponent } from './components/chart-random/chart-random.component';
import { ChartGeneralComponent } from './components/chart-general/chart-general.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ChatAppComponent } from './components/chat/chat-app/chat-app.component';
import { ChatNamePopupComponent } from './components/chat/chat-name-popup/chat-name-popup.component';
import { ChatInputComponent } from './components/chat/chat-input/chat-input.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { MessageComponent } from './components/chat/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChartRandomComponent,
    ChartGeneralComponent,
    ProductosComponent,
    ContactoComponent,
    ChatAppComponent,
    ChatNamePopupComponent,
    ChatInputComponent,
    ChatWindowComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // providers: [NewsapiservicesService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
