import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle, IonCardSubtitle, IonCardContent, IonProgressBar, IonList, IonItem, IonAvatar, IonLabel, IonBadge, IonImg
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonProgressBar, IonList, IonItem, IonAvatar, NgForOf, IonLabel, IonBadge, IonImg],
})
export class Tab3Page {

  leaderboard = [
    { rank: 1, name: 'Lena', points: 1280, avatar: '/assets/avatars/lena.png', isYou: false },
    { rank: 2, name: 'You', points: 1215, avatar: '/assets/avatars/you.png', isYou: true },
    { rank: 3, name: 'Marco', points: 1180, avatar: '/assets/avatars/marco.png', isYou: false },
    { rank: 4, name: 'Aisha', points: 1130, avatar: '/assets/avatars/aisha.png', isYou: false },
    { rank: 5, name: 'Eli', points: 1105, avatar: '/assets/avatars/eli.png', isYou: false }
  ];


  constructor() {}
}
