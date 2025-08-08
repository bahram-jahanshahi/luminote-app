export class GiveFeedbackToVoiceUseCaseCommand {

  userId: number;
  imageId: number;
  voiceOfImageWrittenByUser: string;

  constructor(userId: number, imageId: number, voiceOfImageWrittenByUser: string) {
    this.userId = userId;
    this.imageId = imageId;
    this.voiceOfImageWrittenByUser = voiceOfImageWrittenByUser;
  }
}
