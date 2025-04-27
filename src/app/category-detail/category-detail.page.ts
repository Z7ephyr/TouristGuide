import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { placeDetailsMap } from '../place-details/place-details.model';


interface CategoryDetail {
  name: string;
  address?: string;
  rating?: number;
  image: string;
  phoneNumber?: string;
}

interface DestinationData {
  [category: string]: CategoryDetail[];
}

interface Data {
  [destination: string]: DestinationData;
}

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
  standalone: false,
})
export class CategoryDetailPage implements OnInit {
  destination: string = '';
  category: string = '';
  categoryItems: CategoryDetail[] = []; 

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.destination = params.get('destination') || '';
      this.category = params.get('category') || '';
      this.fetchCategoryDetails(); 
    });
  }


  goBack(): void {
    this.navCtrl.back();
  }
  goToPlaceDetails(item: any): void {
    const placeDetails = placeDetailsMap[item.name];
  
    if (placeDetails) {
      this.navCtrl.navigateForward('/place-details', {
        state: { placeDetails }
      });
    } else {
      console.warn('No PlaceDetails found for:', item.name);
    }
  }
  


  fetchCategoryDetails() {
   
    const mockData: Data = {
    'Tunis': {
      'Restaurants': [
        {
          name: 'Dar El Jeld',
          address: '5 – 10 Rue Dar El Jeld, Tunis 1006 Tunisie',
          rating: 4.4,
          image: 'dareljeld.jpg',
          phoneNumber: '+216 70 016 190',
        },
        {
          name: 'Saray Turkish Cuisine',
          address: 'Avenue Hédi Chaker 91 A cote de l\'Avenue Mohamed V, Tunis 1002 Tunisie',
          rating: 5,
          image: 'saray.jpg',
          phoneNumber: '+216 26 264 616',
        },
        {
          name: 'El Ali',
          address: '45 bis rue Jemaâ Zitouna la Médina, Tunis 1006 Tunisie',
          rating: 4.4,
          image: 'ali.jpg',
          phoneNumber: '+216 23 811 511',
        },
        {
          name: 'Fondouk El Attarine',
          address: '9 Bis Souk El Attarine, Tunis Tunisie',
          rating: 4.2,
          image: 'attarine.jpg',
          phoneNumber: '+216 71 322 244',
        },
        {
          name: 'El Walima',
          address: '35 Rue Du Liban, Tunis 1002 Tunisie',
          rating: 4.4,
          image: 'walima.jpg',
          phoneNumber: '+216 71 840 309',
        },
        {
          name: 'Restaurant Dar Slah',
          address: '145, Rue de la Kasbah, Tunis 1006 Tunisie',
          rating: 4.4,
          image: 'slah.jpg',
          phoneNumber: '+216 71 261 026',
        },
      ],
      'Bars': [
        {
          name: 'Le Taboo',
          address: '8, rue Cote d\'Ivoire, Belvédère, Tunis 1002',
          rating: 4.3,
          image: 'taboo.jpg',
          phoneNumber: '50 006 020',
        },
        {
          name: 'Bellini City Bar Lounge',
          address: 'Les jardins de l’hôtel Golden Tulip El Mechtel, Avenue Ouled Hafouz Tunis, Tunisie, 1005',
          rating: 3.2,
          image: 'belini.jpg',
          phoneNumber: '51 770 000',
        },
        {
          name: 'Le Muret De Tunis',
          address: '6 Av. Jugurtha, Tunis',
          rating: 3.5,
          image: 'muret.jpg',
          phoneNumber: '50 144 000',
        },
        {
          name: 'Le Carpe Diem',
          address: 'Route de Gammarth, La Marsa 2070',
          rating: 3.6,
          image: 'diem.jpg',
          phoneNumber: '27 330 001',
        },
        {
          name: 'Maison Bleue',
          address: '141 Av. de La Liberté, Tunis 1002',
          rating: 4.2,
          image: 'blue.jpg',
          phoneNumber: '54 332 080',
        },
      ],
      'Beaches': [
        {
          name: 'La Marsa plage',
          rating: 4.1,
          image: 'marsa.jpg',
        },
      ],
      'Hotels': [
        {
          name: 'Ambassadeurs Hôtel',
          address: '75 Av. Taieb M\'Hiri, Tunis 1002',
          rating: 3.3,
          phoneNumber: '70 248 880',
          image: 'ambassadeur.jpg',
        },
        {
          name: 'DownTown Tunis Hotel',
          address: '13 Rue de Medine, Tunis 1002',
          rating: 4.2,
          phoneNumber: '71 790 216',
          image: 'downtown.jpg',
        },
        {
          name: 'Hôtel Le Diplomat',
          address: '44 Av. Hédi Chaker, Tunis 1002',
          rating: 3.3,
          phoneNumber: '71 785 233',
          image: 'diplomat.jpg',
        },
        {
          name: 'Hôtel Le Parisien Tunisie',
          address: '25 Av. de Madrid, Tunis 1075',
          rating: 4.6,
          phoneNumber: '27 225 229',
          image: 'parisien.jpg',
        },
        {
          name: 'Nomads Hostel Tunisia',
          address: '10 Rue Ali Al Gherab, Al Gherab 1089',
          rating: 4.6,
          phoneNumber: '92 023 033',
          image: 'nomads.jpg',
        },
      ],
      'Travel agencies': [
        {
          name: 'Traveltodo',
          address: '2 éme étage, centre Commercial " Claridge Makni ", Ave Habib Bourguiba, Tunis 1000',
          rating: 4.1,
          phoneNumber: '70 103 103',
          image: 'traveltodo.jpg',
        },
        {
          name: 'El Mansour Travel & Tours',
          address: '97 Av. de La Liberté, Tunis',
          rating: 5,
          phoneNumber: '71 791 023',
          image: 'mansour.jpg',
        },
        {
          name: 'Tunisiebooking',
          address: 'en face du parking, Mosquée Sobh, Avenue Hedi Karray, Ariana 1003',
          rating: 3.4,
          phoneNumber: '71 124 101',
          image: 'tunisiebooking.jpg',
        },
      ],
      'Guides': [
        {
          name: 'Taha B.',
          phoneNumber: '94124749',
          rating: 5,
          image: 'taha.jpg',
        },
        {
          name: 'Saber A.',
          phoneNumber: '22147964',
          rating: 5,
          image: 'saber.jpg',
        },
      ],
      'Museums': [
        {
          name: 'Musée national du Bardo',
          address: 'RN 7, Tunis',
          rating: 4.5,
          image: 'bardo.jpg',
        },
        {
          name: 'Musée océanographique Dar El Hout',
          address: 'Salammbo',
          rating: 4,
          image: 'hout.jpg',
        },
      ],
      'Historical monuments': [
        {
          name: 'Tunis Clock Tower',
          address: 'R52P+3HV, Av. Habib Bourguiba, Tunis',
          image: 'clock.jpg',
        },
        {
          name: 'Place de la Kasbah',
          address: 'Q5X8+3MQ, Tunis',
          image: 'kasbah.jpg',
        }
    ]
  },
        'Sousse': {
          'Restaurants': [
            {
              name: 'Restaurant Le QG',
              address: 'Rue Hedi Chaker, Sousse',
              rating: 4.4,
              image: 'leqg.jpg',
              phoneNumber: '+216 73 224 553',
            },
            {
              name: 'Escargot',
              address: 'Ave Hedi Chaker, Sousse',
              rating: 4.3,
              image: 'escargot.jpg',
              phoneNumber: '+216 73 225 445',
            },
            {
              name: 'Caruso Cafe',
              address: 'Boulevard 14 Janvier, Sousse',
              rating: 4.2,
              image: 'caruso.jpg',
              phoneNumber: '+216 29 001 122',
            },
            {
              name: 'La Marmite',
              address: 'Route Touristique, Sousse',
              rating: 4.5,
              image: 'marmite.jpg',
              phoneNumber: '+216 73 239 040',
            },
            {
              name: 'The Saloon',
              address: 'Zone Touristique, Sousse',
              rating: 4.1,
              image: 'saloon.jpg',
              phoneNumber: '+216 98 234 555',
            },
          ],
          'Bars': [
            {
              name: 'Jobi Sousse',
              address: 'Avenue Taïeb Mhiri, Sousse',
              rating: 4.1,
              image: 'jobi.jpg',
              phoneNumber: '+216 97 551 115',
            },
            {
              name: 'Bora Bora Club',
              address: 'Boujaafar Beach, Sousse',
              rating: 3.9,
              image: 'bora.jpg',
              phoneNumber: '+216 94 552 112',
            },
            {
              name: 'Living Sousse',
              address: 'Route Touristique, Sousse',
              rating: 4.2,
              image: 'living.jpg',
              phoneNumber: '+216 98 301 235',
            },
          ],
          'Beaches': [
            {
              name: 'Boujaafar Beach',
              rating: 4.3,
              image: 'boujaafar.jpg',
            },
            {
              name: 'Port El Kantaoui Beach',
              rating: 4.5,
              image: 'kantaoui.jpg',
            },
          ],
          'Hotels': [
            {
              name: 'Mövenpick Resort & Marine Spa Sousse',
              address: 'Boulevard du 14 Janvier, Sousse 4031',
              rating: 4.4,
              phoneNumber: '+216 73 202 000',
              image: 'moevenpick.jpg',
            },
            {
              name: 'Sousse Palace Hotel & Spa',
              address: '30 Av. Hedi Chaker, Sousse',
              rating: 4.2,
              phoneNumber: '+216 73 210 011',
              image: 'soussepalace.jpg',
            },
            {
              name: 'Hotel Marhaba Royal Salem',
              address: 'Boulevard 14 Janvier, Sousse',
              rating: 4.3,
              phoneNumber: '+216 73 227 911',
              image: 'royalsalem.jpg',
            },
          ],
          'Travel agencies': [
            {
              name: 'Sahara Travel',
              address: 'Rue Hedi Chaker, Sousse',
              rating: 4.0,
              phoneNumber: '+216 73 222 222',
              image: 'sahara.jpg',
            },
            {
              name: 'Kantaoui Voyages',
              address: 'Port El Kantaoui, Sousse',
              rating: 4.1,
              phoneNumber: '+216 73 348 100',
              image: 'kantaoui.jpg',
            },
          ],
          'Guides': [
            {
              name: 'Aymen H.',
              phoneNumber: '98551223',
              rating: 4.8,
              image: 'aymen.jpg',
            },
            {
              name: 'Fatma Z.',
              phoneNumber: '27443312',
              rating: 5.0,
              image: 'fatma.jpg',
            },
          ],
          'Museums': [
            {
              name: 'Sousse Archaeological Museum',
              address: 'Kasbah, Sousse',
              rating: 4.6,
              image: 'archaeo_sousse.jpg',
            },
          ],
          'Historical monuments': [
            {
              name: 'Ribat of Sousse',
              address: 'Place des Martyrs, Sousse',
              image: 'ribat_sousse.jpg',
            },
            {
              name: 'Medina of Sousse',
              address: 'Sousse city center',
              image: 'medina_sousse.jpg',
            },
          ],
        },
        'Monastir': {
          'Restaurants': [
            {
              name: 'Restaurant Le Pirate',
              address: 'Port de Pêche, Monastir 5000, Tunisia',
              rating: 4.2,
              image: 'le_pirate.jpg',
              phoneNumber: '+216 73 460 000',
            },
            {
              name: 'Marina the Captain',
              address: 'Marina Monastir, Monastir 5000, Tunisia',
              rating: 4.3,
              image: 'marina_captain.jpg',
              phoneNumber: '+216 73 461 111',
            },
            {
              name: 'Soprano',
              address: 'Rue de l\'Environnement, Monastir 5000, Tunisia',
              rating: 4.5,
              image: 'soprano.jpg',
              phoneNumber: '+216 73 462 222',
            },
            {
              name: 'Dar Chraka',
              address: 'Avenue Habib Bourguiba, Monastir 5000, Tunisia',
              rating: 4.4,
              image: 'dar_chraka.jpg',
              phoneNumber: '+216 73 463 333',
            },
            {
              name: 'Da Piero',
              address: 'Rue de la République, Monastir 5000, Tunisia',
              rating: 4.6,
              image: 'da_piero.jpg',
              phoneNumber: '+216 73 464 444',
            },
          ],
          'Bars': [
            {
              name: 'Redmoon Lounge',
              address: 'Avenue de la Corniche, Monastir 5000, Tunisia',
              rating: 4.0,
              image: 'redmoon.jpg',
              phoneNumber: '+216 73 465 555',
            },
            {
              name: 'Le Gourmet',
              address: 'Rue de l\'Indépendance, Monastir 5000, Tunisia',
              rating: 3.7,
              image: 'le_gourmet.jpg',
              phoneNumber: '+216 73 466 666',
            },
            {
              name: 'Bar 51',
              address: 'Sahara Beach Aquapark Resort, Skanes, Monastir 5000, Tunisia',
              rating: 4.2,
              image: 'bar_51.jpg',
              phoneNumber: '+216 73 467 777',
            },
            {
              name: 'Tropical Bar',
              address: 'Monastir Center Hotel, Monastir 5000, Tunisia',
              rating: 4.1,
              image: 'tropical_bar.jpg',
              phoneNumber: '+216 73 468 888',
            },
          ],
          'Beaches': [
            {
              name: 'Skanes Monastir Public Beach',
              rating: 4.3,
              image: 'skanes_beach.jpg',
            },
            {
              name: 'Qaraiya Beach',
              rating: 4.0,
              image: 'qaraiya_beach.jpg',
            },
            {
              name: 'Plage la Falaise',
              rating: 4.2,
              image: 'falaise_beach.jpg',
            },
          ],
          'Hotels': [
            {
              name: 'Iberostar Selection Kuriat Palace',
              address: 'Zone Touristique Skanes, Monastir 5000, Tunisia',
              rating: 4.5,
              phoneNumber: '+216 73 469 999',
              image: 'kuriat_palace.jpg',
            },
            {
              name: 'Hilton Skanes Monastir Beach Resort',
              address: 'Route Touristique Skanes, Monastir 5000, Tunisia',
              rating: 4.6,
              phoneNumber: '+216 73 470 000',
              image: 'hilton_skanes.jpg',
            },
            {
              name: 'Sahara Beach Aquapark Resort',
              address: 'Route Touristique Skanes, Monastir 5000, Tunisia',
              rating: 4.4,
              phoneNumber: '+216 73 471 111',
              image: 'sahara_beach.jpg',
            },
            {
              name: 'Hotel Liberty Resort',
              address: 'Zone Touristique Skanes, Monastir 5000, Tunisia',
              rating: 4.2,
              phoneNumber: '+216 73 472 222',
              image: 'liberty_resort.jpg',
            },
            {
              name: 'Amir Palace',
              address: 'Route Touristique Skanes, Monastir 5000, Tunisia',
              rating: 4.0,
              phoneNumber: '+216 73 473 333',
              image: 'amir_palace.jpg',
            },
          ],
          'Travel agencies': [
            {
              name: 'Travelotunisia',
              address: 'Avenue de la République, Monastir 5000, Tunisia',
              rating: 4.5,
              phoneNumber: '+216 73 474 444',
              image: 'travelotunisia.jpg',
            },
            {
              name: 'All Tours',
              address: 'Monastir Habib Bourguiba Airport, Monastir 5000, Tunisia',
              rating: 4.3,
              phoneNumber: '+216 73 475 555',
              image: 'all_tours.jpg',
            },
            {
              name: 'Amara Tours',
              address: 'Monastir Habib Bourguiba Airport, Monastir 5000, Tunisia',
              rating: 4.2,
              phoneNumber: '+216 73 476 666',
              image: 'amara_tours.jpg',
            },
          ],
          'Guides': [
            {
              name: 'Riadh',
              phoneNumber: '+216 98 765 432',
              rating: 5.0,
              image: 'riadh.jpg',
            },
          ],
          'Museums': [
            {
              name: 'Monastir Museum of Islamic Art',
              address: 'Ribat of Monastir, Monastir 5000, Tunisia',
              rating: 4.5,
              image: 'islamic_art_museum.jpg',
            },
            {
              name: 'Museum of Popular Arts and Traditions',
              address: 'Near Bourguiba Mosque, Monastir 5000, Tunisia',
              rating: 4.4,
              image: 'popular_arts_museum.jpg',
            },
          ],
          'Historical monuments': [
            {
              name: 'Ribat of Monastir',
              address: 'Monastir 5000, Tunisia',
              image: 'ribat_monastir.jpg',
            },
            {
              name: 'Bourguiba Mausoleum',
              address: 'Avenue Habib Bourguiba, Monastir 5000, Tunisia',
              image: 'bourguiba_mausoleum.jpg',
            },
          ],
        }
      };

      const destinationData = mockData[this.destination];

      if (destinationData && destinationData[this.category]) {
        this.categoryItems = destinationData[this.category].map(item => {
    
          const imagePath = `assets/${this.destination.toLowerCase()}/${this.category.toLowerCase()}/${item.image}`;
          return {
            ...item,
            image: imagePath,
          };
        });
      } else {
        this.categoryItems = [];
      }
      
}
}