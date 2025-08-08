import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WriteVoiceOfTheImageComponent } from './write-voice-of-the-image.component';

describe('WriteVoiceOfTheImageComponent', () => {
  let component: WriteVoiceOfTheImageComponent;
  let fixture: ComponentFixture<WriteVoiceOfTheImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteVoiceOfTheImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WriteVoiceOfTheImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
