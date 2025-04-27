import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'destinations',
    pathMatch: 'full'
  },
  {
    path: 'destinations',
    loadChildren: () => import('./destinations/destinations.module').then(m => m.DestinationsPageModule)
  },
  {
    path: 'destination-details', 
    loadChildren: () => import('./destination-details/destination-details.module').then(m => m.DestinationDetailsPageModule)
  },

  {
    path: 'category-detail/:destination/:category',
    loadChildren: () => import('./category-detail/category-detail.module').then(m => m.CategoryDetailPageModule)
  },
  {
    path: 'category-detail',
    loadChildren: () => import('./category-detail/category-detail.module').then( m => m.CategoryDetailPageModule)
  },
  {
    path: 'place-details',
    loadChildren: () => import('./place-details/place-details.module').then( m => m.PlaceDetailsPageModule)
  },
  {
    path: 'place-details/:destination/:category/:placeName',
    loadChildren: () => import('./place-details/place-details.module').then(m => m.PlaceDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
