import { Component, OnInit } from '@angular/core';
import { StockService } from '../shared/stock.service';
import { ChartService } from '../shared/chart.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[StockService,ChartService]
})
export class DashboardComponent implements OnInit {

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
  this.chartService.chartCreation();
 }
}