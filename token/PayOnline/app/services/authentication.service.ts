import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    public accountNumber: string;
    constructor(private http: Http) { }

    login(accountNumber: string, email: string,password: string,baseAddress: string)
     {
    
         var data = "userName=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password) + "&Scope=" + encodeURIComponent(accountNumber) + "&grant_type=password";
         //   var data = "grant_type=password&username=" + email + "&password=" + password;
                var headers = new Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
       

        return this.http.post(baseAddress, data,{headers: headers})
           // ...and calling .json() on the response to return data
            .map((response: Response) => {
            
                // login successful if there's a jwt token in the response
                let user = response.json();
                 let token = user.access_token;
                if (token) 
                {
                    this.accountNumber = accountNumber;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('Token',token);
                }

                if (response.status === 201) 
                {
                            return [{ status: response.status, user: user }]
                }
                 else if (response.status === 200)
                 {
                            return [{ status: response.status, juser: user }]
                
                  }
                
            })
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

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('Token');
        this.accountNumber =null;
    }
}