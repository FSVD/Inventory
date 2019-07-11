import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Inventory } from '../inventory.class';
import { InventoryService } from '../inventory.service';
import { InventoryValidator } from '../inventory.validator';

import { SlideComponent } from '../inventoryComponentAnimation';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css'],
  animations: [SlideComponent]
})
export class InventoryDetailComponent implements OnInit {

  title = "";
  form: FormGroup;
  inventory: Inventory[];
  updating = false;

  @HostBinding('@SlideComponentAnim') SlideComponentAnim = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventoryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (!id) {
      this.title = "Add new product";
      this.createControlsNewProduct();
      return;
    }
  

    this.title = "Update product details";
    this.createControlsExistingProduct();

    this.service.getProductById(id)
                .subscribe(
                  res => this.inventory = res,
                  err => console.log("Error %s"+err),
                  () => {
                    if (this.inventory.length > 0) {
                      this.updating = true;
                      this.form.patchValue({
                        id: this.inventory[0].id,
                        name: this.inventory[0].name,
                        stock: this.inventory[0].stock,
                        price: this.inventory[0].price,
                        vendor: this.inventory[0].vendor
                      })
                    }
                  }
                )

    console.log("Obtained id: "+id);
  }

  createControlsNewProduct() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required, InventoryValidator.uniqueValue(this.service)],
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(45)
      ])],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      vendor: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(45)
      ])]
    })
  }

  createControlsExistingProduct() {
    this.form = this.formBuilder.group({
      id: [{value: '', disabled: true}, Validators.required], //Disable id form field to avoid modifications
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(45)
      ])],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      vendor: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(45)
      ])]
    })
  }

  saveProduct() {
    if (this.updating) {
      this.saveExistingProduct(this.form.getRawValue()); //getRawValue includes all values regardless of disabled status
    } else {
      this.saveNewProduct(this.form.value);
    }
  }

  saveNewProduct(inventory: Inventory) {
    this.service.addProduct(inventory)
                .subscribe(
                  res => console.log(res),
                  err => console.log(err),
                  () => {
                          console.log("Product added!");
                          this.form.reset();
                        }
                );
  }

  saveExistingProduct(inventory: Inventory) {
    if (!inventory) return;
    this.service.updateProduct(inventory)
                .subscribe(
                  res => console.log(res),
                  err => console.log(err),
                  () => {
                          console.log("Product updated!");
                          this.showProductList();
                        }
                );
  }

  resetForm() {
    this.form.reset();
  }

  showProductList() {
    let link = ['/inventory/list'];
    this.router.navigate(link);
  }

}
