import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

const headerData={headers:{"Content-Type": "application/json"}}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api:string = 'api/users/';
  constructor(private httpclient:HttpClient) {  }

  register(register:Register):Observable<any> {


    return this.httpclient.post(this.api+'register',register,headerData);
  }

  login(email:string,password:string):Observable<any> {
 

    return this.httpclient.post(this.api+'login',{email,password},headerData)
  }
}
