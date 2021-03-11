import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitePrice: 25,
  };
  product1: any = {
    productId: 2,
    productName: 'Mause',
    categoryId: 1,
    unitePrice: 25,
  };
  product2: any = {
    productId: 3,
    productName: 'Camera',
    categoryId: 1,
    unitePrice: 25,
  };
  product3: any = {
    productId: 4,
    productName: 'Klavye',
    categoryId: 1,
    unitePrice: 25,
  };
  product4: any = {
    productId: 5,
    productName: 'Kasa',
    categoryId: 1,
    unitePrice: 25,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
