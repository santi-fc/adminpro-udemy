import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
	selector: 'app-account-settings',
	templateUrl: './account-settings.component.html',
	styles: []
})
export class AccountSettingsComponent implements OnInit {

	// Para poder acceder al DOM :_)
	constructor(public _ajustes : SettingsService
 					) { }

	ngOnInit() {
		this.colocarCheck();
	}

	cambiarTema( tema:string, link:any )
	{
		this.aplicarCheck( link );
		this._ajustes.aplicarTema( tema );
	}

	aplicarCheck( link:any )
	{
		let selectores:any = document.getElementsByClassName("selector");
		for ( let ref of selectores )
		{
			// esto es javascript puro
			ref.classList.remove('working');
		}
		link.classList.add('working');
	}

	colocarCheck()
	{
		let selectores:any = document.getElementsByClassName("selector");
		let tema:string = this._ajustes.ajustes.tema;
		for ( let ref of selectores )
		{
			if ( ref.getAttribute("data-theme") == tema)
			{
				ref.classList.add("working");
				break;
			}
		}
	}

}
