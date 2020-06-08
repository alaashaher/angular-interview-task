import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, timeout } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    
    constructor(public http: HttpClient) {
        
    }
    DOMAIN_URL: string = "https://reqres.in/";
    userLogin(email, password): Observable<any> {
        return this.http.post(this.DOMAIN_URL + "api/login" , {email: email, password: password});
    }

}