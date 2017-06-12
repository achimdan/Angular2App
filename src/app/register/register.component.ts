import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../_services/auth.service'

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [AuthService]
})
export class RegisterComponent implements OnInit {

	credentials: credentials;
	isSelected = false;

	constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
		this.credentials = {
			email: '',
			username: '',
			password: ''
		};
	}

	ngOnInit() {
		this.isSelected = false;
	}

	userType(type) {
		console.log(type);
		this.isSelected = true;
	}

	register() {
		console.log(this.credentials);
	}

}

interface credentials {
	email: string,
	username: string,
	password: string,
}
