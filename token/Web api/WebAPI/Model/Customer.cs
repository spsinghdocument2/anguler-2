using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Model
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MidName { get; set; }
        public string LastNmme { get; set; }
        public string FatherName { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string SecurityQuestion { get; set; }
        public bool checkboxTermsConditions { get; set; }

  
    }
}