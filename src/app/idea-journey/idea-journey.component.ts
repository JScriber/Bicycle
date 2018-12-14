import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-idea-journey',
  templateUrl: './idea-journey.component.html',
  styleUrls: ['./idea-journey.component.scss']
})
export class IdeaJourneyComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<IdeaJourneyComponent>) {
    console.log('displayed');
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
