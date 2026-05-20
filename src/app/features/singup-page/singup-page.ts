
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from './validators/password-match.validator';
import { emailUniqueValidator } from './validators/email-unique.validator';

@Component({
  selector: 'app-singup-page',
  imports: [ReactiveFormsModule],
  templateUrl: './singup-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingupPage {

  private fb = inject(FormBuilder);


  form = this.fb.group({
    email: ['', [Validators.required, Validators.email], [emailUniqueValidator()]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  },

    { validators: passwordMatchValidator }
  );

  get email() { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }
  get confirmPassword() { return this.form.get('confirmPassword')!; }

  private router = inject(Router);

  onSubmit(): void {
    if (this.form.invalid) {
      // Marcar todos los campos como touched para mostrar errores

      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();

    console.log('Datos del formulario:', formValue);

    // Por ahora, navegar a home
    this.router.navigate(['/']);
  }


}


