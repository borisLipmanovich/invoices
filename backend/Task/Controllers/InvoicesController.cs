using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Web.Http.Cors;
using System.Web.Mvc;
using Task.Models;
using Task.Models.ViewModels;

namespace Task.Controllers
{
    public class InvoicesController : Controller
    {
        private readonly TaskContext _db = new TaskContext();

        // GET: Invoices/Index
        [HttpGet]
        [AllowCrossSiteJson]
        public JsonResult Index()
        {
            var list = _db.Invoices.AsEnumerable().Select(invoice => new InvoiceViewModel()
            {
                Id = invoice.id,
                Number = invoice.number,
                Date = invoice.date.ToString(),
                Fields = InvoiceSerializer.DeserializeFields(invoice.fields),
                CompanyId = invoice.company_id,
                CompanyName = invoice.Company.name,
                TotalSum = invoice.totalSum,
                TotalTaxSum = invoice.totalTaxSum
            }).ToList();

            return Json(list, JsonRequestBehavior.AllowGet);
        }

        // GET: Invoices/Details/5
        [HttpGet]
        [AllowCrossSiteJson]
        public JsonResult Detail(long? id)
        {
            if (id == null)
                throw new Exception("Can not find id");

            var invoice = _db.Invoices.Find(id);
            if (invoice == null)
                throw new Exception("Can not find the Invoice");

            return Json(new InvoiceViewModel()
            {
                Id = invoice.id,
                Number = invoice.number,
                Fields = InvoiceSerializer.DeserializeFields(invoice.fields),
                CompanyId = invoice.company_id,
                CompanyName = invoice.Company.name,
                TotalSum = invoice.totalSum,
                TotalTaxSum = invoice.totalTaxSum,
                Date = invoice.date.ToString()
            }, JsonRequestBehavior.AllowGet);
        }

        // POST: Invoices/Create
        [HttpPost]
        [AllowCrossSiteJson]
        public JsonResult Create(InvoiceViewModel invoice)
        {
            var addInvoice = new Invoice()
            {
                company_id = invoice.CompanyId,
                number = invoice.Number ?? Guid.NewGuid().ToString(),
                date = Convert.ToDateTime(invoice.Date),
                fields = InvoiceSerializer.SerializeFields(invoice.Fields),
                totalSum = invoice.TotalSum,
                totalTaxSum = invoice.TotalTaxSum
                
            };
            _db.Invoices.Add(addInvoice);
            _db.SaveChanges();
         
            return Json(new InvoiceViewModel()
            {
                Id = addInvoice.id,
                Number = addInvoice.number,
                Date = addInvoice.date.ToString(),
                Fields = InvoiceSerializer.DeserializeFields(addInvoice.fields),
                CompanyId = addInvoice.company_id,
                TotalSum = addInvoice.totalSum,
                TotalTaxSum = addInvoice.totalTaxSum,
            });
        }

        // POST: Invoices/Edit/5
        [HttpPost]
        [AllowCrossSiteJson]
        public JsonResult Edit(InvoiceViewModel invoice)
        {
            var addInvoice = new Invoice()
            {
                id = invoice.Id,
                company_id = invoice.CompanyId,
                number = invoice.Number,
                date = Convert.ToDateTime(invoice.Date),
                fields = InvoiceSerializer.SerializeFields(invoice.Fields),
                totalSum = invoice.TotalSum,
                totalTaxSum = invoice.TotalTaxSum
            };
            _db.Entry(addInvoice).State = EntityState.Modified;
            _db.SaveChanges();
            
            return Json(new InvoiceViewModel()
            {
                Id = addInvoice.id,
                Number = addInvoice.number,
                Date = addInvoice.date.ToString(),
                Fields = InvoiceSerializer.DeserializeFields(addInvoice.fields),
                CompanyId = addInvoice.company_id,
                TotalSum = addInvoice.totalSum,
                TotalTaxSum = addInvoice.totalTaxSum
            });
        }

        // POST: Invoices/Delete/5
        [HttpPost]
        [AllowCrossSiteJson]
        public JsonResult Delete(long? id)
        {
            if (id == null)
                throw new Exception("Can not find id");

            var invoice = _db.Invoices.Find(id);
            _db.Invoices.Remove(invoice);
            _db.SaveChanges();
            
            return Json("Successful deleted");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}