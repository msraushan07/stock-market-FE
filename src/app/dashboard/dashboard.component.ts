import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from '../shared/stock.service';
import { ChartService } from '../shared/chart.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[StockService,ChartService]
})
export class DashboardComponent implements OnInit {
  stock = false
  stockCount
  constructor(private chartService: ChartService, private stockService:StockService) { }
 @ViewChild('f') Stockvalue : NgForm
  ngOnInit(): void {
  this.chartService.chartCreation();
 }

  buyStock(){
    this.stockService.addStock(this.Stockvalue.value.stock)
    .subscribe(res => {
      console.log(res)
    },(error) => {
      console.log(error)
  })
}
  sellStock(){
    this.stockService.deleteStock(this.Stockvalue.value.stock)
    .subscribe(res => {
      console.log(res)
  },(error) => {
    console.log(error)
  })
}
  showStock(){
    this.stockService.viewStock().subscribe(res => {
      this.stock=true
      this.stockCount= res
     },(error) => {
      console.log(error)
     })
   }
}