import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent {

  constructor(private readonly router: Router) {}

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  /** Submit the form. */
  submit() {
    if (this.form.valid) {
      this.router.navigate(['/app']);
    }
  }

  googleAuthentification(): void {
    this.router.navigate(['/app']);
  }
}
