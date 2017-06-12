import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

	constructor(private http: Http) { }

	login(credentials) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

        return this.http.post('http://45.55.216.199:8080/styllink/api/v1/authentication/tokens', JSON.stringify
		({ email: credentials.email ,username: credentials.username, password: credentials.password }), options)
            .map((response: Response) => {
                console.log(response);
				// login successful if there's a jwt token in the response
                // let user = response.json();
                // if (user && user.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                // }
            });
    }


}
