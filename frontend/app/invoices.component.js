System.register(['angular2/core', 'angular2/router', './invoice-detail.component', './invoice.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, invoice_detail_component_1, invoice_service_1;
    var InvoicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (invoice_detail_component_1_1) {
                invoice_detail_component_1 = invoice_detail_component_1_1;
            },
            function (invoice_service_1_1) {
                invoice_service_1 = invoice_service_1_1;
            }],
        execute: function() {
            InvoicesComponent = (function () {
                function InvoicesComponent(_router, _invoiceService) {
                    this._router = _router;
                    this._invoiceService = _invoiceService;
                }
                InvoicesComponent.prototype.getInvoices = function () {
                    var _this = this;
                    this._invoiceService.getInvoices().then(function (invoices) { return _this.invoices = invoices; });
                };
                InvoicesComponent.prototype.ngOnInit = function () {
                    this.getInvoices();
                };
                InvoicesComponent.prototype.gotoDetail = function (invoice) {
                    this.selectedInvoice = invoice;
                    this._router.navigate(['InvoiceDetail', { id: this.selectedInvoice.Id }]);
                };
                InvoicesComponent.prototype.closeForm = function () {
                    $('.modal').hide();
                };
                InvoicesComponent.prototype.add = function () {
                    var service = this._invoiceService;
                    $(".invoice").on("keydown", ".numeric", function (e) {
                        service.onlyNumericFilter(e);
                    });
                    $('.modal').show();
                };
                InvoicesComponent.prototype.addRow = function () {
                    this._invoiceService.addRow();
                };
                InvoicesComponent.prototype.saveForm = function () {
                    this._invoiceService.save();
                };
                InvoicesComponent.prototype.calculate = function () {
                    this._invoiceService.calculate();
                };
                InvoicesComponent.prototype.onlyNumericFilter = function (e) {
                    this._invoiceService.onlyNumericFilter(e);
                };
                InvoicesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-invoices',
                        templateUrl: 'app/invoices.component.html',
                        styleUrls: ['app/invoices.component.css'],
                        directives: [invoice_detail_component_1.InvoiceDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, invoice_service_1.InvoiceService])
                ], InvoicesComponent);
                return InvoicesComponent;
            })();
            exports_1("InvoicesComponent", InvoicesComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=invoices.component.js.map