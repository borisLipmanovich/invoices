using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Task.Models
{
    public class AllowCrossSiteJsonAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var response = filterContext.RequestContext.HttpContext.Response;

            response.AddHeader("Access-Control-Allow-Origin", "*");
            response.AppendHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            response.AppendHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");

            base.OnActionExecuting(filterContext);
        }
    }
}