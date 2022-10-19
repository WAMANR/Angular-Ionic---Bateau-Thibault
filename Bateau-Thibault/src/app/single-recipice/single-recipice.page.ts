import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import { stringify } from 'querystring';


@Component({
  selector: 'app-single-recipice',
  templateUrl: './single-recipice.page.html',
  styleUrls: ['./single-recipice.page.scss'],
})
export class SingleRecipicePage implements OnInit {

  page : string;
  recipice: {
    name: string,
    completeName: string,
    description: string,
    src: string
  };

  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController,) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state.recipe);
        this.recipice = this.router.getCurrentNavigation().extras.state.recipe;
        this.page = this.router.getCurrentNavigation().extras.state.page;
      }
    });
  }

  ngOnInit() {

  }

  goBack() {
    var path = "/tabs/";
    this.navCtrl.navigateBack([path.concat(this.page)]);
  }

  onSwipeLeft($event) {
    //this.navCtrl.navigateBack(['/', 'items', previousItem.id]);
    this.goBack();
  }

  onSwipeRight($event){
    //not implemented
  }
}
