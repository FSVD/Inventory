import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    title: string = '';
    isLogged: boolean = false;
    error: string = '';
    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private auth: AuthService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.title = 'Login';
        this.auth.logOut();
        this.createControls();
    }

    createControls() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        })
    }

    checkLogin(formData) {
        let authorizationKey: string;
        this.auth.logIn(formData)
                 .subscribe(
                    res => this.isLogged = res,
                    err => console.log(err),
                    () => {
                        if (this.isLogged) {
                            this.goInventory();
                        } else {
                            this.error = 'Authorization denied';
                        }
                    }
                )
    }

    goInventory() {
        let link = ['/inventory'];
        this.router.navigate(link);
    }
}