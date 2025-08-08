import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private baseUrl: string = '/api/v1';

  constructor() { }

  giveFeedBackToVoice(): string {
    return this.baseUrl + "/give-feedback-to-voice";
  }
}
