System.register(['angular2/core', 'angular2/http', 'rxjs/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var InvoiceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            InvoiceService = (function () {
                function InvoiceService(_http) {
                    this._http = _http;
                    this.url = 'http://localhost:55246/';
                    this.total = null;
                    this.totalTax = null;
                    this.vat = 18;
                    this.i = 0;
                }
                InvoiceService.prototype.getInvoices = function () {
                    return this._http.get(this.url + 'Invoices/')
                        .map(function (response) { return response.json(); }).toPromise();
                };
                InvoiceService.prototype.getInvoice = function (id) {
                    return this._http.get(this.url + 'Invoices/Detail/' + id)
                        .map(function (response) { return response.json(); }).toPromise();
                };
                InvoiceService.prototype.calculateTotalRows = function () {
                    $(".row").each(function () {
                        var hours = parseInt($(this).find('input[type=text]').eq(1).val());
                        var price = parseInt($(this).find('input[type=text]').eq(2).val());
                        $(this).find('.total-row').val(hours * price);
                    });
                };
                InvoiceService.prototype.calculateTotal = function () {
                    var sum = 0;
                    $(".row").each(function () {
                        var total = parseInt($(this).find('.total-row').val());
                        if (!isNaN(total))
                            sum += total;
                        else
                            throw "Can not parse value. Please check the input value.";
                    });
                    $("#total-sum").val(sum);
                    this.total = sum;
                };
                InvoiceService.prototype.calculateTotalTax = function () {
                    var totalWithTaxes = (((this.total * this.vat) / 100) + this.total).toFixed(2);
                    $("#total-tax-sum").val(totalWithTaxes);
                    this.totalTax = totalWithTaxes;
                };
                InvoiceService.prototype.addRow = function () {
                    var row = $('<tr class="row">' +
                        '<td><input type="text" name="fields[' + this.i + '][name]"></td>' +
                        '<td><input type="text" name="fields[' + this.i + '][hours]" class="numeric" value="0"></td>' +
                        '<td><input type="text" name="fields[' + this.i + '][price]" class="numeric" value="0"></td>' +
                        '<td><input type="text" name="fields[' + this.i + '][comment]"></td>' +
                        '<td><input type="text" name="fields[' + this.i + '][total]" class="total-row" readonly></td>' +
                        '</tr>').clone();
                    this.i++;
                    if ($(".row").length)
                        row.insertAfter(".row:last");
                    else
                        row.insertAfter(".header-colum");
                };
                InvoiceService.prototype.calculate = function () {
                    this.calculateTotalRows();
                    this.calculateTotal();
                    this.calculateTotalTax();
                };
                InvoiceService.prototype.save = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.post(this.url + 'Invoices/Create', $("#invoice-form").serialize2Json(), {
                        headers: headers
                    }).subscribe(function (data) {
                        /*var obj = data.json();
                        $('<li>' +
                         '<span class="badge">'+ obj.Id + '</span> '+ obj.Number +
                         '</li>')
                            .appendTo(".invoices");*/
                        $('.modal').hide();
                        window.location.reload();
                    }, function (err) { return console.log(err); });
                };
                InvoiceService.prototype.onlyNumericFilter = function (e) {
                    // Allow: backspace, delete, tab, escape, enter and .
                    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                        // Allow: Ctrl+A
                        (e.keyCode == 65 && e.ctrlKey === true) ||
                        // Allow: Ctrl+C
                        (e.keyCode == 67 && e.ctrlKey === true) ||
                        // Allow: Ctrl+X
                        (e.keyCode == 88 && e.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (e.keyCode >= 35 && e.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    // Ensure that it is a number and stop the keypress
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        e.preventDefault();
                    }
                };
                InvoiceService.prototype.checkInvoice = function () {
                };
                InvoiceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], InvoiceService);
                return InvoiceService;
            })();
            exports_1("InvoiceService", InvoiceService);
            $.fn.serialize2Json = function () {
                var self = this, json = {}, push_counters = {}, patterns = {
                    "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                    "key": /[a-zA-Z0-9_]+|(?=\[\])/g,
                    "push": /^$/,
                    "fixed": /^\d+$/,
                    "named": /^[a-zA-Z0-9_]+$/
                };
                this.build = function (base, key, value) {
                    base[key] = value;
                    return base;
                };
                this.push_counter = function (key) {
                    if (push_counters[key] === undefined) {
                        push_counters[key] = 0;
                    }
                    return push_counters[key]++;
                };
                $.each($(this).serializeArray(), function () {
                    // skip invalid keys
                    if (!patterns.validate.test(this.name)) {
                        return;
                    }
                    var k, keys = this.name.match(patterns.key), merge = this.value, reverse_key = this.name;
                    while ((k = keys.pop()) !== undefined) {
                        // adjust reverse_key
                        reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');
                        // push
                        if (k.match(patterns.push)) {
                            merge = self.build([], self.push_counter(reverse_key), merge);
                        }
                        else if (k.match(patterns.fixed)) {
                            merge = self.build([], k, merge);
                        }
                        else if (k.match(patterns.named)) {
                            merge = self.build({}, k, merge);
                        }
                    }
                    json = $.extend(true, json, merge);
                });
                return JSON.stringify(json);
            };
        }
    }
});
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=invoice.service.js.map