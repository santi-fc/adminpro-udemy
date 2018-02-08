import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-grafica-donut',
	templateUrl: './grafica-donut.component.html',
	styles: []
})
export class GraficaDonutComponent implements OnInit {

	@Input() leyenda : string = "";

	@Input() doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	@Input() doughnutChartData:number[] = [350, 450, 100];
	@Input() doughnutChartType:string = 'doughnut';

	constructor() { }

	ngOnInit() {
	}

}
