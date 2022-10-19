import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SingleRecipicePage } from './single-recipice.page';

const routes: Routes = [
  {
    path: '',
    component: SingleRecipicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleRecipicePageRoutingModule {}
