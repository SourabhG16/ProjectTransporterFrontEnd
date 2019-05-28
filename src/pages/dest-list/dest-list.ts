import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

/**
 * Generated class for the DestListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dest-list',
  templateUrl: 'dest-list.html',
})
export class DestListPage {
  stations:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtl:ViewController) {
    this.stations=[
      'kondhwa',
      'aundh'
  ]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DestListPage');
   
  }
  closeModal()
  {
    this.modalCtl.dismiss();
  }
  done(a:any)
  {
    
  }
}
