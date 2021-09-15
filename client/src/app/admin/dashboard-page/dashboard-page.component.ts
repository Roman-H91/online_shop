import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  products = []
  productSub: Subscription
  productUnsub: Subscription
  productName

  constructor(
    private productServ: ProductService
  ) { }

  ngOnInit() {
    this.productSub = this.productServ.getAllProduct().subscribe( products => {
      this.products = products
    })
  }

  ngOnDestroy() {
    if (this.productSub) {
      this.productSub.unsubscribe()
    }

    if (this.productUnsub) {
      this.productUnsub.unsubscribe()
    }
  }

  removeProductById(id) {
    this.productUnsub = this.productServ.removeProductById(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
      alert("Product deleted!")
    })
  }
}
