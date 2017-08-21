import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map'; 

export class Categories {
	constructor(public id: number, public title: string) {}
}

@Injectable()
export class DataService {

	constructor(private http: Http) {}

	getCategories() {
    // Config + 'categories?page=' + (query.page - 1) + '&size=' + query.limit;
		return this.http.get('https://jsonplaceholder.typicode.com/albums')
		// return this.http.get('http://77.81.178.198:25001/onlineShop/categories?page=2/&size=10')
			.map((response: Response) => <Categories[]>response.json());
	}

}
