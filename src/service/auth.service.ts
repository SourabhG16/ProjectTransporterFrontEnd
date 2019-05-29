import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'access_token';
import {GlobalVarService} from '../global-var.service';
@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient,public global_var: GlobalVarService) {
    
  }

  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials)      
  }

  
}
