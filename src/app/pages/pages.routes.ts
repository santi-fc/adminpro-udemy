import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
	{
        path : '',
        component : PagesComponent,
        children : [
            { path : 'dashboard', component : DashboardComponent, data : { titulo : 'Dashboard' } },
            { path : 'progress', component : ProgressComponent, data : { titulo : 'Progress bars' } },
            { path : 'graficas1', component : Graficas1Component, data : { titulo : 'Gráficas' } },
            { path : 'promesas', component : PromesasComponent, data : { titulo : 'Promesas' } },
            { path : 'rxjs', component : RxjsComponent, data : { titulo : 'RX-JS test' } },
			{ path : 'account-settings', component : AccountSettingsComponent, data : { titulo : 'Ajustes usuario' } },
            { path : '', redirectTo : '/dashboard', pathMatch: 'full' },
        ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
