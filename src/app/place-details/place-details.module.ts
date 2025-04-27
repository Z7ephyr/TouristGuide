import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Make sure this is imported
import { PlaceDetailsPageRoutingModule } from './place-details-routing.module';
import { PlaceDetailsPage } from './place-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    PlaceDetailsPageRoutingModule,
  ],
  declarations: [PlaceDetailsPage]
})
export class PlaceDetailsPageModule {}