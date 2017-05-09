import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';

import { InventoryService } from './inventory.service';

import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule ({
    declarations: [
        InventoryComponent,
        InventoryListComponent,
        InventoryDetailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        InventoryRoutingModule
    ],
    exports: [
        InventoryComponent,
        InventoryListComponent,
        InventoryDetailComponent
    ],
    providers: [
        InventoryService
    ]
})

export class InventoryModule { }