import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestaurantPage } from './restaurant.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RestaurantPageRoutingModule } from './restaurant-routing.module';
import {SharedModule} from '../sharedModule/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RestaurantPageRoutingModule,
    SharedModule
  ],
  declarations: [RestaurantPage]
})
export class RestaurantPageModule {}
