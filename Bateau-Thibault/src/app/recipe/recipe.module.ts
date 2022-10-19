import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipePage } from './recipe.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecipePageRoutingModule } from './recipe-routing.module';
import {SharedModule} from '../sharedModule/shared.module';
import {ContactPageModule} from "../contact/contact.module";



@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        RecipePageRoutingModule,
        SharedModule,
        ContactPageModule
    ],
  declarations: [RecipePage]
})
export class RecipePageModule {}
