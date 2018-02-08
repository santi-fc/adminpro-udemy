import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
	selector: 'app-incrementador',
	templateUrl: './incrementador.component.html',
	styles: []
})
export class IncrementadorComponent implements OnInit {

	@ViewChild('textProgreso') txtProgress : ElementRef;

	@Input() leyenda  : string = "Leyenda";
	@Input() progreso : number = 0;

	// Creamos un evento para que se escuchen los cambios desde fuera
	@Output() cambioValor : EventEmitter<number> = new EventEmitter();

	constructor() {
		console.log("Leyenda", this.leyenda);
		console.log("Progreso", this.progreso);
	}

	ngOnInit() {
	}

	onChanges ( valor : number )
	{
		// javascript puro
		//let element_html:any = document.getElementsByName("progreso")[0];

		if (valor >= 100) this.progreso = 100;
		else if ( valor <= 0) this.progreso = 0;
		else this.progreso = valor;

		//element_html.value = this.progreso
		this.txtProgress.nativeElement.value = this.progreso;

		this.cambioValor.emit( this.progreso );

		this.txtProgress.nativeElement.focus();
	}

	cambiarValor ( valor : number )
	{

		if ((this.progreso >= 100) && (valor > 0)) { return; }
		if ((this.progreso <= 0) && (valor < 0)) { return; }

		this.progreso = this.progreso + valor;

		// Avisamos que hemos cambiado el estado ;)
		this.cambioValor.emit( this.progreso );
	}


}
