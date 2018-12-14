import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJourneyComponent } from './info-journey.component';

describe('InfoJourneyComponent', () => {
  let component: InfoJourneyComponent;
  let fixture: ComponentFixture<InfoJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
