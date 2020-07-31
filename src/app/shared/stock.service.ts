import { Injectable , OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class StockService {
  
  constructor(private http: HttpClient) { }

  getStock(){
      return this.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo')
  }
}
