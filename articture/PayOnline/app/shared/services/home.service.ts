import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService
 {
     
    constructor(private http: Http) { }

     Get(accountNumber: number,baseAddress : string)
     {     
       // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('Token')});
         var  url = baseAddress + "/Home/GETDetail/" + accountNumber;
        return this.http.get(url,{headers:headers})
           // ...and calling .json() on the response to return data
            .map((response: Response) => response.json())
            //...errors if any
            .catch((error: any) => {
               
                    if (error.status === 500) {
                        return Observable.throw(new Error(error.status));
                    }
                    else if (error.status === 400) {
                        return Observable.throw(new Error(error.status));
                    }
                    else if (error.status === 409) {
                        return Observable.throw(new Error(error.status));
                    }
                    else if (error.status === 406) {
                        return Observable.throw(new Error(error.status));
                    }
                });
        
                 
    }

   
}