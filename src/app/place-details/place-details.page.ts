import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PlaceDetails } from './place-details.model';  // Import the PlaceDetails model

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
  standalone: false,
})
export class PlaceDetailsPage implements OnInit {
  placeDetails: PlaceDetails = {} as PlaceDetails;  // Initialize with an empty object of type PlaceDetails

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const navigation = history.state.placeDetails;
    
    if (navigation) {
      this.placeDetails = navigation;
      console.log('Place Details:', this.placeDetails);  
    } else {
      console.error('No data received from previous page');
    }
  }

  goBack(): void {
    this.navCtrl.back();
  }
}
