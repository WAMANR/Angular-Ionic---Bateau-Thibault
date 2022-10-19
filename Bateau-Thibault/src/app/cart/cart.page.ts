import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private toastController: ToastController) {}

  ngOnInit() {}

  //  show cart from local storage
  getCart() {
    const response = JSON.parse(localStorage.getItem('cart'));
    console.log('response', response);
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

  // changeOption( get the value of the select option and update the quantity of the product in the cart)
  async changeOption(event: any) {
    const selectRestaurant = event.target.value;
    let isSelect = false;
    if (selectRestaurant >= '1' && selectRestaurant <= '5') {
      isSelect = true;
    }

    isSelect
      ? (this.handlerMessage = 'Submitted with suceess')
      : (this.handlerMessage = 'An error occured');

    const toast = await this.toastController.create({
      message: this.handlerMessage,
      duration: 3000,
    });

    await toast.present();
  }
}
