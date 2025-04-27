import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.page.html',
  styleUrls: ['./destinations.page.scss'],
  standalone:false,
})
export class DestinationsPage {
  destinations: string[] = [
    'Tunis', 'Sousse', 'Monastir', 'Aiin-draham', 'Bizerte',
    'Djerba', 'El-jem', 'Hammamet', 'Kairouan', 'Korbous',
    'Mahdia', 'Matmata', 'Nabeul', 'Tabarka', 'Tozeur'
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDestination(destination: string) {
    this.router.navigate(['/destination-details', destination]);
  }
}