import { Component } from '@angular/core';
import '/home/meteor314/Desktop/school-project/Angular-Ionic---Bateau-Thibault/Bateau-Thibault/src/assets/products.json';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss'],
})
export class ShopPage {
  products = [
    {
      id: 12,
      name: 'Aile de raie',
      category: 0,
      price: 10.0,
      unit: 'kg',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: 'Pêche à la corde',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 9,
      name: 'Araignées',
      category: 2,
      price: 7.0,
      unit: 'kg',
      availability: false,
      sale: false,
      discount: 0.0,
      comments: 'Hors saison,  pêche aux casiers',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Bar de ligne',
      category: 0,
      price: 30.0,
      unit: 'kg',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: 'Plus de 1.5kg le poisson',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Bar de ligne portion',
      category: 0,
      price: 10.0,
      unit: 'pièce',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: 'Environ 550-700g la pièce',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 10,
      name: 'Bouquets cuits',
      category: 1,
      price: 8.0,
      unit: '100g',
      availability: false,
      sale: false,
      discount: 0.0,
      comments: "Hors saison, pêche à l'épuisette",
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 1,
      name: 'Filet Bar de ligne',
      category: 0,
      price: 7.0,
      unit: '2 filets',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: 'environ 300g',
      owner: 'tig',
      quantity: 1,
    },

    {
      id: 5,
      name: 'Filet Julienne',
      category: 0,
      price: 19.0,
      unit: 'kg',
      availability: false,
      sale: false,
      discount: 0.0,
      comments: 'Pêche à la corde',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 7,
      name: 'Huitres N°2 St Vaast',
      category: 1,
      price: 9.5,
      unit: 'Dz',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: '',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 8,
      name: 'Huitres N°2 St Vaast',
      category: 1,
      price: 38.0,
      unit: '4 Dz',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: '',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 13,
      name: 'Huîtres N°2 OR St Vaast',
      category: 1,
      price: 12.0,
      unit: 'Dz',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or Salon Agriculture",
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 14,
      name: 'Huîtres N°2 OR St Vaast',
      category: 1,
      price: 24.0,
      unit: '2 Dz',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or salon agriculture",
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 15,
      name: 'Huîtres N°2 OR St Vaast',
      category: 1,
      price: 48.0,
      unit: '4 Dz',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: "Médaille d'or salon agriculture",
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 16,
      name: 'Huîtres N°2 St Vaast',
      category: 1,
      price: 19.0,
      unit: '2 Dz',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: '',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Lieu jaune de ligne',
      category: 0,
      price: 12.0,
      unit: 'kg',
      availability: true,
      sale: false,
      discount: 0.0,
      comments: 'Environ 550-700g la portion',
      owner: 'tig',
      quantity: 1,
    },
    {
      id: 6,
      name: 'Moules de pêche',
      category: 1,
      price: 7.0,
      unit: 'kg',
      availability: true,
      sale: true,
      discount: 5.0,
      comments: '',
      owner: 'tig',
      quantity: 1,
    }
  ];
  constructor() {}
  ngOnInit() {
  }

  addProduct(product : any) {
    // verify if product is already in cart and increment quantity instead of adding it in local storage
    console.log('add product');
    const cart = localStorage.getItem('cart');
    if(!cart) {
      localStorage.setItem('cart', JSON.stringify([product]));
    } else {
      //verify if product is already in cart
      const cartProducts = JSON.parse(cart);    
      const productIndex = cartProducts.findIndex((p: any) => p.id === product.id);
      if(productIndex !== -1) {
        cartProducts[productIndex].quantity++;
        localStorage.setItem('cart', JSON.stringify(cartProducts));
      } else {
        localStorage.setItem('cart', JSON.stringify([...cartProducts, product]));
      }
    }
    
  }
  removeProduct(product : any) {
    console.log('remove product');
    const cart = localStorage.getItem('cart');
    if(cart) {
      const cartProducts = JSON.parse(cart);
      const productIndex = cartProducts.findIndex((p: any) => p.id === product.id);
      if(productIndex !== -1) {
        cartProducts[productIndex].quantity--;
        if(cartProducts[productIndex].quantity === 0) {
          cartProducts.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cartProducts));
      }
    }
      
  } //hope it works

  getQuantity(product: any) {
    const cart = localStorage.getItem('cart');
    if(cart) {
      const cartProducts = JSON.parse(cart);
      const productIndex = cartProducts.findIndex((p: any) => p.id === product.id);
      if(productIndex !== -1) {
        return cartProducts[productIndex].quantity;
      }
    }
    return 0;
  }
}
