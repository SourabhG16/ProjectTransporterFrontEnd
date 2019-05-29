import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {
  public Stations:any=["viman nagar","koregaon Park"];
  public Avail_cycles=0;
  constructor() { }
}
