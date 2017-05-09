import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';

import { InventoryModule } from './inventory/inventory.module';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'inventory', loadChildren: () => InventoryModule },
    { path: 'contact', component: ContactComponent }
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes),
        InventoryModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}