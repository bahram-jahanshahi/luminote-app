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
import {Router, RouterLink} from "@angular/router";
import {bulbOutline, hourglassOutline, barbellOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart, ChartComponent
} from "ng-apexcharts";

import { NgApexchartsModule } from "ng-apexcharts";
import {NgIf} from "@angular/common";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  colors: string[];
};

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NgApexchartsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, RouterLink, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonText, IonTextarea, IonButton, IonModal, IonButtons, IonList, IonItem, IonLabel, ChartComponent, NgIf]
})
export class Tab2Page {

  attemptsLeft = 2;

  isRevisionModalOpen = false;
  isSubmitModalOpen = false;

  @ViewChild('submitModal', { static: false }) submitModalRef!: IonModal;


  @ViewChild("scoreChart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
    series: [44, 55, 67, 83],
    chart: {
      height: 350,
      type: "radialBar"
    } as ApexChart,
    plotOptions: {
      radialBar: {
        hollow: {
          size: "30%" // Smaller = thicker bar, Larger = thinner bar
        },
        track: {
          strokeWidth: "100%" // Controls track width relative to bar
        },
        dataLabels: {
          name: {
            fontSize: "22px"
          },
          value: {
            fontSize: "16px"
          },
          total: {
            show: true,
            label: "Total",
            formatter: function(w) {
              return "249";
            }
          }
        }
      }
    } as ApexPlotOptions,
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    labels: ["Apples", "Oranges", "Bananas", "Berries"]
  };

  constructor(private router: Router) {
    addIcons({bulbOutline, hourglassOutline, barbellOutline});
  }

  showRevisionModal(show: boolean) {
    this.isRevisionModalOpen = show;
  }

  showSubmitModal(show: boolean) {
      this.isSubmitModalOpen = show;

      if (show) {
        this.chartOptions.series = [0, 0, 0, 0];
        // Wait for modal to render DOM, then update chart
        setTimeout(() => {
          this.chartOptions.series = [40, 60, 78, 90];
        }, 100); // adjust delay if needed
      } else {
        // First dismiss the modal
        if (this.submitModalRef) {
          this.submitModalRef.dismiss().then(() => {
            // Then navigate
            this.router.navigate(['/tabs/tab3']);
          });
        } else {
          this.router.navigate(['/tabs/tab3']);
        }
      }
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

  randomSeries() {
    this.chartOptions.series = Array.from({ length: 4 }, () => Math.floor(Math.random() * 101));
  }
}
