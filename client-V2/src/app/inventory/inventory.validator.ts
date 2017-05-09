import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

import { InventoryService } from './inventory.service';

export class InventoryValidator {

    static uniqueValue(service: InventoryService): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (this.isPresent(Validators.required(control))) return null;

            var value = control.value;

            return new Promise((resolve, reject) => {
                service.getProductById(value).subscribe(
                    data => {
                        if (data.length > 0)
                            resolve({uniqueValue:true});
                        else
                            resolve(null);
                    },
                    err => resolve({uniqueValue:true})
                )
            })
        }
    }

    static isPresent(obj: any): boolean {
        return obj !== undefined && obj !== null;
    }
}