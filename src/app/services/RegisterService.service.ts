import { RegisterModel } from './../models/register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'https://localhost:44345/api/Client/Create';
  private GetUrl = 'https://localhost:44345/api/Client?id=3622EF13-EF8C-4C94-C309-08DA56E9B627';
  private registersList: any[];

  constructor(private httpClient: HttpClient) {
    this.registersList = [];
  }

  GetClientDataService() : Observable<RegisterModel>{
    console.log("p1 - service")
    return this.httpClient.get<RegisterModel>(this.GetUrl);
  }

  ClientRegisterService(registerModel:RegisterModel) : Observable<RegisterModel>{
    console.log("p1 - service")
    return this.httpClient.post<RegisterModel>(this.url, registerModel);
  }

}




