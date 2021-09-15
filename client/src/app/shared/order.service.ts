import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FbResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order) {
    return this.http.post('http://localhost:8080/api/cart', order)
      .pipe(map((res: FbResponse) => {
        return {
          ...order,
          id: res.name,
          date: new Date(order.date)
        }
      }))
  }

  getAllOrders() {
    return this.http.get('http://localhost:8080/api/cart')
      .pipe(map(res => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
      }))
  }

  removeOrderById(id) {
    return this.http.delete(`http://localhost:8080/api/cart/${id}`)
  }

}
