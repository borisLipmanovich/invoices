import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Invoice } from './invoice';
import { InvoiceDetailComponent } from './invoice-detail.component';
import { InvoiceService } from './invoice.service';

@Component({
    selector: 'my-invoices',
    templateUrl: 'app/invoices.component.html',
    styleUrls:  ['app/invoices.component.css'],
    directives: [InvoiceDetailComponent]
})
export class InvoicesComponent implements OnInit {
    invoices: Invoice[];
    selectedInvoice: Invoice;

    constructor(
        private _router: Router,
        private _invoiceService: InvoiceService) { }

    getInvoices() {
        this._invoiceService.getInvoices().then(invoices => this.invoices = invoices);
    }

    ngOnInit() {
        this.getInvoices();
    }

    gotoDetail(invoice: Invoice) {
        this.selectedInvoice = invoice;
        this._router.navigate(['InvoiceDetail', { id: this.selectedInvoice.Id }]);
    }

    closeForm(){
        $('.modal').hide();
    }

    add(){
        $('.modal').show();
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