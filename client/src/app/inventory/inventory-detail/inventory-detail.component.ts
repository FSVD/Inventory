import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.css'],
  providers: [InventoryService]
})
export class InventoryDetailComponent implements OnInit {

  title = "Agregar un nuevo producto";
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventoryService,
    private formBuilder: FormBuilder
  ) { this.createControls(); }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (!id) return;

    console.log("Obtained id: "+id);
  }

  createControls() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(45)
        ])],
      stock: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(11)
      ])],
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
                  () => console.log("Product added!")
                );
  }

}
