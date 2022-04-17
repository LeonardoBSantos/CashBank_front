import { RegisterModel } from './../models/register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'https://localhost:44345/api/Client/Create';
  private registersList: any[];

  constructor(private httpClient: HttpClient) {
    this.registersList = [];
  }

  ClientRegisterService(registerModel:RegisterModel) : Observable<RegisterModel>{
    console.log("p1 - service")
    return this.httpClient.post<RegisterModel>(this.url, registerModel);
  }

}




