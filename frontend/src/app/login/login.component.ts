import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})

export class LoginComponent {

  protected loginForm = this.formBuilder.group({
    login: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    password: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  public constructor(
    private formBuilder: NonNullableFormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {}

  protected get formControls(): typeof this.loginForm.controls {
    return this.loginForm.controls;
  }

  protected hasErrors(field: keyof typeof this.loginForm.value): boolean {
    return Boolean(
      this.loginForm.get(field)?.dirty && this.loginForm.get(field)?.errors,
    );
  }

  protected onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    const data = this.loginForm.getRawValue();

    this.auth
      .login(data.login, data.password).subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}