import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, timeout } from 'rxjs/operators';

@Injectable()
export class DashboardService {
    
    constructor(public http: HttpClient) {
        
    }
    DOMAIN_URL: string = "https://reqres.in/";
    GetUsers(): Observable<any> {
        return this.http.get(this.DOMAIN_URL + "api/users");
    }

}