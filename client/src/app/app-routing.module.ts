import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventory/inventory-detail/inventory-detail.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'inventory', component: InventoryComponent,
        children: [
            //{ path: '', redirectTo: 'list', pathMatch: 'full' }, // Define si hay que cargar un child por defecto al abrir la pagina padre.
            { path: 'list', component: InventoryListComponent },
            { path: 'detail', component: InventoryDetailComponent }
        ]
    },
    { path: 'contact', component: ContactComponent }
]

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}