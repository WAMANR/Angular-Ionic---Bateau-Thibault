import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoatPage } from './boat.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BoatPageRoutingModule } from './boat-routing.module';
import {SharedModule} from '../sharedModule/shared.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BoatPageRoutingModule,
    SharedModule
  ],
  declarations: [BoatPage]
})
export class BoatPageModule {}
