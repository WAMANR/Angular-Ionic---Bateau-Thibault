import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoatPage } from './boat.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BoatPageRoutingModule } from './boat-routing.module';

import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BoatPageRoutingModule
  ],
  declarations: [BoatPage, HeaderComponent]
})
export class BoatPageModule {}
