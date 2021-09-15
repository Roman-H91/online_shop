import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders = []
  orderSub: Subscription
  orderUnSub: Subscription

  constructor(
    private orderServ: OrderService
  ) { }

  ngOnInit() {
    this.orderSub = this.orderServ.getAllOrders().subscribe( orders => {
      this.orders = orders
    })
  }

  ngOnDestroy() {
    if (this.orderSub) {
      this.orderSub.unsubscribe()
    }

    if (this.orderUnSub) {
      this.orderUnSub.unsubscribe()
    }
  }

  removeOrderById(id) {
    this.orderUnSub = this.orderServ.removeOrderById(id).subscribe( () => {
      this.orders = this.orders.filter( order => order.id !== id)
    })
  }

}