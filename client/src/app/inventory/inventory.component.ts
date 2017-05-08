import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  animations: [
    trigger('animBtn', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        background: '#d9534f',
        borderColor: '#d9534f',
        transform: 'scale(1.05)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out')),
    ])
  ]
})
export class InventoryComponent implements OnInit {

  animStateBtn1 = "inactive";
  animStateBtn2 = "inactive";

  constructor() { }

  ngOnInit() {
  }

}
