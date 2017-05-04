import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory.class';
import { InventoryService } from '../inventory.service';


@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent implements OnInit {

  list: Inventory[];

  constructor(
    private service: InventoryService
  ) { }

  ngOnInit() {
    this.service.getProducts()
        .subscribe(
          rs => this.list = rs,
          er => console.log(er),
          () => console.log(this.list)
        )
  }

}
