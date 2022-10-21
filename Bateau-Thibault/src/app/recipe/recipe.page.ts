import {Component, OnInit} from '@angular/core';
import {Recipices} from '../models/recipices';
import {RecipiceService} from '../services/recipice.service';
import {NavigationExtras, Router} from '@angular/router';
import {error} from 'protractor';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.page.html',
  styleUrls: ['recipe.page.scss']
})
export class RecipePage implements OnInit {

  recipiceList: Recipices[];

  constructor(private router: Router,private recipiceService: RecipiceService) {}

  ngOnInit() {
    this.recipiceService.getRecipice().subscribe( res =>{
      this.recipiceList = res;
    }),
      err =>{
        console.log('error');
      }
  }

  onloadRecipice(recipe: Recipices){
    let navigationExtras: NavigationExtras = {
      state:{
        recipe:recipe,
        page : "recipe"
      }
    }
    this.router.navigate(['/tabs/single-recipice'],navigationExtras);
  }
}
