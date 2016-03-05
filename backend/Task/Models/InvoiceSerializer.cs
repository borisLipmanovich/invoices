using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using Task.Models.ViewModels;

namespace Task.Models
{
    public class InvoiceSerializer
    {
        public static List<InvoiceViewModel.Field> DeserializeFields(string json)
        {
            var serializer = new JavaScriptSerializer();
            return serializer.Deserialize<List<InvoiceViewModel.Field>>(json);
        }
        public static string SerializeFields(List<InvoiceViewModel.Field> fields)
        {
            var serializer = new JavaScriptSerializer();
            return serializer.Serialize(fields);
        }
    }
}