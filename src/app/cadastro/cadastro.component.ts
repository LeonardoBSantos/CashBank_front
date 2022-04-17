import { RegisterServiceService } from './../services/RegisterService.service';
import { RegisterModel } from './../models/register.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {

  constructor(private service: RegisterServiceService){

  }

  name: string = 'Ex: Leonardo';
  lastName: string = 'Ex: Santos';
  email: string = 'Ex: leonardo.santos@gmail.com';
  phone: string = 'Ex: 11975632245';
  adress: string = 'Ex: Rua Borath Azevedo, 177. Perdizes, SP';

  register(){
    console.log("p1 - component")
    const model: RegisterModel = {"clientName": this.name,"lastName": this.lastName,"email": this.email,"phone": this.phone,"address": this.adress};
    console.log("model");
    this.service.ClientRegisterService(model).subscribe(
      (resultado) => {
        console.log(resultado);
      },
      (error) => console.log(error)
    )
  }




  // register(){
  //   console.log('executando');
  //   console.log(this.fieldName )
  //   console.log(this.fieldLastName)
  //   console.log(this.fieldEmail)
  //   console.log(this.fieldPhone)
  //   console.log(this.fieldAdress)
  // }



}
