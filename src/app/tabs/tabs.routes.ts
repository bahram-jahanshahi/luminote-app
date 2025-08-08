import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {
  WriteVoiceOfTheImageComponent
} from "../usecases/write_voice_of_the_image/components/write-voice-of-the-image/write-voice-of-the-image.component";

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      /*{
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },*/
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
          path: 'write-voice-of-the-image',
        component: WriteVoiceOfTheImageComponent
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
