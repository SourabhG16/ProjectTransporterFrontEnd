import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { GlobalVarService } from "../../global-var.service";
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtl:ViewController,public global_var: GlobalVarService) {
    this.stations=this.global_var.Stations;
    //this.global_var.Stations.push("Aundh","Kondhwa")
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
