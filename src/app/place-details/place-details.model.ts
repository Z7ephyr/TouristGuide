export interface Stop {
    name: string;
    location: string;
    description: string;
  }
  
  export interface PlaceDetails {
    route: {
      start: {
        name: string;
        location: string;
        description: string;
      };
      stops: Stop[];
      destination: {
        name: string;
        description: string;
      };
    };
    transport: {
      mode: string;
      fare: string;
      duration: string;
      notes: string;
    };
    points_of_interest: {
      name: string;
      location: string;
      description: string;
    }[];
  }
  
  const darElJeldPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Tunis City Center",
        location: "Tunis, Tunisia",
        description: "The bustling center of the capital, near major landmarks and the medina."
      },
      stops: [
        {
          name: "Medina of Tunis",
          location: "Medina, Tunis",
          description: "UNESCO World Heritage Site with narrow streets and historical sites."
        },
        {
          name: "Zitouna Mosque",
          location: "Medina, Tunis",
          description: "A historical mosque, one of the oldest in the region."
        }
      ],
      destination: {
        name: "Dar El Jeld",
        description: "A traditional restaurant and boutique hotel with Tunisian cuisine."
      }
    },
    transport: {
      mode: "Walking",
      fare: "Free",
      duration: "10 minutes",
      notes: "Walking through the Medina is a pleasant and immersive experience."
    },
    points_of_interest: [
      {
        name: "Medina of Tunis",
        location: "Medina, Tunis",
        description: "A UNESCO World Heritage Site with intricate narrow streets and traditional markets."
      },
      {
        name: "Zitouna Mosque",
        location: "Medina, Tunis",
        description: "A large, historical mosque considered one of the most important in Tunis."
      },
      {
        name: "Dar Ben Abdallah Museum",
        location: "Medina, Tunis",
        description: "A museum showcasing Tunisian cultural history and traditional artifacts."
      }
    ]
  };
  export const sarayTurkishCuisinePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Tunis City Center",
        location: "Tunis, Tunisia",
        description: "The bustling center of the capital, near major landmarks and the medina."
      },
      stops: [
        {
          name: "Medina of Tunis",
          location: "Medina, Tunis",
          description: "UNESCO World Heritage Site with narrow streets and historical sites."
        },
        {
          name: "Zitouna Mosque",
          location: "Medina, Tunis",
          description: "A historical mosque, one of the oldest in the region."
        }
      ],
      destination: {
        name: "Saray Turkish Cuisine",
        description: "A Turkish restaurant offering traditional dishes and a cozy ambiance."
      }
    },
    transport: {
      mode: "Walking",
      fare: "Free",
      duration: "12 minutes",
      notes: "Enjoy a pleasant walk through the Medina with plenty of sights."
    },
    points_of_interest: [
      {
        name: "Medina of Tunis",
        location: "Medina, Tunis",
        description: "A UNESCO World Heritage Site with intricate narrow streets and traditional markets."
      },
      {
        name: "Zitouna Mosque",
        location: "Medina, Tunis",
        description: "A large, historical mosque considered one of the most important in Tunis."
      },
      {
        name: "Bardo Museum",
        location: "Tunis",
        description: "A museum featuring an extensive collection of Roman mosaics."
      }
    ]
  };
  export const elAliPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Tunis City Center",
        location: "Tunis, Tunisia",
        description: "The bustling center of the capital, near major landmarks and the medina."
      },
      stops: [
        {
          name: "Medina of Tunis",
          location: "Medina, Tunis",
          description: "UNESCO World Heritage Site with narrow streets and historical sites."
        },
        {
          name: "Zitouna Mosque",
          location: "Medina, Tunis",
          description: "A historical mosque, one of the oldest in the region."
        }
      ],
      destination: {
        name: "Restaurant El Ali",
        description: "A Tunisian restaurant offering traditional dishes and a cozy ambiance."
      }
    },
    transport: {
      mode: "Walking",
      fare: "Free",
      duration: "10 minutes",
      notes: "Walking through the Medina is a pleasant and immersive experience."
    },
    points_of_interest: [
      {
        name: "Medina of Tunis",
        location: "Medina, Tunis",
        description: "A UNESCO World Heritage Site with intricate narrow streets and traditional markets."
      },
      {
        name: "Zitouna Mosque",
        location: "Medina, Tunis",
        description: "A large, historical mosque considered one of the most important in Tunis."
      },
      {
        name: "Dar Ben Abdallah Museum",
        location: "Medina, Tunis",
        description: "A museum showcasing Tunisian cultural history and traditional artifacts."
      }
    ]
  };
  export const elWalimaPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le centre animé de la capitale, près des principaux sites et de la médina."
      },
      stops: [
        {
          name: "Medina de Tunis",
          location: "Medina, Tunis",
          description: "Site classé au patrimoine mondial de l'UNESCO avec des rues étroites et des sites historiques."
        },
        {
          name: "Mosquée Zitouna",
          location: "Medina, Tunis",
          description: "Une mosquée historique, l'une des plus anciennes de la région."
        }
      ],
      destination: {
        name: "El Walima",
        description: "Un restaurant traditionnel offrant une cuisine tunisienne authentique dans un cadre chaleureux."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "15 minutes",
      notes: "Se promener dans la ville est une expérience agréable et immersive."
    },
    points_of_interest: [
      {
        name: "Medina de Tunis",
        location: "Medina, Tunis",
        description: "Site classé au patrimoine mondial de l'UNESCO avec des rues étroites et des marchés traditionnels."
      },
      {
        name: "Mosquée Zitouna",
        location: "Medina, Tunis",
        description: "Grande mosquée historique considérée comme l'une des plus importantes de Tunis."
      },
      {
        name: "Musée Dar Ben Abdallah",
        location: "Medina, Tunis",
        description: "Musée présentant l'histoire culturelle tunisienne et des artefacts traditionnels."
      }
    ]
  };
  export const darSlahPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le centre animé de la capitale, près des principaux sites et de la médina."
      },
      stops: [
        {
          name: "Medina de Tunis",
          location: "Medina, Tunis",
          description: "Site classé au patrimoine mondial de l'UNESCO avec des rues étroites et des sites historiques."
        },
        {
          name: "Mosquée Zitouna",
          location: "Medina, Tunis",
          description: "Une mosquée historique, l'une des plus anciennes de la région."
        }
      ],
      destination: {
        name: "Restaurant Dar Slah",
        description: "Un restaurant traditionnel offrant une cuisine tunisienne authentique dans un cadre chaleureux."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "15 minutes",
      notes: "Se promener dans la ville est une expérience agréable et immersive."
    },
    points_of_interest: [
      {
        name: "Medina de Tunis",
        location: "Medina, Tunis",
        description: "Site classé au patrimoine mondial de l'UNESCO avec des rues étroites et des marchés traditionnels."
      },
      {
        name: "Mosquée Zitouna",
        location: "Medina, Tunis",
        description: "Grande mosquée historique considérée comme l'une des plus importantes de Tunis."
      },
      {
        name: "Musée Dar Ben Abdallah",
        location: "Medina, Tunis",
        description: "Musée présentant l'histoire culturelle tunisienne et des artefacts traditionnels."
      }
    ]
  };
  export const leTabooPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le centre animé de la capitale, près des principaux sites et de la médina."
      },
      stops: [
        {
          name: "Medina de Tunis",
          location: "Medina, Tunis",
          description: "Site classé au patrimoine mondial de l'UNESCO avec des rues étroites et des sites historiques."
        },
        {
          name: "Mosquée Zitouna",
          location: "Medina, Tunis",
          description: "Une mosquée historique, l'une des plus anciennes de la région."
        }
      ],
      destination: {
        name: "Le Taboo Lounge",
        description: "Un bar lounge chic offrant une ambiance moderne et des cocktails créatifs."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "20 minutes",
      notes: "Se promener dans la ville est une expérience agréable et immersive."
    },
    points_of_interest: [
      {
        name: "Medina de Tunis",
        location: "Medina, Tunis",
        description: "Site classé au patrimoine mondial de l'UNESCO avec des rues étroites et des marchés traditionnels."
      },
      {
        name: "Mosquée Zitouna",
        location: "Medina, Tunis",
        description: "Grande mosquée historique considérée comme l'une des plus importantes de Tunis."
      },
      {
        name: "Musée Dar Ben Abdallah",
        location: "Medina, Tunis",
        description: "Musée présentant l'histoire culturelle tunisienne et des artefacts traditionnels."
      }
    ]
  };
  export const belliniCityPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, avec ses rues commerçantes et ses sites historiques."
      },
      stops: [
        {
          name: "Parc du Belvédère",
          location: "Belvédère, Tunis",
          description: "Un grand parc urbain offrant des vues panoramiques sur la ville."
        },
        {
          name: "Cité Jardins",
          location: "Cité Jardins, Tunis",
          description: "Un quartier résidentiel calme et verdoyant, idéal pour une promenade."
        }
      ],
      destination: {
        name: "Bellini City Bar Lounge",
        description: "Un bar lounge chic offrant une ambiance cosy, des cocktails raffinés et une sélection de tapas."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "Environ 25 minutes depuis le centre-ville",
      notes: "Une promenade agréable à travers les quartiers animés de Tunis."
    },
    points_of_interest: [
      {
        name: "Parc du Belvédère",
        location: "Belvédère, Tunis",
        description: "Un espace vert spacieux avec des sentiers, des aires de jeux et un lac."
      },
      {
        name: "Cité Jardins",
        location: "Cité Jardins, Tunis",
        description: "Un quartier résidentiel paisible, parfait pour une balade tranquille."
      },
      {
        name: "Musée National d'Art Moderne et Contemporain",
        location: "Cité des Sciences, Tunis",
        description: "Un musée présentant des œuvres d'art tunisien et international."
      }
    ]
  };
  
  export const leMuretPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, avec ses rues commerçantes et ses sites historiques."
      },
      stops: [
        {
          name: "Parc du Belvédère",
          location: "Belvédère, Tunis",
          description: "Un grand parc urbain offrant des vues panoramiques sur la ville."
        },
        {
          name: "Cité Jardins",
          location: "Cité Jardins, Tunis",
          description: "Un quartier résidentiel calme et verdoyant, idéal pour une promenade."
        }
      ],
      destination: {
        name: "Le Muret De Tunis",
        description: "Un bar lounge moderne offrant une ambiance chaleureuse, des cocktails raffinés et une sélection de tapas."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "Environ 25 minutes depuis le centre-ville",
      notes: "Une promenade agréable à travers les quartiers animés de Tunis."
    },
    points_of_interest: [
      {
        name: "Parc du Belvédère",
        location: "Belvédère, Tunis",
        description: "Un espace vert spacieux avec des sentiers, des aires de jeux et un lac."
      },
      {
        name: "Cité Jardins",
        location: "Cité Jardins, Tunis",
        description: "Un quartier résidentiel paisible, parfait pour une balade tranquille."
      },
      {
        name: "Musée National d'Art Moderne et Contemporain",
        location: "Cité des Sciences, Tunis",
        description: "Un musée présentant des œuvres d'art tunisien et international."
      }
    ]
  };
  export const leCarpeDiemPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, avec ses rues commerçantes et ses sites historiques."
      },
      stops: [
        {
          name: "Parc du Belvédère",
          location: "Belvédère, Tunis",
          description: "Un grand parc urbain offrant des vues panoramiques sur la ville."
        },
        {
          name: "Cité Jardins",
          location: "Cité Jardins, Tunis",
          description: "Un quartier résidentiel calme et verdoyant, idéal pour une promenade."
        }
      ],
      destination: {
        name: "Le Carpe Diem",
        description: "Un bar lounge vibrant offrant une ambiance animée, des cocktails créatifs et des tapas savoureuses."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "Environ 25 minutes depuis le centre-ville",
      notes: "Une promenade agréable à travers les quartiers animés de Tunis."
    },
    points_of_interest: [
      {
        name: "Parc du Belvédère",
        location: "Belvédère, Tunis",
        description: "Un espace vert spacieux avec des sentiers, des aires de jeux et un lac."
      },
      {
        name: "Cité Jardins",
        location: "Cité Jardins, Tunis",
        description: "Un quartier résidentiel paisible, parfait pour une balade tranquille."
      },
      {
        name: "Musée National d'Art Moderne et Contemporain",
        location: "Cité des Sciences, Tunis",
        description: "Un musée présentant des œuvres d'art tunisien et international."
      }
    ]
  };
  export const maisonBleuePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur vibrant de la capitale, connu pour son ambiance animée et ses monuments historiques."
      },
      stops: [
        {
          name: "Avenue de la Liberté",
          location: "Tunis",
          description: "Une grande avenue menant vers plusieurs établissements populaires de la ville."
        },
        {
          name: "Lafayette",
          location: "Tunis",
          description: "Un quartier connu pour ses cafés, commerces et son accès facile à différentes zones de Tunis."
        }
      ],
      destination: {
        name: "La Maison Bleue",
        description: "Un lounge chic et contemporain qui propose une cuisine tunisienne fusion et des soirées animées."
      }
    },
    transport: {
      mode: "Taxi ou voiture",
      fare: "Environ 4 DT",
      duration: "10 minutes depuis le centre-ville",
      notes: "Facilement accessible par les grandes avenues de Tunis."
    },
    points_of_interest: [
      {
        name: "Avenue de la Liberté",
        location: "Tunis",
        description: "Une artère centrale regorgeant de boutiques, cafés et vie citadine."
      },
      {
        name: "Musée de la Monnaie",
        location: "Banque Centrale de Tunisie, Tunis",
        description: "Un petit musée présentant l'histoire de la monnaie en Tunisie."
      },
      {
        name: "Parc du Belvédère",
        location: "Belvédère, Tunis",
        description: "Un parc emblématique offrant un espace vert agréable et un zoo familial."
      }
    ]
  };
  export const laMarsaPlagePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Carthage",
          location: "Carthage, Tunis",
          description: "Site archéologique emblématique avec des ruines romaines et phéniciennes."
        },
        {
          name: "Sidi Bou Saïd",
          location: "Sidi Bou Saïd, Tunis",
          description: "Village pittoresque connu pour ses maisons blanches et bleues et ses vues sur la mer."
        }
      ],
      destination: {
        name: "La Marsa Plage",
        description: "Une plage de sable doré offrant une vue imprenable sur la Méditerranée et une ambiance conviviale."
      }
    },
    transport: {
      mode: "Train (TGM)",
      fare: "Environ 1 TND",
      duration: "Environ 30 minutes",
      notes: "Le TGM relie le centre de Tunis à La Marsa avec des arrêts à Carthage et Sidi Bou Saïd."
    },
    points_of_interest: [
      {
        name: "Corniche de La Marsa",
        location: "La Marsa, Tunis",
        description: "Promenade en bord de mer idéale pour une balade avec vue sur la plage."
      },
      {
        name: "Café Saf-Saf",
        location: "La Marsa, Tunis",
        description: "Café traditionnel célèbre pour son puits historique et son ambiance authentique."
      },
      {
        name: "Marché Central de La Marsa",
        location: "La Marsa, Tunis",
        description: "Marché local proposant des produits frais, des épices et de l'artisanat tunisien."
      }
    ]
  };
  export const ambassadeursHotelPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le centre historique et commercial de Tunis, animé et bien desservi."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Ambassadeurs Hôtel",
        description: "Un hôtel confortable au cœur de Tunis, connu pour son service professionnel et sa proximité des institutions administratives."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Moins de 5 TND en taxi",
      duration: "10 minutes à pied ou 3 minutes en voiture",
      notes: "Accessible rapidement depuis le centre-ville via les principales artères routières."
    },
    points_of_interest: [
      {
        name: "Avenue Habib Bourguiba",
        location: "Centre-ville, Tunis",
        description: "Une avenue emblématique de Tunis, idéale pour flâner et découvrir l'architecture coloniale."
      },
      {
        name: "Cathédrale Saint-Vincent-de-Paul",
        location: "Centre-ville, Tunis",
        description: "Un monument religieux impressionnant situé sur l'avenue Habib Bourguiba."
      },
      {
        name: "Musée de la Monnaie",
        location: "Banque Centrale de Tunisie",
        description: "Un musée discret mais intéressant sur l'histoire monétaire du pays."
      }
    ]
  };
  export const downtownTunisHotelPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Downtown Tunis Hotel",
        description: "Un hôtel moderne situé au cœur de Tunis, offrant des chambres élégantes et un accès facile aux attractions principales."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 6 TND en taxi",
      duration: "10 minutes à pied ou 5 minutes en voiture",
      notes: "Facilement accessible depuis les principales stations de transport de la ville."
    },
    points_of_interest: [
      {
        name: "Avenue Habib Bourguiba",
        location: "Centre-ville, Tunis",
        description: "Une avenue emblématique de Tunis, idéale pour flâner et découvrir l'architecture coloniale."
      },
      {
        name: "Cathédrale Saint-Vincent-de-Paul",
        location: "Centre-ville, Tunis",
        description: "Un monument religieux impressionnant situé sur l'avenue Habib Bourguiba."
      },
      {
        name: "Musée de la Monnaie",
        location: "Banque Centrale de Tunisie",
        description: "Un musée discret mais intéressant sur l'histoire monétaire du pays."
      }
    ]
  };
  
  export const hotelLeDiplomatPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Hôtel Le Diplomat",
        description: "Un hôtel 4 étoiles situé en plein centre-ville de Tunis, offrant des chambres élégantes et un accès facile aux attractions principales."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 6 TND en taxi",
      duration: "10 minutes à pied ou 5 minutes en voiture",
      notes: "Facilement accessible depuis les principales stations de transport de la ville."
    },
    points_of_interest: [
      {
        name: "Avenue Habib Bourguiba",
        location: "Centre-ville, Tunis",
        description: "Une avenue emblématique de Tunis, idéale pour flâner et découvrir l'architecture coloniale."
      },
      {
        name: "Cathédrale Saint-Vincent-de-Paul",
        location: "Centre-ville, Tunis",
        description: "Un monument religieux impressionnant situé sur l'avenue Habib Bourguiba."
      },
      {
        name: "Musée de la Monnaie",
        location: "Banque Centrale de Tunisie",
        description: "Un musée discret mais intéressant sur l'histoire monétaire du pays."
      }
    ]
  };
  export const hotelLeParisienTunisPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Hôtel Le Parisien",
        description: "Un hôtel 2 étoiles situé en plein centre-ville de Tunis, offrant des chambres confortables et un accès facile aux attractions principales."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 6 TND en taxi",
      duration: "10 minutes à pied ou 5 minutes en voiture",
      notes: "Facilement accessible depuis les principales stations de transport de la ville."
    },
    points_of_interest: [
      {
        name: "Avenue Habib Bourguiba",
        location: "Centre-ville, Tunis",
        description: "Une avenue emblématique de Tunis, idéale pour flâner et découvrir l'architecture coloniale."
      },
      {
        name: "Cathédrale Saint-Vincent-de-Paul",
        location: "Centre-ville, Tunis",
        description: "Un monument religieux impressionnant situé sur l'avenue Habib Bourguiba."
      },
      {
        name: "Musée de la Monnaie",
        location: "Banque Centrale de Tunisie",
        description: "Un musée discret mais intéressant sur l'histoire monétaire du pays."
      }
    ]
  };
  export const nomadsHostelTunisPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Nomads Hostel Tunisia",
        description: "Un auberge conviviale et abordable située dans le quartier Montfleury, idéale pour les voyageurs à petit budget."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 6 TND en taxi",
      duration: "10 minutes à pied ou 5 minutes en voiture",
      notes: "Accessible rapidement depuis le centre-ville via les principales artères routières."
    },
    points_of_interest: [
      {
        name: "Avenue Habib Bourguiba",
        location: "Centre-ville, Tunis",
        description: "Une avenue emblématique de Tunis, idéale pour flâner et découvrir l'architecture coloniale."
      },
      {
        name: "Cathédrale Saint-Vincent-de-Paul",
        location: "Centre-ville, Tunis",
        description: "Un monument religieux impressionnant situé sur l'avenue Habib Bourguiba."
      },
      {
        name: "Musée de la Monnaie",
        location: "Banque Centrale de Tunisie",
        description: "Un musée discret mais intéressant sur l'histoire monétaire du pays."
      }
    ]
  };
  export const traveltodoPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le centre dynamique de la capitale, riche en histoire et culture."
      },
      stops: [
        {
          name: "Carthage",
          location: "Carthage, Tunis",
          description: "Site archéologique emblématique avec des ruines romaines et phéniciennes."
        },
        {
          name: "Sidi Bou Saïd",
          location: "Sidi Bou Saïd, Tunis",
          description: "Un village pittoresque avec ses maisons blanches et bleues et ses vues sur la mer."
        }
      ],
      destination: {
        name: "Traveltodo",
        description: "Une agence de voyage en ligne pionnière en Tunisie offrant des services variés pour les voyageurs."
      }
    },
    transport: {
      mode: "Train (TGM)",
      fare: "Environ 1 TND",
      duration: "Environ 30 minutes",
      notes: "Le TGM relie le centre de Tunis à La Marsa, offrant une vue panoramique."
    },
    points_of_interest: [
      {
        name: "Musée de Carthage",
        location: "Carthage, Tunis",
        description: "Un musée abritant des artefacts archéologiques provenant de l'ancienne ville de Carthage."
      },
      {
        name: "Café Sidi Bou Saïd",
        location: "Sidi Bou Saïd, Tunis",
        description: "Un café historique offrant une vue spectaculaire sur la mer Méditerranée."
      },
      {
        name: "Marché Central de Tunis",
        location: "Tunis, Tunisie",
        description: "Marché traditionnel où l'on trouve des produits frais et de l'artisanat local."
      }
    ]
  };
  
 
  export const elMansourTravelTunisPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "El Mansour Travel & Tours",
        description: "Une agence de voyage tunisienne spécialisée dans la billetterie aérienne et maritime, les réservations d'hôtels, les transferts, les excursions et l'organisation de séminaires et de congrès."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 6 TND en taxi",
      duration: "10 minutes à pied ou 5 minutes en voiture",
      notes: "Facilement accessible depuis les principales stations de transport de la ville."
    },
    points_of_interest: [
      {
        name: "Avenue Habib Bourguiba",
        location: "Centre-ville, Tunis",
        description: "Une avenue emblématique de Tunis, idéale pour flâner et découvrir l'architecture coloniale."
      },
      {
        name: "Cathédrale Saint-Vincent-de-Paul",
        location: "Centre-ville, Tunis",
        description: "Un monument religieux impressionnant situé sur l'avenue Habib Bourguiba."
      },
      {
        name: "Musée de la Monnaie",
        location: "Banque Centrale de Tunisie",
        description: "Un musée discret mais intéressant sur l'histoire monétaire du pays."
      }
    ]
  };
  
  export const tunisieBookingPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le centre dynamique de la capitale, riche en histoire et culture."
      },
      stops: [
        {
          name: "Cité Mahrajène",
          location: "Cité Mahrajène, Tunis",
          description: "Un quartier moderne avec de nombreux commerces et bureaux."
        },
        {
          name: "Les Berges du Lac",
          location: "Les Berges du Lac, Tunis",
          description: "Une zone d'affaires et résidentielle avec des espaces verts et une vue sur le lac."
        }
      ],
      destination: {
        name: "TunisieBooking",
        description: "Une agence de voyage en ligne spécialisée dans la réservation d'hôtels et services touristiques en Tunisie et à l'international."
      }
    },
    transport: {
      mode: "Train / Taxi",
      fare: "Environ 1 TND pour le train, variable pour les taxis",
      duration: "Environ 20 minutes du centre-ville à l'agence",
      notes: "Le transport en train est rapide et économique, le taxi est une option plus directe."
    },
    points_of_interest: [
      {
        name: "Centre Urbain Nord",
        location: "Centre Urbain Nord, Tunis",
        description: "Un quartier moderne avec des bâtiments de bureaux, des centres commerciaux et des restaurants."
      },
      {
        name: "Carrefour Lafayette",
        location: "Carrefour Lafayette, Tunis",
        description: "Un grand centre commercial avec des magasins, des restaurants et des services divers."
      },
      {
        name: "Les Berges du Lac",
        location: "Les Berges du Lac, Tunis",
        description: "Un quartier chic avec une vue splendide sur le lac et des commerces haut de gamme."
      }
    ]
  };
  
  export const museeNationalDuBardoPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Musée national du Bardo",
        description: "Le plus grand musée archéologique de Tunisie, abritant une vaste collection de mosaïques romaines et d'autres artefacts historiques."
      }
    },
    transport: {
      mode: "Métro léger",
      fare: "Environ 1 TND",
      duration: "Environ 20 minutes",
      notes: "Le musée est accessible via la ligne 4 du métro léger, station 'Le Bardo'."
    },
    points_of_interest: [
      {
        name: "Palais beylical",
        location: "Le Bardo, Tunis",
        description: "Ancien palais des beys tunisiens, servant de cadre au musée depuis 1888."
      },
      {
        name: "Salle des mosaïques",
        location: "Musée national du Bardo",
        description: "Salle abritant la plus grande collection de mosaïques romaines au monde."
      },
      {
        name: "Salle des statues",
        location: "Musée national du Bardo",
        description: "Exposition de statues antiques provenant de diverses civilisations."
      }
    ]
  };
  
  
  export const darElHoutPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place Pasteur",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Musée océanographique de Salammbô (Dar El Hout)",
        description: "Le principal musée tunisien consacré à la mer, présentant la richesse marine de la région."
      }
    },
    transport: {
      mode: "Taxi ou transport en commun",
      fare: "Environ 10-15 TND en taxi",
      duration: "Environ 20 minutes depuis le centre-ville",
      notes: "Accessible via les transports publics ou en taxi depuis le centre-ville de Tunis."
    },
    points_of_interest: [
      {
        name: "Palais des Suffètes de la Mer",
        location: "Carthage, Tunisie",
        description: "Ancien palais punique, site historique du musée."
      },
      {
        name: "Aquariums d'eau douce",
        location: "Musée océanographique de Salammbô",
        description: "Exposition de la faune aquatique des rivières tunisiennes."
      },
      {
        name: "Lagunes tunisiennes",
        location: "Musée océanographique de Salammbô",
        description: "Présentation des écosystèmes des lagunes côtières tunisiennes."
      }
    ]
  };

  export const tunisClockTowerPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Place du 14-Janvier 2011",
          location: "Tunis, Tunisie",
          description: "Place emblématique entourée de bâtiments historiques et de monuments."
        },
        {
          name: "Avenue Habib Bourguiba",
          location: "Tunis, Tunisie",
          description: "Artère principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        }
      ],
      destination: {
        name: "Tour Horloge de l'Avenue Habib Bourguiba",
        description: "Monument emblématique de Tunis, haut de 38 mètres, illuminé la nuit et orné de motifs traditionnels tunisiens."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "Environ 15 minutes depuis le centre-ville",
      notes: "Accessible à pied le long de l'avenue principale de Tunis."
    },
    points_of_interest: [
      {
        name: "Place du 14-Janvier 2011",
        location: "Tunis, Tunisie",
        description: "Place principale où se trouve la Tour Horloge, symbole de l'indépendance."
      },
      {
        name: "Avenue Habib Bourguiba",
        location: "Tunis, Tunisie",
        description: "Principale avenue commerçante et culturelle de la ville."
      },
      {
        name: "Cathédrale Saint-Vincent-de-Paul",
        location: "Tunis, Tunisie",
        description: "Église néo-gothique construite pendant la période coloniale française."
      }
    ]
  };
  export const placeDeLaKasbahPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Tunis",
        location: "Tunis, Tunisie",
        description: "Le cœur animé de la capitale, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Centre-ville, Tunis",
          description: "L'avenue principale de Tunis, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 14-Janvier 2011",
          location: "Tunis",
          description: "Un carrefour urbain proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Place de la Kasbah",
        description: "Place emblématique située au cœur du quartier historique de la Kasbah, centre du pouvoir politique tunisien depuis le XIIIe siècle."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "Environ 10 minutes depuis le centre-ville",
      notes: "Accessible à pied depuis le centre-ville de Tunis, en traversant l'Avenue Habib Bourguiba et en suivant les indications vers la Kasbah."
    },
    points_of_interest: [
      {
        name: "Monument national de la Kasbah",
        location: "Place de la Kasbah, Tunis",
        description: "Monument commémoratif inauguré en 1989, symbolisant l'histoire et les valeurs de la Tunisie moderne."
      },
      {
        name: "Mosquée de la Kasbah",
        location: "Place de la Kasbah, Tunis",
        description: "Construite entre 1231 et 1235, cette mosquée est un exemple de l'architecture hafside et a influencé la conception d'autres mosquées malékites en Tunisie."
      },
      {
        name: "Palais du Gouvernement",
        location: "Place de la Kasbah, Tunis",
        description: "Résidence des sultans et des dey depuis le XIIIe siècle, actuellement siège de la Présidence du gouvernement tunisien."
      }
    ]
  };

  export const restaurantLeQGPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Restaurant Le QG",
        description: "Restaurant méditerranéen offrant une vue sur la mer, idéal pour savourer des plats locaux et internationaux."
      }
    },
    transport: {
      mode: "Taxi ou transport en commun",
      fare: "Environ 10-15 TND en taxi",
      duration: "Environ 20 minutes depuis le centre-ville",
      notes: "Accessible via les transports publics ou en taxi depuis le centre-ville de Sousse."
    },
    points_of_interest: [
      {
        name: "Plage de Hammam Sousse",
        location: "Hammam Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
  export const restaurantLEscargotPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Restaurant L'Escargot",
        description: "Restaurant réputé pour sa cuisine française raffinée et son ambiance rétro, situé sur la Corniche de Sousse."
      }
    },
    transport: {
      mode: "Taxi ou transport en commun",
      fare: "Environ 10-15 TND en taxi",
      duration: "Environ 20 minutes depuis le centre-ville",
      notes: "Accessible via les transports publics ou en taxi depuis le centre-ville de Sousse."
    },
    points_of_interest: [
      {
        name: "Plage de Boujaafar",
        location: "Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
  export const carusoCafePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Caruso Café Bar",
        description: "Restaurant italien réputé offrant une cuisine authentique dans une ambiance chaleureuse et accueillante."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi",
      duration: "Environ 15 minutes depuis le centre-ville",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Plage de Boujaafar",
        location: "Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };

  export const laMarmitePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "La Marmite",
        description: "Restaurant tunisien réputé offrant une cuisine authentique dans une ambiance chaleureuse et accueillante."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi",
      duration: "Environ 15 minutes depuis le centre-ville",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Plage de Boujaafar",
        location: "Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
  export const theSaloonPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "The Saloon - Restaurant & Lounge",
        description: "Bar et lounge animé offrant une ambiance occidentale avec des cocktails, de la musique live et une atmosphère conviviale."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi",
      duration: "Environ 15 minutes depuis le centre-ville",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Plage de Boujaafar",
        location: "Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
 
  export const jobiSoussePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Jobi Sousse",
        description: "Bar à tapas offrant une ambiance décontractée, une vue sur la mer et une carte variée de tapas, sushis et cocktails."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi",
      duration: "Environ 15 minutes depuis le centre-ville",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Plage de Boujaafar",
        location: "Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
  export const boraBoraClubPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Bora Bora Open Air Club",
        description: "Discothèque en plein air réputée pour ses soirées animées, ses DJs internationaux et ses spectacles enflammés."
      }
    },
    transport: {
      mode: "En taxi",
      fare: "Environ 10-15 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Lieu populaire, il est conseillé de réserver à l'avance, surtout en haute saison."
    },
    points_of_interest: [
      {
        name: "Plage de Boujaafar",
        location: "Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
  export const livingSoussePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Living Sousse",
        description: "Boîte de nuit animée offrant une ambiance électrisante avec des DJ locaux et internationaux, des jeux de lumière spectaculaires et une piste de danse spacieuse."
      }
    },
    transport: {
      mode: "En taxi",
      fare: "Environ 10-15 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Lieu populaire, il est conseillé de réserver à l'avance, surtout en haute saison."
    },
    points_of_interest: [
      {
        name: "Plage de Boujaafar",
        location: "Sousse, Tunisie",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      },
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
  export const boujaafarBeachPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Boujaafar Beach",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      },
      {
        name: "Medina de Sousse",
        location: "Sousse, Tunisie",
        description: "Quartier historique classé au patrimoine mondial de l'UNESCO, avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  export const portElKantaouiBeachPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Port El Kantaoui Beach",
        description: "Plage populaire offrant des activités nautiques et des espaces de détente."
      }
    },
    transport: {
      mode: "En taxi ou en train touristique",
      fare: "Environ 10-15 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou via le train touristique gratuit circulant le long de la corniche. :contentReference[oaicite:2]{index=2}"
    },
    points_of_interest: [
      {
        name: "Port El Kantaoui Marina",
        location: "Port El Kantaoui, Tunisie",
        description: "Marina pittoresque construite en 1979, abritant plus de 300 bateaux dans un style arabo-mauresque. :contentReference[oaicite:3]{index=3}"
      },
      {
        name: "Acqua Palace Water Park",
        location: "Port El Kantaoui, Tunisie",
        description: "Parc aquatique familial offrant diverses attractions et toboggans pour tous les âges."
      },
      {
        name: "El Kantaoui Golf Course",
        location: "Port El Kantaoui, Tunisie",
        description: "Terrain de golf de 36 trous, idéal pour les amateurs de golf souhaitant jouer avec vue sur la mer."
      }
    ]
  };
  
  export const movenpickSoussePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Mövenpick Resort & Marine Spa Sousse",
        description: "Complexe hôtelier 5 étoiles situé en bord de mer, offrant des chambres élégantes, un spa marin, plusieurs restaurants et une plage privée."
      }
    },
    transport: {
      mode: "En taxi",
      fare: "Environ 10-15 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou via le train touristique gratuit circulant le long de la corniche."
    },
    points_of_interest: [
      {
        name: "Port El Kantaoui Marina",
        location: "Port El Kantaoui, Tunisie",
        description: "Marina pittoresque construite en 1979, abritant plus de 300 bateaux dans un style arabo-mauresque."
      },
      {
        name: "Acqua Palace Water Park",
        location: "Port El Kantaoui, Tunisie",
        description: "Parc aquatique familial offrant diverses attractions et toboggans pour tous les âges."
      },
      {
        name: "El Kantaoui Golf Course",
        location: "Port El Kantaoui, Tunisie",
        description: "Terrain de golf de 36 trous, idéal pour les amateurs de golf souhaitant jouer avec vue sur la mer."
      }
    ]
  };
  
  
  export const soussePalaceHotelPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Sousse Palace Hotel & Spa",
        description: "Hôtel 5 étoiles situé en bord de mer, offrant des chambres élégantes, un spa, plusieurs restaurants et une plage privée."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      },
      {
        name: "Medina de Sousse",
        location: "Sousse, Tunisie",
        description: "Quartier historique classé au patrimoine mondial de l'UNESCO, avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  export const marhabaRoyalSalemPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Hotel Marhaba Royal Salem",
        description: "Hôtel 4 étoiles réservé aux familles, situé en bord de mer, offrant des chambres élégantes, un spa, plusieurs restaurants et une plage privée."
      }
    },
    transport: {
      mode: "En taxi",
      fare: "Environ 10-15 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou via le train touristique gratuit circulant le long de la corniche."
    },
    points_of_interest: [
      {
        name: "Port El Kantaoui Marina",
        location: "Port El Kantaoui, Tunisie",
        description: "Marina pittoresque construite en 1979, abritant plus de 300 bateaux dans un style arabo-mauresque."
      },
      {
        name: "Acqua Palace Water Park",
        location: "Port El Kantaoui, Tunisie",
        description: "Parc aquatique familial offrant diverses attractions et toboggans pour tous les âges."
      },
      {
        name: "El Kantaoui Golf Course",
        location: "Port El Kantaoui, Tunisie",
        description: "Terrain de golf de 36 trous, idéal pour les amateurs de golf souhaitant jouer avec vue sur la mer."
      }
    ]
  };
  
  export const saharaTravelPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Sahara Travel",
        description: "Agence de voyages spécialisée dans les excursions dans le désert tunisien, offrant des circuits personnalisés et des expériences uniques."
      }
    },
    transport: {
      mode: "En taxi ou en voiture privée",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou en voiture privée depuis le centre-ville de Sousse."
    },
    points_of_interest: [
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      },
      {
        name: "Medina de Sousse",
        location: "Sousse, Tunisie",
        description: "Quartier historique classé au patrimoine mondial de l'UNESCO, avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
 
  
  export const kantaouiVoyagesPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Kantaoui Voyages",
        description: "Agence de voyages spécialisée dans les excursions locales et les circuits en Tunisie, offrant des services personnalisés pour découvrir les richesses culturelles et naturelles du pays."
      }
    },
    transport: {
      mode: "En taxi ou en voiture privée",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou en voiture privée depuis le centre-ville de Sousse."
    },
    points_of_interest: [
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      },
      {
        name: "Medina de Sousse",
        location: "Sousse, Tunisie",
        description: "Quartier historique classé au patrimoine mondial de l'UNESCO, avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
 
  export const sousseArchaeologicalMuseumPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Musée archéologique de Sousse",
        description: "Situé dans la kasbah du XIe siècle, ce musée abrite une vaste collection de mosaïques romaines, de sculptures et d'artefacts datant des époques punique, romaine et byzantine."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Grande Mosquée de Sousse",
        location: "Sousse, Tunisie",
        description: "Mosquée historique datant du IXe siècle, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Sousse",
        location: "Sousse, Tunisie",
        description: "Quartier historique classé au patrimoine mondial de l'UNESCO, avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  export const ribatOfSoussePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Ribat de Sousse",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      },
      {
        name: "Grande Mosquée de Sousse",
        location: "Sousse, Tunisie",
        description: "Mosquée historique datant du IXe siècle, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Sousse",
        location: "Sousse, Tunisie",
        description: "Quartier historique classé au patrimoine mondial de l'UNESCO, avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  
  export const medinaOfSoussePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Sousse",
        location: "Sousse, Tunisie",
        description: "Le cœur animé de la ville, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Sousse, Tunisie",
          description: "L'avenue principale de Sousse, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du Maghreb Arabe",
          location: "Sousse, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Médina de Sousse",
        description: "Quartier historique classé au patrimoine mondial de l'UNESCO, avec ses souks et ses ruelles pittoresques."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "Variable selon les arrêts",
      notes: "Accessible à pied depuis le centre-ville. Idéal pour une exploration à pied."
    },
    points_of_interest: [
      {
        name: "Ribat de Sousse",
        location: "Sousse, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Grande Mosquée de Sousse",
        location: "Sousse, Tunisie",
        description: "Mosquée historique datant du IXe siècle, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Musée archéologique de Sousse",
        location: "Sousse, Tunisie",
        description: "Musée présentant des artefacts de l'époque punique à l'époque islamique."
      }
    ]
  };
  
  export const lePirateMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 3 Août",
          location: "Monastir, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Restaurant Le Pirate",
        description: "Restaurant de fruits de mer situé au port de pêche de Monastir, offrant une cuisine tunisienne authentique avec des spécialités de poissons frais et de fruits de mer, dans une ambiance conviviale et une vue imprenable sur la mer."
      }
    },
    transport: {
      mode: "En taxi ou en voiture privée",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou en voiture privée depuis le centre-ville de Monastir."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Habib Bourguiba Mausoleum",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
 
  export const marinaTheCaptainPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 3 Août",
          location: "Monastir, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Marina the Captain",
        description: "Restaurant situé dans le port de plaisance de Monastir, offrant une cuisine méditerranéenne et tunisienne, avec des fruits de mer frais et des viandes grillées, dans une ambiance conviviale et une vue imprenable sur la mer."
      }
    },
    transport: {
      mode: "En taxi ou en voiture privée",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou en voiture privée depuis le centre-ville de Monastir."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  

  
  export const sopranoMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 3 Août",
          location: "Monastir, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Soprano",
        description: "Pizzeria populaire offrant une variété de pizzas généreusement garnies, dans une ambiance chaleureuse et décontractée."
      }
    },
    transport: {
      mode: "À pied",
      fare: "Gratuit",
      duration: "Variable selon les arrêts",
      notes: "Accessible à pied depuis le centre-ville."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  
  export const darChrakaPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 3 Août",
          location: "Monastir, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Dar Chraka",
        description: "Restaurant traditionnel tunisien offrant une cuisine locale authentique dans une ambiance chaleureuse et conviviale."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
 
  
  export const daPieroMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 3 Août",
          location: "Monastir, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Restaurant Da Piero",
        description: "Restaurant italien réputé pour ses pizzas, pâtes et desserts authentiques, offrant une ambiance chaleureuse et un service de qualité."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  

  export const redmoonLoungePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 3 Août",
          location: "Monastir, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Redmoon Lounge",
        description: "Lounge bar animé situé à l'hôtel Liberty Resort, offrant des soirées à thème, des cocktails variés et une ambiance musicale enflammée."
      }
    },
    transport: {
      mode: "En taxi ou en voiture privée",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible en taxi ou en voiture privée depuis le centre-ville de Monastir."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  

  export const leGourmetMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Place du 3 Août",
          location: "Monastir, Tunisie",
          description: "Une place centrale proche de nombreux hôtels, ambassades et centres administratifs."
        }
      ],
      destination: {
        name: "Le Gourmet",
        description: "Restaurant proposant une variété de plats tunisiens et européens dans une ambiance conviviale."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  export const bar51MonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Route de Skanes",
          location: "Monastir, Tunisie",
          description: "Route côtière menant aux zones touristiques et aux complexes hôteliers."
        }
      ],
      destination: {
        name: "Bar 51",
        description: "Bar emblématique du Sahara Beach Aquapark Resort, Bar 51 est un bar flottant perché sur une jetée au large de la plage de Skanes. Il offre une vue panoramique sur la mer et propose une variété de cocktails dans une ambiance détendue. Des spectacles de danse et de musique sont également organisés, certains étant réservés aux clients en formule tout compris du complexe hôtelier."
      }
    },
    transport: {
      mode: "En taxi ou en voiture privée",
      fare: "Environ 10-15 TND en taxi depuis le centre-ville",
      duration: "Environ 15-20 minutes",
      notes: "Accessible en taxi ou en voiture privée depuis le centre-ville de Monastir."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  
  
  export const tropicalBarMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Avenue Habib Bourguiba",
          location: "Monastir, Tunisie",
          description: "L'avenue principale de Monastir, bordée de cafés, de boutiques et de bâtiments historiques."
        },
        {
          name: "Rue 1er Juin 1955",
          location: "Monastir, Tunisie",
          description: "Rue située au cœur de Monastir, menant à plusieurs établissements populaires."
        }
      ],
      destination: {
        name: "Tropical Bar",
        description: "Bar lounge animé situé au Monastir Center Hotel, offrant une ambiance tropicale avec une variété de cocktails rafraîchissants, des soirées à thème et une atmosphère détendue pour les locaux et les touristes."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Environ 5-10 TND en taxi depuis le centre-ville",
      duration: "Environ 10-15 minutes",
      notes: "Accessible à pied depuis le centre-ville ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique datant du IXe siècle, offrant une vue panoramique sur la ville."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée du premier président de la Tunisie, un exemple remarquable de l'architecture islamique."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec ses souks et ses ruelles pittoresques."
      }
    ]
  };
  
  export const skanesMonastirPublicBeachPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture."
      },
      stops: [
        {
          name: "Route de l’Aéroport",
          location: "Monastir, Tunisie",
          description: "Route principale reliant le centre-ville de Monastir à la zone touristique de Skanes."
        },
        {
          name: "Zone Touristique Skanes",
          location: "Monastir, Tunisie",
          description: "Quartier balnéaire connu pour ses complexes hôteliers, plages et infrastructures touristiques."
        }
      ],
      destination: {
        name: "Skanes Monastir Public Beach",
        description: "Plage publique prisée pour son sable fin, ses eaux peu profondes et sa proximité avec les hôtels de la zone touristique de Skanes."
      }
    },
    transport: {
      mode: "En taxi ou en voiture",
      fare: "Environ 5-10 TND depuis le centre-ville",
      duration: "Environ 10 minutes",
      notes: "Accessible rapidement via la Route de l’Aéroport ou par les transports privés."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification historique offrant une vue panoramique sur la ville et la mer."
      },
      {
        name: "Mausolée de Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Mausolée somptueux du premier président de la Tunisie, symbole national."
      },
      {
        name: "Palais Présidentiel de Skanes",
        location: "Monastir, Tunisie",
        description: "Ancienne résidence présidentielle située à proximité de la plage."
      }
    ]
  };
  
 
  export const qaraiyaBeachPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre dynamique de Monastir, à proximité de la médina et du Ribat, offrant commerces, restaurants et accès facile aux plages."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique surplombant la mer, offrant une vue panoramique et un aperçu de l'histoire de la ville."
        },
        {
          name: "Corniche de Monastir",
          location: "Monastir, Tunisie",
          description: "Promenade en bord de mer idéale pour les balades, bordée de cafés et de points de vue sur la Méditerranée."
        }
      ],
      destination: {
        name: "Qaraiya Beach",
        description: "Plage populaire au sable fin et aux eaux peu profondes, proche du centre-ville et idéale pour les familles."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Gratuit à pied, ou environ 3-5 TND en taxi",
      duration: "Environ 10 minutes depuis le centre-ville",
      notes: "Facilement accessible à pied depuis le centre ou en taxi rapide."
    },
    points_of_interest: [
      {
        name: "Médina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des ruelles étroites, des souks et une architecture traditionnelle tunisienne."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des habits traditionnels tunisiens dans un cadre authentique au cœur de la médina."
      },
      {
        name: "Marina de Monastir",
        location: "Monastir, Tunisie",
        description: "Port de plaisance animé avec restaurants, boutiques et ambiance conviviale en bord de mer."
      }
    ]
  };
  
 
  export const plageLaFalaisePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le centre animé de Monastir, riche en histoire et en culture, avec des commerces, restaurants et un accès facile aux plages."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique emblématique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Corniche de Monastir",
          location: "Monastir, Tunisie",
          description: "Promenade en bord de mer idéale pour des balades, avec des vues magnifiques et des cafés en bord de mer."
        }
      ],
      destination: {
        name: "Plage la Falaise",
        description: "Plage sauvage offrant des falaises pittoresques, un sable doré et des eaux cristallines parfaites pour une baignade tranquille."
      }
    },
    transport: {
      mode: "À pied ou en taxi",
      fare: "Gratuit à pied, ou environ 3-5 TND en taxi",
      duration: "Environ 10 minutes depuis le centre-ville",
      notes: "Facilement accessible à pied ou en taxi depuis le centre-ville."
    },
    points_of_interest: [
      {
        name: "Médina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle tunisienne."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens, situé au cœur de la médina."
      },
      {
        name: "Marina de Monastir",
        location: "Monastir, Tunisie",
        description: "Port de plaisance animé avec des restaurants, boutiques et une ambiance conviviale en bord de mer."
      }
    ]
  };
  
  
  export const iberostarSelectionKuriatPalacePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Centre-ville de Monastir",
        location: "Monastir, Tunisie",
        description: "Le cœur historique de Monastir, riche en culture et à proximité de la mer."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Une fortification historique offrant des vues splendides sur la ville et la mer."
        },
        {
          name: "Marina de Monastir",
          location: "Monastir, Tunisie",
          description: "Un port de plaisance moderne, avec des restaurants et des boutiques en bord de mer."
        }
      ],
      destination: {
        name: "Iberostar Selection Kuriat Palace",
        description: "Hôtel 5 étoiles en bord de mer avec des chambres élégantes, des piscines, un spa, et une offre gastronomique diversifiée."
      }
    },
    transport: {
      mode: "En taxi ou en voiture privée",
      fare: "Environ 10-15 TND en taxi",
      duration: "Environ 15 minutes depuis le centre-ville",
      notes: "Accessible en taxi ou en voiture privée. Possibilité d'accès direct à la plage."
    },
    points_of_interest: [
      {
        name: "Plage Skanes",
        location: "Skanes, Monastir, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et la détente."
      },
      {
        name: "Médina de Monastir",
        location: "Monastir, Tunisie",
        description: "Un site historique avec des souks, des ruelles pittoresques, et un artisanat traditionnel."
      },
      {
        name: "Musée du Ribat",
        location: "Monastir, Tunisie",
        description: "Un musée fascinant sur l'histoire de la région, avec des expositions sur l'architecture et l'histoire islamique."
      }
    ]
  };
  
  
  
  export const hiltonSkanesMonastirBeachResortPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Monastir International Airport",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 5 minutes en voiture de l'hôtel."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "Hilton Skanes Monastir Beach Resort",
        description: "Hôtel 5 étoiles en bord de mer offrant des installations modernes, des restaurants variés et un accès direct à la plage."
      }
    },
    transport: {
      mode: "Taxi ou voiture privée",
      fare: "Environ 10-15 TND",
      duration: "Environ 5 minutes depuis l'aéroport",
      notes: "L'hôtel est situé à proximité de l'aéroport, facilitant les transferts rapides."
    },
    points_of_interest: [
      {
        name: "Plage de Skanes",
        location: "Skanes, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et les sports nautiques."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens dans un cadre authentique."
      }
    ]
  };
  
  export const saharaBeachAquaparkResortPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 10 minutes en voiture de l'hôtel."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "Sahara Beach Aquapark Resort",
        description: "Hôtel 3 étoiles en bord de mer offrant des installations modernes, des restaurants variés et un accès direct à la plage."
      }
    },
    transport: {
      mode: "Taxi ou voiture privée",
      fare: "Environ 10-15 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "L'hôtel est situé à proximité de l'aéroport, facilitant les transferts rapides."
    },
    points_of_interest: [
      {
        name: "Plage de Skanes",
        location: "Skanes, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et les sports nautiques."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens dans un cadre authentique."
      }
    ]
  };
  
 
  
  export const hotelLibertyResortPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 6 km de l'hôtel."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "Hotel Liberty Resort",
        description: "Hôtel 4 étoiles en bord de mer offrant des installations modernes, des restaurants variés et un accès direct à la plage."
      }
    },
    transport: {
      mode: "Taxi ou voiture privée",
      fare: "Environ 10-15 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "L'hôtel est situé à proximité de l'aéroport, facilitant les transferts rapides."
    },
    points_of_interest: [
      {
        name: "Plage de Skanes",
        location: "Skanes, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et les sports nautiques."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens dans un cadre authentique."
      }
    ]
  };
  
  export const amirPalacePlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 2,2 km de l'hôtel."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "Amir Palace",
        description: "Hôtel 4 étoiles en bord de mer offrant des installations modernes, des restaurants variés et un accès direct à la plage."
      }
    },
    transport: {
      mode: "Taxi ou voiture privée",
      fare: "Environ 10-15 TND",
      duration: "Environ 5 minutes depuis l'aéroport",
      notes: "L'hôtel est situé à proximité de l'aéroport, facilitant les transferts rapides."
    },
    points_of_interest: [
      {
        name: "Plage de Skanes",
        location: "Skanes, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et les sports nautiques."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens dans un cadre authentique."
      }
    ]
  };
  
  export const travelotunisiaMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 10 minutes en voiture de l'agence."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "Travelotunisia Monastir",
        description: "Agence de voyages offrant des services personnalisés pour découvrir Monastir et ses environs."
      }
    },
    transport: {
      mode: "Taxi ou voiture privée",
      fare: "Environ 10-15 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "L'agence est située à proximité de l'aéroport, facilitant les transferts rapides."
    },
    points_of_interest: [
      {
        name: "Plage de Skanes",
        location: "Skanes, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et les sports nautiques."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens dans un cadre authentique."
      }
    ]
  };
  

  export const allToursMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 10 minutes en voiture de l'agence."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "All Tours Monastir",
        description: "Agence de voyages proposant des excursions personnalisées et des services de transport dans la région de Monastir."
      }
    },
    transport: {
      mode: "Taxi ou voiture privée",
      fare: "Environ 10-15 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "L'agence est située à proximité de l'aéroport, facilitant les transferts rapides."
    },
    points_of_interest: [
      {
        name: "Plage de Skanes",
        location: "Skanes, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et les sports nautiques."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens dans un cadre authentique."
      }
    ]
  };
  
  
  
  export const amaraToursMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 10 minutes en voiture de l'agence."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "Amara Tours Monastir",
        description: "Agence de voyages proposant des services personnalisés pour découvrir Monastir et ses environs."
      }
    },
    transport: {
      mode: "Taxi ou voiture privée",
      fare: "Environ 10-15 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "L'agence est située à proximité de l'aéroport, facilitant les transferts rapides."
    },
    points_of_interest: [
      {
        name: "Plage de Skanes",
        location: "Skanes, Tunisie",
        description: "Plage tranquille avec des eaux cristallines, idéale pour la baignade et les sports nautiques."
      },
      {
        name: "Medina de Monastir",
        location: "Monastir, Tunisie",
        description: "Quartier historique avec des souks, des ruelles étroites et une architecture traditionnelle."
      },
      {
        name: "Musée du Costume Traditionnel",
        location: "Monastir, Tunisie",
        description: "Musée exposant des vêtements traditionnels tunisiens dans un cadre authentique."
      }
    ]
  };
  
 
  export const monastirMuseumOfIslamicArtPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Ancienne fortification islamique offrant une vue panoramique sur la ville et la mer."
      },
      stops: [
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        },
        {
          name: "Plage de Monastir",
          location: "Monastir, Tunisie",
          description: "Plage populaire avec des activités nautiques et des espaces de détente."
        }
      ],
      destination: {
        name: "Musée des arts islamiques de Monastir",
        description: "Un musée historique situé dans l'ancien oratoire du Ribat, présentant des objets illustrant l'art islamique à travers les siècles."
      }
    },
    transport: {
      mode: "Taxi ou à pied",
      fare: "Environ 5-10 TND",
      duration: "Environ 15 minutes depuis le centre-ville",
      notes: "Accessible à pied depuis le centre ou en taxi."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification islamique datant du IIe/VIIIe siècle, utilisée comme oratoire et abritant le musée au premier étage."
      },
      {
        name: "Mausolée de Bourguiba",
        location: "Monastir, Tunisie",
        description: "Lieu de sépulture de Habib Bourguiba, premier président tunisien."
      },
      {
        name: "Plage de Monastir",
        location: "Monastir, Tunisie",
        description: "Plage tranquille idéale pour la baignade et les sports nautiques."
      }
    ]
  };
  
  
  export const monastirMuseumOfPopularArtsAndTraditionsPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 10 minutes en voiture du musée."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        }
      ],
      destination: {
        name: "Musée des arts et traditions populaires de Monastir",
        description: "Musée ethnographique présentant des costumes traditionnels, des bijoux et des objets de la vie quotidienne des différentes régions de Tunisie."
      }
    },
    transport: {
      mode: "Taxi ou à pied",
      fare: "Environ 5-10 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "Le musée est situé à proximité de la médina de Monastir, facilement accessible depuis le centre-ville."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification islamique datant du IIe/VIIIe siècle, utilisée comme oratoire et abritant le musée au premier étage."
      },
      {
        name: "Mausolée de Bourguiba",
        location: "Monastir, Tunisie",
        description: "Lieu de sépulture de Habib Bourguiba, premier président tunisien."
      },
      {
        name: "Plage de Monastir",
        location: "Monastir, Tunisie",
        description: "Plage tranquille idéale pour la baignade et les sports nautiques."
      }
    ]
  };
  
  
  export const ribatOfMonastirPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 10 minutes en voiture du Ribat."
      },
      stops: [
        {
          name: "Mausolée de Bourguiba",
          location: "Monastir, Tunisie",
          description: "Lieu de sépulture du premier président tunisien, Habib Bourguiba, avec une architecture impressionnante."
        },
        {
          name: "Plage de Monastir",
          location: "Monastir, Tunisie",
          description: "Plage populaire avec des activités nautiques et des espaces de détente."
        }
      ],
      destination: {
        name: "Ribat de Monastir",
        description: "Ancienne forteresse islamique datant de 796, servant de centre religieux et militaire, aujourd'hui transformée en musée."
      }
    },
    transport: {
      mode: "Taxi ou à pied",
      fare: "Environ 5-10 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "Le Ribat est situé à proximité de la médina de Monastir, facilement accessible depuis le centre-ville."
    },
    points_of_interest: [
      {
        name: "Mausolée de Bourguiba",
        location: "Monastir, Tunisie",
        description: "Lieu de sépulture de Habib Bourguiba, premier président tunisien."
      },
      {
        name: "Plage de Monastir",
        location: "Monastir, Tunisie",
        description: "Plage tranquille idéale pour la baignade et les sports nautiques."
      }
    ]
  };
  
  export const bourguibaMausoleumPlaceDetails: PlaceDetails = {
    route: {
      start: {
        name: "Aéroport International de Monastir Habib Bourguiba",
        location: "Monastir, Tunisie",
        description: "Aéroport international desservant la région de Monastir, situé à environ 10 minutes en voiture du mausolée."
      },
      stops: [
        {
          name: "Ribat de Monastir",
          location: "Monastir, Tunisie",
          description: "Forteresse historique offrant une vue panoramique sur la ville et la mer."
        },
        {
          name: "Plage de Monastir",
          location: "Monastir, Tunisie",
          description: "Plage populaire avec des activités nautiques et des espaces de détente."
        }
      ],
      destination: {
        name: "Mausolée de Bourguiba",
        description: "Monument sépulcral dédié à Habib Bourguiba, premier président de la Tunisie, situé dans le cimetière Sidi El Mézeri."
      }
    },
    transport: {
      mode: "Taxi ou à pied",
      fare: "Environ 5-10 TND",
      duration: "Environ 10 minutes depuis l'aéroport",
      notes: "Le mausolée est situé à proximité de la médina de Monastir, facilement accessible depuis le centre-ville."
    },
    points_of_interest: [
      {
        name: "Ribat de Monastir",
        location: "Monastir, Tunisie",
        description: "Fortification islamique datant du IIe/VIIIe siècle, utilisée comme oratoire et abritant le musée au premier étage."
      },
      {
        name: "Plage de Monastir",
        location: "Monastir, Tunisie",
        description: "Plage tranquille idéale pour la baignade et les sports nautiques."
      }
    ]
  };
  
  
  
  export const placeDetailsMap: { [key: string]: PlaceDetails } = {
    "Dar El Jeld": darElJeldPlaceDetails,
    "Saray Turkish Cuisine": sarayTurkishCuisinePlaceDetails,
    "El Ali": elAliPlaceDetails,
  "El Walima": elWalimaPlaceDetails,
  "Restaurant Dar Slah": darSlahPlaceDetails,
  "Le Taboo": leTabooPlaceDetails,
 "Bellini City Bar Lounge":belliniCityPlaceDetails,
 "Le Muret De Tunis": leMuretPlaceDetails,
 "Le Carpe Diem": leCarpeDiemPlaceDetails,
 "Maison Bleue": maisonBleuePlaceDetails,
 "La Marsa plage": laMarsaPlagePlaceDetails,
 "Ambassadeurs Hôtel": ambassadeursHotelPlaceDetails,
 "DownTown Tunis Hotel": downtownTunisHotelPlaceDetails,
 "Hôtel Le Diplomat": hotelLeDiplomatPlaceDetails,
 "Hôtel Le Parisien Tunisie": hotelLeParisienTunisPlaceDetails,
 "Nomads Hostel Tunisia": nomadsHostelTunisPlaceDetails,
 "Traveltodo": traveltodoPlaceDetails,
 "El Mansour Travel & Tours": elMansourTravelTunisPlaceDetails,
 "Tunisiebooking": tunisieBookingPlaceDetails,
 "Musée national du Bardo":museeNationalDuBardoPlaceDetails,
 "Musée océanographique Dar El Hout": darElHoutPlaceDetails,
 "Tunis Clock Tower": tunisClockTowerPlaceDetails,
 "Place de la Kasbah":placeDeLaKasbahPlaceDetails,
 "Restaurant Le QG": restaurantLeQGPlaceDetails,
 "Escargot": restaurantLEscargotPlaceDetails,
 "Caruso Cafe": carusoCafePlaceDetails,
 "La Marmite": laMarmitePlaceDetails,
 "The Saloon": theSaloonPlaceDetails,
 "Jobi Sousse": jobiSoussePlaceDetails,
 "Bora Bora Club": boraBoraClubPlaceDetails,
 "Living Sousse": livingSoussePlaceDetails,
 "Boujaafar Beach": boujaafarBeachPlaceDetails,
 "Port El Kantaoui Beach": portElKantaouiBeachPlaceDetails,
 "Mövenpick Resort & Marine Spa Sousse": movenpickSoussePlaceDetails,
 "Sousse Palace Hotel & Spa": soussePalaceHotelPlaceDetails,
 "Hotel Marhaba Royal Salem": marhabaRoyalSalemPlaceDetails,
 "Sahara Travel": saharaTravelPlaceDetails,
 "Kantaoui Voyages": kantaouiVoyagesPlaceDetails,
 "Sousse Archaeological Museum": sousseArchaeologicalMuseumPlaceDetails,
 "Ribat of Sousse": ribatOfSoussePlaceDetails,
 "Medina of Sousse": medinaOfSoussePlaceDetails,
 "Restaurant Le Pirate": lePirateMonastirPlaceDetails,
 "Marina the Captain": marinaTheCaptainPlaceDetails,
 "Soprano": sopranoMonastirPlaceDetails,
 "Dar Chraka": darChrakaPlaceDetails,
 "Da Piero": daPieroMonastirPlaceDetails,
 "Redmoon Lounge": redmoonLoungePlaceDetails,
 "Le Gourmet": leGourmetMonastirPlaceDetails,
 "Bar 51": bar51MonastirPlaceDetails,
 "Tropical Bar": tropicalBarMonastirPlaceDetails,
 "Skanes Monastir Public Beach": skanesMonastirPublicBeachPlaceDetails,
 "Qaraiya Beach": qaraiyaBeachPlaceDetails,
 "Plage la Falaise": plageLaFalaisePlaceDetails,
 "Iberostar Selection Kuriat Palace": iberostarSelectionKuriatPalacePlaceDetails,
 "Hilton Skanes Monastir Beach Resort": hiltonSkanesMonastirBeachResortPlaceDetails,
 "Sahara Beach Aquapark Resort": saharaBeachAquaparkResortPlaceDetails,
 "Hotel Liberty Resort": hotelLibertyResortPlaceDetails,
 "Amir Palace": amirPalacePlaceDetails,
 "Travelotunisia": travelotunisiaMonastirPlaceDetails,
 "All Tours": allToursMonastirPlaceDetails,
 "Amara Tours": amaraToursMonastirPlaceDetails,
 "Monastir Museum of Islamic Art": monastirMuseumOfIslamicArtPlaceDetails,
 "Museum of Popular Arts and Traditions": monastirMuseumOfPopularArtsAndTraditionsPlaceDetails,
 "Ribat of Monastir": ribatOfMonastirPlaceDetails,
 "Bourguiba Mausoleum": bourguibaMausoleumPlaceDetails,

  };