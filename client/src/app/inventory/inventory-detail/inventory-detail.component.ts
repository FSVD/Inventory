import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Inventory } from '../inventory.class';
import { InventoryService } from '../inventory.service';
import { InventoryValidator } from '../inventory.validator';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css'],
  providers: [InventoryService]
})
export class InventoryDetailComponent implements OnInit {

  title = "Agregar un nuevo producto";
  form: FormGroup;
  inventory: Inventory[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventoryService,
    private formBuilder: FormBuilder
  ) { this.createControls(); }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (!id) return;

    this.service.getProductById(id)
                .subscribe(
                  res => this.inventory = res,
                  err => console.log("Error %s"+err),
                  () => {
                    if (this.inventory.length > 0) {
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

  createControls() {
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

  saveProduct() {
    this.service.addProduct(this.form.value)
                .subscribe(
                  res => console.log(res),
                  err => console.log(err),
                  () => {
                          console.log("Product added!");
                          this.form.reset();
                        }
                );
  }

  resetForm() {
    this.form.reset();
  }

}
