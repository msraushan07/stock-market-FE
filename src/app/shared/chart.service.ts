import { Injectable , OnInit} from '@angular/core';
import { StockService } from '../shared/stock.service'
import { Chart } from 'chart.js'
@Injectable()
export class ChartService {
  chart = []
  constructor( private stockService: StockService ) { }
  chartCreation(){
      
      this.stockService.getStock().subscribe(res => {
         let date = Object.keys(res['Monthly Time Series'])
         let open = Object.values(res['Monthly Time Series']).map(res => res["1. open"])
         let high = Object.values(res['Monthly Time Series']).map(res => res["2. high"])
         let low= Object.values(res['Monthly Time Series']).map(res => res["3. low"])
         let close = Object.values(res['Monthly Time Series']).map(res => res["4. close"])
        this.chart = new Chart('chart-1', {
          type: 'line',
          data: {
              labels: date,
              datasets: [{
                  label: 'open value',
                  data: open,
                  borderColor: '#3cba9f',
                  fill: false
              },
              {
                    label: 'close value',
                    data: close,
                    borderColor: '#ffcc00',
                    fill: false
                },
            ]
          },
          options: {
              scales: {
                xAxes: [{
                  display: true
          }],
                  yAxes: [{
                          display: true
                  }]
                  
              }
          }
      });
         
      })
  }
}
