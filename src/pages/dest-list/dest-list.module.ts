import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DestListPage } from './dest-list';

@NgModule({
  declarations: [
    DestListPage,
  ],
  imports: [
    IonicPageModule.forChild(DestListPage),
  ],
})
export class DestListPageModule {}
