import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleRecipicePageRoutingModule } from './single-recipice-routing.module';

import { SingleRecipicePage } from './single-recipice.page';
import {SharedModule} from '../sharedModule/shared.module';
import {SwipeModule} from '../swipe/swipe.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SingleRecipicePageRoutingModule,
        SharedModule,
        SwipeModule
    ],
  declarations: [SingleRecipicePage]
})
export class SingleRecipicePageModule {}
