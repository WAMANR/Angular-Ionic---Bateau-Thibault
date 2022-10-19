import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {IonicModule} from '@ionic/angular';
import {BoutonRecipiceComponent} from '../component/bouton-recipice/bouton-recipice.component';

@NgModule({
  declarations: [HeaderComponent,BoutonRecipiceComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent,BoutonRecipiceComponent]
})
export class SharedModule { }
