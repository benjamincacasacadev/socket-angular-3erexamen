import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/socket.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css','../home/home.component.css']
})
export class ProductosComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  title = 'productos';
  chart;
  articuloSeleccionado = "1";
  cantidadSeleccionado = "1";
  socket: any;


  constructor( private srv: SocketService){
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
  }

  vote(articulo){
    // const articulo = this.articuloSeleccionado;
    let artValue : number = parseInt(articulo);

    const cantidad = this.cantidadSeleccionado;
    let cantValue : number = parseInt(cantidad);
    console.log("ARTICULO ",articulo);
    console.log("CANTIDAD ",cantidad);
    this.socket.emit('vote',artValue, cantValue);
  }

}
