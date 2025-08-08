import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private baseUrl: string = 'http://192.168.1.109:8099/api/v1';

  constructor() { }

  giveFeedBackToVoice(): string {
    return this.baseUrl + "/give-feedback-to-voice";
  }
}
