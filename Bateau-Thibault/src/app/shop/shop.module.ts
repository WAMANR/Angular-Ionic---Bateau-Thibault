import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopPage } from './shop.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShopPageRoutingModule } from './shop-routing.module';
import {SharedModule} from '../sharedModule/shared.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ShopPageRoutingModule,
    SharedModule
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
