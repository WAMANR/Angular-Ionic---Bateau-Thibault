import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurants } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: 'restaurant.page.html',
  styleUrls: ['restaurant.page.scss']
})
export class RestaurantPage {
  restaurantList: Restaurants[];

  constructor(private router: Router,private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getRecipice().subscribe( res =>{
      this.restaurantList = res;
      console.log(res);
    }),
      err =>{
        console.log('error');
      }
  }

  onLoadRestaurant(restaurant : Restaurants){
    let navigationExtras: NavigationExtras = {
      state:{
        recipe : restaurant,
        page : "restaurant"
      }
    }
    this.router.navigate(['/tabs/single-recipice'],navigationExtras);
  }

}
