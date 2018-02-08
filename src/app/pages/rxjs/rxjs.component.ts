import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

	subscription : Subscription;

	constructor() {

		this.subscription = this.regresaObservable()
		//.retry(2)
		.subscribe(
			numero => {
				console.log("Subs ", numero);
			},
			error => {
				console.error("Error en el observador", error);
			},
			() => {
				console.log("El observador termino!");
			}
		);

	}

	ngOnInit() {
	}

	ngOnDestroy()
	{
		this.subscription.unsubscribe();
	}

	regresaObservable():Observable<any>
	{
		return new Observable( observer => {

			let contador = 0;
			let intervalo = setInterval( () => {

				contador += 1;

				let salida = {
					valor : contador
				}

				// Notificamos que el contador se ha incrementado
				observer.next( salida );

				// if ( contador === 3)
				// {
				// 	clearInterval( intervalo );
                //
				// 	// Avisamos que ya no hay que seguir más...
				// 	observer.complete();
                //
				// }

				// if ( contador == 2)
				// {
				// 	observer.error("uff.. dos es demasié");
				// }

			}, 500);
		})
		.retry(2)
		.map( (respuesta:any) => {
			return respuesta.valor;
		})
		.filter( (valor, index) => {

			if ( (valor % 2) == 1 )
			{
				// impar
				return true;
			} else {
				// par
				return false;
			}
		});
	}

}
