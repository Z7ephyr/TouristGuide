import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DestinationDetailsPageRoutingModule } from './destination-details-routing.module';
import { DestinationDetailsPage } from './destination-details.page';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinationDetailsPageRoutingModule,
    ProfileComponent
  ],
  declarations: [DestinationDetailsPage]
})
export class DestinationDetailsPageModule {
  constructor() {
    console.log('DestinationDetailsPageModule loaded'); 
  }
}
