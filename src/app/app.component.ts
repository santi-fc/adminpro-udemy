import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(
				// SettingsService se carga en el constructor
				// para así lanzarse la carga rapidísimamente
				public _ajustes : SettingsService
	)
	{}

}
