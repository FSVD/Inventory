import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { ServerList } from '../../environments/serverlist.class';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

    username: string;
    loggedIn: boolean;
    url = ServerList.domain+"/auth";

    constructor(private http: Http) {
        this.username = '';
        this.loggedIn = false;
    }

    logIn(userInfo) {
        let url = `${this.url}/login`;
        let userInfoJson = JSON.stringify(userInfo);

        return this.http.post(url, userInfoJson, {
            headers: new Headers({
                'Content-Type':'application/json'
            })
        })
        .map(res => res.text())
        .map(res => {
            if (res == "Something goes wrong!" || res == "No user found") {
                this.loggedIn = false;
            } else {
                localStorage.setItem('authorizationKey', res);
                this.username = userInfo.username;
                this.loggedIn = true;
            }
            return this.loggedIn;
        });
    }

    logOut(): void {
        localStorage.removeItem('authorizationKey');
        this.username = '';
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
 }