import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Invoice } from './invoice';
import { InvoiceService } from './invoice.service';

@Component({
    selector: 'my-invoice-detail',
    templateUrl: 'app/invoice-detail.component.html',
    styleUrls: ['app/invoice-detail.component.css'],
    inputs: ['invoice']
})
export class InvoiceDetailComponent implements OnInit {
    invoice: Invoice;

    constructor(
        private _invoiceService: InvoiceService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._invoiceService.getInvoice(id)
            .then(invoice => this.invoice = invoice);
    }

    goBack() {
        window.history.back();
    }

    addRow(){
        this._invoiceService.addRow();
    }

    saveForm(){
        this._invoiceService.save();
    }

    calculate(){
        this._invoiceService.calculate();
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */