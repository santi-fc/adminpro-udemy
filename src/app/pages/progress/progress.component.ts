import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styles: []
})
export class ProgressComponent implements OnInit {

	progreso_1 : number = 20;
	progreso_2 : number = 30;

	constructor() { }

	ngOnInit() {
	}




}
