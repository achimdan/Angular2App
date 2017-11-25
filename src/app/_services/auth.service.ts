import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

	constructor(private http: Http) { }

	login(credentials) {
		let headers = new Headers({ 
            'Content-Type': 'application/json',
            'X-Requested-With' : 'XMLHttpRequest'
        }),
		options = new RequestOptions({ 
            headers: headers 
        });

        return this.http.post('http://77.81.178.198:25001/onlineShop/api/auth/login', JSON.stringify
		({ username: credentials.username, password: credentials.password }), options)
            .map((response: Response) => {
                console.log(response);
				// login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log(user.token);
                }
            });
    }


}
