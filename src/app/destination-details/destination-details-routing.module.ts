import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDetailsPage } from './destination-details.page';

const routes: Routes = [
  { path: ':destination', component: DestinationDetailsPage } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationDetailsPageRoutingModule {}
