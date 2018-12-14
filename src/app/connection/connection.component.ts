import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {

  constructor(private readonly router: Router) {}

  form: FormGroup = new FormGroup({
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
