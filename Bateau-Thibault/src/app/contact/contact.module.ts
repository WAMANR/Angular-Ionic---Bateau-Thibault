import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContactPageRoutingModule } from './contact-routing.module';

import {SharedModule} from '../sharedModule/shared.module';
import {BoutonRecipiceComponent} from '../component/bouton-recipice/bouton-recipice.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContactPageRoutingModule,
    SharedModule
  ],
  exports: [
    BoutonRecipiceComponent
  ],
  declarations: [ContactPage, BoutonRecipiceComponent]
})
export class ContactPageModule {}
