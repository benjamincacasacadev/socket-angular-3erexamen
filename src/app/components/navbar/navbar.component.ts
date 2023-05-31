import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/socket.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  title = 'navbar';
  chart;
  socket: any;

  constructor( private srv: SocketService){
    this.socket = io('http://localhost:3000');
  }

  reset(){
    this.socket.emit('reset',0);
  }

}
