import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styles: []
})
export class BreadcrumbsComponent implements OnInit {

	page_title : string = '';

	constructor(
				private router : Router,
				public title : Title,
				public meta : Meta
	) {

			this.getDataRoute().subscribe( datos => {

				this.page_title = datos.titulo;

				this.title.setTitle(datos.titulo);

				let metaTag : MetaDefinition = {
					name : 'description',
					content : this.page_title
				}
				this.meta.updateTag(metaTag);
			});
	}

	ngOnInit() {
	}

	getDataRoute()
	{
		return 	this.router.events
				.filter( evento => evento instanceof ActivationEnd )
				.filter( (evento:ActivationEnd) => evento.snapshot.firstChild === null )
				.map( (evento:ActivationEnd) => {
					return evento.snapshot.data
				});
	}

}
