import { RegisterServiceService } from './../services/RegisterService.service';
import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

  clientData: any;
  constructor(private service: RegisterServiceService) { }

  ngOnInit(): void {
    this.service.GetClientDataService().subscribe((registerModel: RegisterModel) => {
      console.table(registerModel);
      this.clientData = registerModel;
    })
  }

}
