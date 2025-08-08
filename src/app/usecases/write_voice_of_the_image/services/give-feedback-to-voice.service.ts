import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../../../core/services/url.service";
import {Observable} from "rxjs";
import {FeedBackToVoice} from "../domain/feed-back-to-voice";
import {GiveFeedbackToVoiceUseCaseCommand} from "../domain/give-feedback-to-voice-use-case-command";

@Injectable({
  providedIn: 'root'
})
export class GiveFeedbackToVoiceService {

  constructor(private https: HttpClient, private urlService: UrlService) { }

  execute(command: GiveFeedbackToVoiceUseCaseCommand): Observable<FeedBackToVoice> {
    return this.https.post<FeedBackToVoice>(this.urlService.giveFeedBackToVoice(), command)
  }
}
