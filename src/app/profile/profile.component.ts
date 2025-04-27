import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
  standalone: true, 
  imports: [IonicModule] 
})
export class ProfileComponent {
  username: string = 'Nidhal';
  selectedLanguage: string = 'en';
  languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' }
  ];

  onLanguageChange(event: any) {
    this.selectedLanguage = event.detail.value;
    console.log('Language changed to:', this.selectedLanguage);
  }

  onProfileSettings() {
    console.log('Navigating to Profile Settings...');
   
  }

  onEditProfile() {
    console.log('Editing profile...');
 
  }

  onNotifications() {
    console.log('Opening notifications...');
   
  }

  onDisconnect() {
    console.log('User logged out.');
  
  }
}
