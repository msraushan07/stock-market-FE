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
export class DashboardComponent  {
  symbol=''
  dataset = [{Company:"Micrsoft",Symbol:"MSFT"},
            {Company:"Apple",Symbol:"AAPL"},
            {Company:"Google",Symbol:"GOOG"},
            {Company:"IBM",Symbol:"IBM"},
            {Company:"Amazon",Symbol:"AMZN"}];
  stock = false
  error:string = null
  msg: string = null
  stockCount
  constructor(private chartService: ChartService, private stockService:StockService) { }
 @ViewChild('f') Stockvalue : NgForm
 @ViewChild('n') Symbolvalue : NgForm
  graph() {
    let sym=this.Symbolvalue.value.symbol
  this.chartService.chartCreation(sym);
 }

  buyStock(){
    this.stockService.addStock(this.Stockvalue.value.stock)
    .subscribe(res => {
      alert(`${this.Stockvalue.value.stock}:stock added successfully`)
    },(error) => {
      console.log(error)
  })
}
  sellStock(){
    this.stockService.deleteStock(this.Stockvalue.value.stock)
    .subscribe(res => {
      alert(`${this.Stockvalue.value.stock}:stock sold successfully`)
  },(error) => {
     this.error=error.error.text
  })
}
  showStock(){
    this.stockService.viewStock().subscribe(res => {
      this.stock=true
      this.stockCount= res
     },(error) => {
      this.error=error.error.text
     })
   }
}