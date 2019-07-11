import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';

import { AuthGuardService } from '../login/authguard.service';

const inventoryRoutes: Routes = [
    { path: 'inventory', component: InventoryComponent,
        canActivate: [AuthGuardService],
        children: [
            //{ path: '', redirectTo: 'list', pathMatch: 'full' }, // Define si hay que cargar un child por defecto al abrir la pagina padre.
            { path: 'list', component: InventoryListComponent },
            { path: 'detail', component: InventoryDetailComponent },
            { path: 'detail/:id', component: InventoryDetailComponent }
        ]
    }
]

@NgModule ({
    imports: [
        RouterModule.forChild(inventoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class InventoryRoutingModule {}