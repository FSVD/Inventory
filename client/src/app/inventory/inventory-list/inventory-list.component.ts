import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { Inventory } from '../inventory.class';
import { InventoryService } from '../inventory.service';

import { SlideComponent } from '../inventoryComponentAnimation';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
  providers: [InventoryService], //IMPORTANT! use providers instead of injectables.
  animations: [SlideComponent]
})
export class InventoryListComponent implements OnInit {

  list: Inventory[];

  @HostBinding('@SlideComponentAnim') SlideComponentAnim = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private service: InventoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getProducts()
        .subscribe(
          res => this.list = res,
          err => console.log(err),
          () => { // When completed execute this function.
                  for (let item of this.list) {
                    //console.log(item.name+"'s price is: "+item.price);
                  }
                }
        )
  }

  /*selectProduct(item: Inventory) {
    let link = ['/inventory/detail', item.id];
    this.router.navigate(link);
  }*/

  editProduct(item: Inventory) {
    let link = ['/inventory/detail', item.id];
    this.router.navigate(link);
  }

  deleteProduct(item: Inventory) {
    if (!item) return
    this.service.deleteProduct(item.id)
                .subscribe(
                  res => console.log(res),
                  err => console.log(err),
                  () => {
                    this.list = this.list.filter(items => items !== item)
                  }
                )
  }

}
