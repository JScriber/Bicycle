import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeJourneyComponent } from './type-journey.component';

describe('TypeJourneyComponent', () => {
  let component: TypeJourneyComponent;
  let fixture: ComponentFixture<TypeJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
