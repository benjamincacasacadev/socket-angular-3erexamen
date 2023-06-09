import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-chart-random',
  templateUrl: './chart-random.component.html',
  styleUrls: ['./chart-random.component.css','../home/home.component.css']
})
export class ChartRandomComponent implements OnInit {

  title = 'livechart';
  chart;
  constructor( private srv: SocketService){}

  ngOnInit(){

    this.srv.listen('dataupdate').subscribe((res:any) =>{
      console.log("hola",res);
      this.chart.data.datasets[0].data = res;
      this.chart.update();
    });

    this.chart = new Chart('canvas', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: ''
        },
      },
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
        datasets: [
          {
            type: 'bar',
            label: 'Cantidad de ventas',
            // data: [10, 3, 6, 11, 38, 5, 6, 17],
            backgroundColor: '#3F3FBF',
            fill: false
          }
        ]
      }
    });


  }

}
