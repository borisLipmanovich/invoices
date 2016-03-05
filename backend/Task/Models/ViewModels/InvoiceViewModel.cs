using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Task.Models.ViewModels
{
    public class InvoiceViewModel
    {
        public long Id { get; set; }
        public string Number { get; set; }
        public List<Field> Fields { get; set; }
        public long CompanyId { get; set; }
        public string CompanyName { get; set; }
        public Nullable<double> TotalSum { get; set; }
        public Nullable<double> TotalTaxSum { get; set; }
        public string Date { get; set; }

        public class Field
        {
            public string Name { get; set; }
            public string Hours { get; set; }
            public string Price { get; set; }
            public string Comment { get; set; }
            public double Total { get; set; }
        }
    }
}