import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
/**
 * Validador async que simula una verificación de email único.
 * En una aplicación real, esto sería una llamada HTTP a `GET /api/email-check/:email`.
 * 
 * Mientras valida, el control entra en estado PENDING.
 * Retorna:
 * - null si el email está disponible
 * - { emailTaken: true } si el email ya existe
 */



export function emailUniqueValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    // Si no hay valor, no validar

    if (!control.value) {
      return of(null);
    }
    // Simular delay de validación async (500ms)

    return of(control.value).pipe(
      delay(5500),
      map((email: string) => {
        // Lista de emails ya registrados (en la práctica, vendría de una API)
        const takenEmails = [
          'user@example.com',
          'admin@example.com',
          'test@example.com',
        ];

        return takenEmails.includes(email.toLowerCase())
          ? { emailTaken: true }
          : null;
      })
    );
  };
}