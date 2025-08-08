import { Component, OnInit } from '@angular/core';
import {IonApp, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {Router} from "@angular/router";
import {Inject} from "@angular/core";

@Component({
  selector: 'app-explore-artworks',
  templateUrl: './explore-artworks.component.html',
  styleUrls: ['./explore-artworks.component.scss'],
  imports: [
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCol,
    IonGrid,
    IonRow,
  ]
})
export class ExploreArtworksComponent  implements OnInit {
  router = Inject(Router);
  exp_images: Array<{ code: number }> = []
  images_length = 20; // Size of the images in pixels

  constructor() { }

  ngOnInit() {
    // Initialization logic can go here if needed
    console.log('ExploreArtworksComponent initialized');
    for (let i = 1; i <= this.images_length; i++) {
      this.exp_images.push({ code: i });
    }
  }

  navigateToWriteVoiceOfTheImage(imageId: number) {
    this.router.navigate(["/tabs/write-voice-of-the-image", imageId]);
  }

}
