System.register(['angular2/core', 'angular2/router', './invoice.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, invoice_service_1;
    var InvoiceDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (invoice_service_1_1) {
                invoice_service_1 = invoice_service_1_1;
            }],
        execute: function() {
            InvoiceDetailComponent = (function () {
                function InvoiceDetailComponent(_invoiceService, _routeParams) {
                    this._invoiceService = _invoiceService;
                    this._routeParams = _routeParams;
                }
                InvoiceDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._invoiceService.getInvoice(id)
                        .then(function (invoice) { return _this.invoice = invoice; });
                };
                InvoiceDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                InvoiceDetailComponent.prototype.addRow = function () {
                    this._invoiceService.addRow();
                };
                InvoiceDetailComponent.prototype.saveForm = function () {
                    this._invoiceService.save();
                };
                InvoiceDetailComponent.prototype.calculate = function () {
                    this._invoiceService.calculate();
                };
                InvoiceDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-invoice-detail',
                        templateUrl: 'app/invoice-detail.component.html',
                        styleUrls: ['app/invoice-detail.component.css'],
                        inputs: ['invoice']
                    }), 
                    __metadata('design:paramtypes', [invoice_service_1.InvoiceService, router_1.RouteParams])
                ], InvoiceDetailComponent);
                return InvoiceDetailComponent;
            }());
            exports_1("InvoiceDetailComponent", InvoiceDetailComponent);
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=invoice-detail.component.js.map