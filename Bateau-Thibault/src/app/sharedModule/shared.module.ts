import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {IonicModule} from '@ionic/angular';
import { RedirectionButtonComponent } from '../redirection-button/redirection-button.component';

@NgModule({
  declarations: [HeaderComponent,RedirectionButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [HeaderComponent,RedirectionButtonComponent]
})
export class SharedModule { }
