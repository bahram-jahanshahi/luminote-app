import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexChart, ApexNonAxisChartSeries, ApexPlotOptions, ChartComponent} from "ng-apexcharts";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent, IonFab, IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonRow, IonSegment, IonSegmentButton,
  IonSelect,
  IonSelectOption, IonSpinner,
  IonText,
  IonTextarea,
  IonTitle, IonToolbar
} from "@ionic/angular/standalone";
import {bulbOutline, hourglassOutline, barbellOutline} from "ionicons/icons";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {GiveFeedbackToVoiceService} from "../../services/give-feedback-to-voice.service";
import {GiveFeedbackToVoiceUseCaseCommand} from "../../domain/give-feedback-to-voice-use-case-command";
import {UserService} from "../../../../core/services/user.service";
import {FeedBackToVoice} from "../../domain/feed-back-to-voice";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  colors: string[];
};

@Component({
    selector: 'app-write-voice-of-the-image',
    templateUrl: './write-voice-of-the-image.component.html',
    styleUrls: ['./write-voice-of-the-image.component.scss'],
  imports: [
    ChartComponent,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTextarea,
    IonTitle,
    IonToolbar,
    ReactiveFormsModule,
    IonFab,
    IonFabButton,
    IonSegment,
    IonSegmentButton,
    IonSpinner
  ]
})
export class WriteVoiceOfTheImageComponent  implements OnInit {

  voiceOfImageFormControl = new FormControl('', Validators.required);
  responseFeedback: string = '';
  responseSuggestions: string[] = [];
  waitForGivingFeedBack = false;

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

  constructor(private router: Router, private giveFeedbackToVoiceService: GiveFeedbackToVoiceService, private userService: UserService) {
    addIcons({bulbOutline, hourglassOutline, barbellOutline});
  }

  ngOnInit(): void {
      console.log("WriteVoiceOfTheImageComponent initialized");
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

  giveFeedbackToVoice() {
    var voiceOfImage = this.voiceOfImageFormControl.value;

    if (!voiceOfImage || voiceOfImage.trim() === '') {
      console.error('Voice of the image is empty');
      return;
    }
    const userId = this.userService.getUserId();
    const imageId = 100; // This should be replaced with the actual image ID you want to use
    this.waitForGivingFeedBack = true;
    this.giveFeedbackToVoiceService
      .execute(new GiveFeedbackToVoiceUseCaseCommand(userId, imageId, voiceOfImage))
      .subscribe({
        next: (response) => {
          this.waitForGivingFeedBack = false;
          console.log('Feedback submitted successfully:', response);
          this.responseFeedback = response.feedback;
          this.responseSuggestions = response.suggestions;
          this.showRevisionModal(true);
        },
        error: (error) => {
          this.waitForGivingFeedBack = false;
          alert(error.message)
          console.error('Error submitting feedback:', error);
        }
      });
  }

  startVoiceRecording() {

  }
}
