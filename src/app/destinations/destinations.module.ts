import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DestinationsPageRoutingModule } from './destinations-routing.module';
import { DestinationsPage } from './destinations.page';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProfileComponent,
    DestinationsPageRoutingModule
  ],
  declarations: [DestinationsPage],
})
export class DestinationsPageModule {}
