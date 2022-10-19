import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  //  show cart from local storage 
  getCart() {
    const response =  JSON.parse(localStorage.getItem('cart'));
    console.log("response", response);
    return response;
    
  }

  products = this.getCart();

  totalPrice() {
    let total = 0;
    this.products.forEach((product: any) => {
      total += product.price * product.quantity;
    });
    return total;
  }

  total = this.totalPrice();


}
