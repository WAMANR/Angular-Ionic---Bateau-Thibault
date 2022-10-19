import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContactPageRoutingModule } from './contact-routing.module';

import {SharedModule} from '../sharedModule/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContactPageRoutingModule,
    SharedModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
