import { Component, Directive, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirection-button',
  templateUrl: './redirection-button.component.html',
  styleUrls: ['./redirection-button.component.scss'],
})


export class RedirectionButtonComponent implements OnInit {
  @Input() item :string
  @Input() src : string
  
  constructor() { }

  ngOnInit() {
    console.log("item",this.item)
  }


}
