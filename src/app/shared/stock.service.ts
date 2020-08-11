import { Injectable , OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AuthService } from './auth.service';
@Injectable()
export class StockService {
  
  constructor(private http: HttpClient, private authService:AuthService) { }
  
  addStock(stock:string){
     return this.http.post('http://localhost:3000/addStock',{ stock })
  }

  deleteStock(stock:string){
    return this.http.post('http://localhost:3000/deleteStock',{ stock })
  }

  viewStock(){
    return this.http.get('http://localhost:3000/viewStock')
  }

  getStock(sym){
      return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${sym}&apikey=RHTHJO8IVQUQGWFN`)
  }
}
