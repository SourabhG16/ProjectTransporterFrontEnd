import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { GlobalVarService } from "../../global-var.service";
import { AuthService } from "../../service/auth.service";
/**
 * Generated class for the DestListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-dest-list',
  templateUrl: 'dest-list.html',
})
export class DestListPage {
  stations:any;
  stationReq:any;
  merge:any[];
  count:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtl:ViewController,public global_var: GlobalVarService,public AuthService:AuthService) {
    this.stations=this.global_var.Stations;
    this.stationReq=this.global_var.StationsReq;
    this.merge=this.global_var.Stations.concat(this.global_var.StationsReq);
    this.count=this.global_var.statNo;
    console.log(this.merge);
    console.log(this.global_var.statNo);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DestListPage'+this.global_var.Stations);
  }
  closeModal()
  {
    this.modalCtl.dismiss();
  }
  Done(i:any)
  {
    delete this.global_var.Stations[i];
    //this.global_var.StationCount=this.global_var.Stations.length;
    console.log(this.global_var.Stations);
  }
}
