using System.Web.Mvc;
using System.Web.Http.Cors;

namespace Task.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public JsonResult Index()
        {
            var baseUrl = Request.Url.Scheme + "://" + Request.Url.Authority + Request.ApplicationPath.TrimEnd('/') + "/";
            return Json(new[]{
              new { href = baseUrl + "Invoices"}
            }, JsonRequestBehavior.AllowGet);
        }
    }
}