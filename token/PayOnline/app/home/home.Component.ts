import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService,ProviderService,AuthenticationService  } from '../services/index';
import { Customer } from '../model/customer';
import { AppComponent} from '../app.component';

@Component({
    moduleId: module.id,
    selector: 'home-app',
    templateUrl: 'home.component.html',
    inputs : [`parentData`],
//outputs: ['childData : outgoingData'],
   // styles :[`.redBorder{  border: 1px solid red}`],
})

export class HomeComponent
{
    public parentData :string;
   @Output() notify =new EventEmitter<string>();
  // @Input() reviews: string;
    
     products : any[]
  //  products : any = {};
    dataArrayGrid : any = []; 
    loading = false;  
     IdError :string=''; 
     FirstNameError: String ='';
     MidNameError: String ='';
     LastNmmeError:String ='';
     FatherNameError: String ='';
     EmailError: String ='';
     GenderError :string = '';
     SecurityQuestionError: string ='';
     checkboxTermsConditionsError: string =''; 
    loadingCounter : number = 0;
    baseAddress :string = '';
   // user: Object = {};
  // @Input() FirstName : string ='';
    customerObj: Customer =new Customer(); 

       private list = [
        { value: 1, SecurityQuestions: 'In what city were you born?' },
         { value: 2, SecurityQuestions: 'What is the name of your favorite pet?' },
         { value: 3, SecurityQuestions: 'What is your mother first name?' },
    ];

      Items : any = function ()
      {
        this.ID = '';
        this.FirstName = '';
        this.MidName = '';
        this.LastNmme = '';
        this.FatherName = '';
        this.Email = '';
        this.Gender ='';
        this.SecurityQuestion ='';
        this.checkboxTermsConditions
        this.counter ;
        this.Selected = false;
    };

   constructor(private router: Router,private providerService :ProviderService,private homeService :HomeService,private authenticationService :AuthenticationService) 
    {
        if(this.authenticationService.accountNumber === undefined || this.authenticationService.accountNumber === null || this.authenticationService.accountNumber === '')
        {        
            this.router.navigate(['/login']);
            return;
        }
        this.getData();
    };
     Save()
   {
       debugger;
       if (this.MainValidation() == true)
    {
        this.increaseLoadingCounter();
//        this.model.AccountNumber ='';
       // model.username ='';
      
     this.homeService.save(this.customerObj,this.providerService.getBaseAddress())
            .subscribe(result => {
               this.decreaseLoadingCounter();
               this.getData() ;
            },
            error => {                   
                    this.decreaseLoadingCounter();
                     
                });;
       }
       
    };
  
     increaseLoadingCounter():void
     {
        if (this.loadingCounter === 0)
        {
           this.loading = true;
        }
           
        this.loadingCounter++;
    }
     decreaseLoadingCounter() :void
    {
        if (this.loadingCounter > 0) {
            this.loadingCounter--;
            if (this.loadingCounter === 0)
            {
              this.loading = false;
            }
                
        }
    }


    getData() 
    {
        this.increaseLoadingCounter();
     
        this.homeService.Get(311676,this.providerService.getBaseAddress())
            .subscribe(result => {
                // this.products  = result
                this.dataArrayGrid = [];
                 if (result.length > 0) 
                 {
                     for (var counter = 0; counter < result.length; counter++) 
                     {
                       var item = new this.Items();
                       item.ID = result[counter].ID;
                       item.FirstName = result[counter].FirstName;
                       item.MidName = result[counter].MidName;
                       item.LastNmme = result[counter].LastNmme;
                       item.FatherName = result[counter].FatherName;
                       item.Email = result[counter].Email;
                        item.Gender = result[counter].Gender;
                         item.SecurityQuestion = result[counter].SecurityQuestion;
                          item.checkboxTermsConditions = result[counter].checkboxTermsConditions;
                       item.counter = counter;
                       this.dataArrayGrid.push(item);
                     }
                      this.products  = this.dataArrayGrid;
                 }
                  this.decreaseLoadingCounter();
            },
            error => {                   
                    this.decreaseLoadingCounter();
                });;
    };
 

     MainValidation() :boolean
    {
    var returnValue = true;
    if (this.customerObj.ID <=0 || this.customerObj.ID ==undefined || this.customerObj.ID == null) { this.IdError = "Please Enter ID"; returnValue = false; }
    if (this.customerObj.FirstName =='' || this.customerObj.FirstName == undefined ) { this.FirstNameError= "Please Enter FirstName"; returnValue = false; }
    if (this.customerObj.LastNmme =='' || this.customerObj.LastNmme == undefined ) { this.LastNmmeError = "Please Enter LastNmme"; returnValue = false; }
    if (this.customerObj.MidName =='' || this.customerObj.MidName == undefined ) { this.MidNameError = "Please Enter MidName";  returnValue = false; }
    if (this.customerObj.FatherName =='' || this.customerObj.FatherName == undefined ) { this.FatherNameError = "Please Enter FatherName"; returnValue = false; }
    if (this.customerObj.Email =='' || this.customerObj.Email == undefined ) { this.EmailError = "Please Enter Email"; returnValue = false; }
    if (this.customerObj.SecurityQuestion =='' || this.customerObj.SecurityQuestion == undefined ) { this.SecurityQuestionError = "Please select SecurityQuestion"; returnValue = false; }
     return returnValue;

    };
    onClick():void
    {
        debugger;
  
        
        this.notify.emit("akul singh");
       // var s = new AppComponent();
        //  s.onNotifyClickd("akul singh");
    }

}