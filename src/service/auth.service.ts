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
      console.log(data[0])
      var length=Object.keys(data).length
      this.GlobalVarService.statNo=(length/2);
      for(var i=0;i<length/2;i++)
      {
        this.GlobalVarService.Stations.push(data[i]);
      }
      for(var j=i;j<length;j++)
      {
        this.GlobalVarService.StationsReq.push(data[j]);
      }
      /*var obj=JSON.stringify(data[0]);
      var find = "'";
var re = new RegExp(find, 'g');
obj = obj.replace(re, '"');
      console.log(obj);
      var stat=JSON.parse(obj);
      console.log(stat);
      for(var a=0;a<data[0].length;a++)
      {
        
      }*/
    }).catch(error => {
      console.log(error);
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
     