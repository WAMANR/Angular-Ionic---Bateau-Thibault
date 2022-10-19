import {Component, OnInit} from '@angular/core';
import {Recipices} from '../models/recipices';
import {RecipiceService} from '../services/recipice.service';
import {Router} from '@angular/router';
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
      console.log(res);
    }),
      err =>{
        console.log('error');
      }
  }

  onLoadRecipice(recipiceList){

  }
}
