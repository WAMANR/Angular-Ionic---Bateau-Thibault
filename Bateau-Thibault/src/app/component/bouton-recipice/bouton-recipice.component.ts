import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bouton-recipice',
  templateUrl: './bouton-recipice.component.html',
  styleUrls: ['./bouton-recipice.component.scss'],
})
export class BoutonRecipiceComponent implements OnInit {

  @Input() url: string;
  @Input() text: string;
  @Input() src: string;

  constructor() { }

  ngOnInit() {}

}
