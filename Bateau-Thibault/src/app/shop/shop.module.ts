import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopPage } from './shop.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShopPageRoutingModule } from './shop-routing.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ShopPageRoutingModule
  ],
  declarations: [ShopPage, HeaderComponent]
})
export class ShopPageModule {}
