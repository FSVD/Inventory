import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

//import { InventoryModule } from './inventory/inventory.module'; // IMPORTANT! Inventory module import is not necessary from routing module because it is a feature stand-alone module. Only needs import the module from the app.module file.

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'customer', component: CustomerComponent },
    //{ path: 'inventory', loadChildren: () => InventoryModule }, //IMPORTANT! Arrow function does not work with AoT when it is passed to an NgModule.
    //{ path: 'inventory', loadChildren: 'app/inventory/inventory.module' }, IMPORTANT! Inventory module path is not necessary from routing module because it is a feature stand-alone module. Only needs import the module from the app.module file.
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes),
        //InventoryModule IMPORTANT! Inventory module import is not necessary from routing module because it is a feature stand-alone module. Only needs import the module from the app.module file.
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}