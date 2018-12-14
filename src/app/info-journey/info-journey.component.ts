import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { IdeaJourneyComponent } from '../idea-journey/idea-journey.component';

@Component({
  selector: 'app-info-journey',
  templateUrl: './info-journey.component.html',
  styleUrls: ['./info-journey.component.scss']
})
export class InfoJourneyComponent implements OnInit {

  form = new FormGroup({
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    allure: new FormControl('balade', Validators.required),
    bike: new FormControl('vtt', Validators.required)
  });

  constructor(private readonly router: Router,
              private bottomSheet: MatBottomSheet) {}


  openBottomSheet(): void {
    this.bottomSheet.open(IdeaJourneyComponent);
  }

  ngOnInit() {}

  /** Submit the form. */
  submit(): void {
    if (this.form.valid) {
      this.openBottomSheet();
    }
  }

}
