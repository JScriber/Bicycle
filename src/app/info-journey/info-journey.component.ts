import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private readonly router: Router) {}

  ngOnInit() {}

  /** Submit the form. */
  submit(): void {
    if (this.form.valid) {
      this.router.navigate(['propositions']);
    }
  }

}
