import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../_services/auth.service'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [AuthService]
})
export class LoginComponent implements OnInit {

	credentials: credentials;
	returnUrl: string;

	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
		this.credentials = {
			email: '',
			username: '',
			password: ''
		}

	}

	ngOnInit() {
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	
	login () {
		this.authService.login(this.credentials)
			.subscribe(data => {
				this.router.navigate(['/home']);
			})
	}


}

interface credentials {
	email: string,
	username: string,
	password: string
}

