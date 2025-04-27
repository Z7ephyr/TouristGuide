import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.page.html',
  styleUrls: ['./destination-details.page.scss'],
  standalone:false,
})
export class DestinationDetailsPage implements OnInit, OnDestroy {
  destinationName: string = 'Unknown Destination';
  categories = [
    { name: 'Restaurants', image: 'Restaurants' },
    { name: 'Bars', image: 'Bars' },
    { name: 'Beaches', image: 'Beaches' },
    { name: 'Hotels', image: 'Hotels' },
    { name: 'Travel agencies', image: 'Travel_agencies' },
    { name: 'Guides', image: 'Guides' },
    { name: 'Museums', image: 'Museums' },
    { name: 'Historical monuments', image: 'Historical_monuments' }
  ];

  private routeSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const destination = params.get('destination');
      if (destination) {
        this.destinationName = destination;
      }
    });
  }

  goBack(): void {
    this.navCtrl.back();
  }

  goToCategory(category: any): void {
    console.log(`Navigating to category: ${category.name}`);
    this.navCtrl.navigateForward(`/category-detail/${this.destinationName}/${category.name}`);
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
