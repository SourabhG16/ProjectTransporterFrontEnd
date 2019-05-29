//import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import {GlobalVarService} from '../global-var.service';
@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {
  Url = environment.url;
  constructor(private http: HttpClient,public global_var: GlobalVarService) {

  }
  
loadStations(data) {
    return this.http.post('http://ec2-52-66-169-149.ap-south-1.compute.amazonaws.com:80/api/first/pickk',data)
    .pipe(
      tap(res => {
            this.global_var.Stations=res['args'];
              console.log("res is"+res['args']);
              }),
      catchError(e => {
        console.log(e);
        throw new Error(e);
      })
    ); 
  }
}
