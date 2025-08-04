import {Component, ViewChild} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonButton, IonModal, IonButtons, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {RouterLink} from "@angular/router";
import { OverlayEventDetail } from '@ionic/core/components';
import {bulbOutline, hourglassOutline, barbellOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, RouterLink, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonText, IonTextarea, IonButton, IonModal, IonButtons, IonList, IonItem, IonLabel]
})
export class Tab2Page {

  attemptsLeft = 2;

  isRevisionModalOpen = false;
  isSubmitModalOpen = false;

  constructor() {
    addIcons({bulbOutline, hourglassOutline, barbellOutline});
  }

  showRevisionModal(show: boolean) {
    this.isRevisionModalOpen = show;
  }

  showSubmitModal(show: boolean) {
    this.isSubmitModalOpen = show;
  }

  rewrite() {
    this.showRevisionModal(false);
    this.attemptsLeft--;
  }

  confirm() {
    this.showRevisionModal(false);
    this.showSubmitModal(true);
  }

  feedback = {
    "encouragement": "This is a strong emotional start — it shows maturity and thoughtfulness.",
    "suggestions": [
      "Add a physical detail from the rooftop or city below to ground the emotion — perhaps the flicker of a neon sign or a passing bird.",
      "Consider using a metaphor: what is the 'weight of waiting' like? Maybe it's like a stone in the chest, or like fog that never clears.",
      "Use one color or sound from the image to deepen the atmosphere — for example, 'the sky hummed in quiet blue' or 'the silence rang like cold metal.'",
      "Ask yourself: is this character afraid, or hopeful? Let that shape your revision.",
      "Try a metaphor that links the horizon to something emotional: 'The skyline was a question stretched thin across the dusk,' or 'Hope hung just beyond the rooftops like an unfinished song.'"
    ]
  };

  closeSubmitModal() {
    this.showSubmitModal(false);
  }
}
