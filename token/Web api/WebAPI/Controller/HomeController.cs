using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Model;

namespace WebAPI.Controller
{
   [Authorize]
    [RoutePrefix("api/Home")]
    public class HomeController : ApiController
    {
        
        mvc5Entities db;

        [HttpGet]
        [Route("GETDetail/{AccountNumber:int}")]
        public IHttpActionResult GETDetail(int AccountNumber)
        {
            db = new mvc5Entities();
            return Ok(db.angcontrs);
        }

        [HttpPost]
        [Route("SaveDetail")]
        public HttpResponseMessage SaveDetail(Customer cardInfo)
        {
            string message = string.Empty;
            if (string.IsNullOrWhiteSpace(cardInfo.Email) || string.IsNullOrWhiteSpace(cardInfo.FatherName) || string.IsNullOrWhiteSpace(cardInfo.FirstName) || string.IsNullOrWhiteSpace(cardInfo.Gender) || string.IsNullOrWhiteSpace(cardInfo.LastNmme)
                || string.IsNullOrWhiteSpace(cardInfo.MidName) || string.IsNullOrWhiteSpace(cardInfo.SecurityQuestion) || string.IsNullOrWhiteSpace(cardInfo.Email) )
             {
                message = string.Format("The request is invalid");
                // Error message send
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, message);
            }
            else
            {
                using (db = new mvc5Entities())
                {
                    angcontr Emp = new angcontr();
                    Emp.ID = cardInfo.Id;
                    Emp.FirstName = cardInfo.FirstName;
                    Emp.MidName = cardInfo.MidName;
                    Emp.LastNmme = cardInfo.LastNmme;
                    Emp.FatherName = cardInfo.FatherName;
                    Emp.Email = cardInfo.Email;
                    Emp.Gender = cardInfo.Gender;
                    Emp.SecurityQuestion = cardInfo.SecurityQuestion;
                    Emp.checkboxTermsConditions = cardInfo.checkboxTermsConditions;
                    db.angcontrs.Add(Emp);
                    db.SaveChanges();
                }
                message = "successfull";
                return Request.CreateResponse(HttpStatusCode.OK, message);
            }
        
        }
    }
}
