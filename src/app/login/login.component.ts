import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
	selector: 'app-login',
	styleUrls : ['./login.component.css'],
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	constructor(
				public _router : Router
	) { }

	ngOnInit() {
		init_plugins();
	}

	ingresar()
	{
		this._router.navigate(['/dashboard']);
	}
}
