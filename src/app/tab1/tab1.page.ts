import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonSpinner, IonIcon, IonText
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {flameSharp, imagesOutline, navigate} from "ionicons/icons";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, RouterLink, IonGrid, IonRow, IonCol, IonSpinner, IonIcon, IonText],
})
export class Tab1Page {
  constructor(private router: Router) {
    addIcons({ flameSharp, imagesOutline});
  }

  protected readonly navigate = navigate;

  public navigateToWriteVoiceOfTheImage() {
    this.router.navigate(["/tabs/write-voice-of-the-image", 0]);
  }
}
