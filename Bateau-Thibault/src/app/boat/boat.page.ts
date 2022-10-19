import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoatService } from '../services/boat.service';
import { Boats } from '../models/boats';

@Component({
  selector: 'app-boat',
  templateUrl: 'boat.page.html',
  styleUrls: ['boat.page.scss']
})
export class BoatPage {
  boatList: Boats[];

  constructor(private router: Router,private boatService: BoatService) {}

  ngOnInit() {
    this.boatService.getRecipice().subscribe( res =>{
      this.boatList = res;
      console.log(res);
    }),
      err =>{
        console.log('error');
      }
  }

  onLoadRecipice(boatList){

  }

}
