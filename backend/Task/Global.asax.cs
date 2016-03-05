using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Task.Models;

namespace Task
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        protected void Application_BeginRequest()
        {
            if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
            {
                Response.AddHeader("Access-Control-Allow-Origin", "*");
                Response.AppendHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
                Response.AppendHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
                Response.Flush();
            }
        }

    }
}
