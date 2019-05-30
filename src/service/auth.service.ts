// import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Storage } from '@ionic/storage';

import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {  GlobalVarService} from "../global-var.service";
const TOKEN_KEY = 'access_token';

@Injectable()
export class AuthService {

  // url = environment.url;
 
  constructor(private http: HttpClient,private GlobalVarService:GlobalVarService) {
    }

  
    loadStations(spce){
    // var errrr= this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.aws.com:80/api/first/login', credentials).pipe(
    
    // catchError(e => {
    //     this.showAlert(e.error.msg);
    //     throw new Error(e);
    //   })
    // );
    // console.log(errrr)
    console.log("spaces:",spce)
    this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/pickk', 
    { 
      avai_cycle:spce
    }, 
    {
      headers: { 'Content-Type': 'application/json' }
    })
    .toPromise().then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error.status);
    });
  }

 
  
}

    // return this.http.post('http://localhost:3000/api/first/pickk',data)
    // .pipe(
    //   // tap(res => {
    //   //       this.global_var.Stations=res['args'];
    //   //         console.log("res is"+res['args']);
    //   //         }),
    //   catchError(e => {
    //     console.log(e);
    //     throw new Error(e);
    //   })
    // );
     
  
