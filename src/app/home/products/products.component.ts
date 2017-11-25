import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	hello: string;
	array: any;
	mobHeight: any;

	constructor() {
		this.mobHeight = (window.innerHeight) + "px";
		console.log(this.mobHeight);
	}
	
	ngOnInit() {
		this.hello = 'hello';
		this.array = [
			{
				id:1,
				name:'aaa'
			},{
				id:2,
				name:'bbb'
			}
		];
	}

}
