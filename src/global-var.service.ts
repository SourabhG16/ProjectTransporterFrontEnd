import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {
  public Stations:any=[];
  public StationsReq:any=[];
  public Avail_cycles=0;
  public statNo:any;
  constructor() { }
}
