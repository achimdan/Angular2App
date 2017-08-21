import { Component, OnInit } from '@angular/core';

import { DataService } from 'app/_services/data.service';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	name = 'Categories';
	
	categories: Array<any>;
	// categories: Categories[];

	constructor(private DataService: DataService) {}

	getCategories() {
		this.DataService.getCategories()
		.subscribe(categories => this.categories = categories);
	}

	ngOnInit() {
		this.getCategories();
	}
	
	showInfo(category) {
		console.log(category);
	}

}
