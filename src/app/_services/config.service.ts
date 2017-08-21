import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

	constructor() { }

	domain() {
		console.log('domain');
		// return 'http://77.81.178.198:25001/onlineShop/api/auth/login';
	}	

}
