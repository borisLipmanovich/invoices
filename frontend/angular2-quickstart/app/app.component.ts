import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { InvoiceService } from './invoice.service';
import { InvoicesComponent } from './invoices.component';
import { InvoiceDetailComponent } from './invoice-detail.component';
import {Route} from "angular2/router";

@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        InvoiceService
    ]
})

@RouteConfig([
    new Route({
        path: '/:id',
        name: 'InvoiceDetail',
        component: InvoiceDetailComponent
    }),
    new Route({
        path: '/',
        name: 'Invoices',
        component: InvoicesComponent,
        useAsDefault: true
    })
])

export class AppComponent {
    title = 'List of Invoices';
}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */