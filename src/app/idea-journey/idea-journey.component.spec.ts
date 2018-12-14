import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaJourneyComponent } from './idea-journey.component';

describe('IdeaJourneyComponent', () => {
  let component: IdeaJourneyComponent;
  let fixture: ComponentFixture<IdeaJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
