import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FbResponse, Product } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  type = 'phone'
  cartProducts: Product [] = []

  constructor(private http : HttpClient) { }

  create(product) {
    return this.http.post('http://localhost:8080/api/item', product)
    .pipe(map( (res: FbResponse) => {
      return {
        ...product,
        id: res.name,
        date: new Date(product.date)
      }
    }))
  }

  getAllProduct() {
    return this.http.get('http://localhost:8080/api/item')
      .pipe(map ( res => {
        return Object.keys(res)
        .map(key => ({
          ...res[key],
          // id: key,
          // date: new Date(res[key].date)
        }))
      }))
    }

    getProductById(id) {
      return this.http.get(`http://localhost:8080/api/item/${id}`)
        .pipe(map ( (res: Product) => {
          return {
            ...res,
            // id,
            // date: new Date(res.date)
          }
        }))
      }

    removeProductById(id) {
      return this.http.delete(`http://localhost:8080/api/item/${id}`)
    }

    updateProduct(product: Product) {
      return this.http.put(`http://localhost:8080/api/item/${product.id}`, product)
    }

    setType(type) {
      this.type = type
    }

    addProduct (product) {
      this.cartProducts.push(product)
    }
  }

