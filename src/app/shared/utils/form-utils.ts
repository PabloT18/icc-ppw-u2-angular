import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
    /**
     * Verifica si un campo es invalido y ha sido tocado.
     */
    static isValidField(form: FormGroup, fieldName: string): boolean {
        const control = form.controls[fieldName];
        return !!control?.errors && control.touched;
    }

    /**
     * Obtiene el mensaje de error de un campo.
     */
    static getFieldError(form: FormGroup, fieldName: string): string | null {
        const control = form.controls[fieldName];
        if (!control) {
            return null;
        }

        const errors = control.errors;
        if (!errors) {
            return null;
        }

        return FormUtils.getTextError(errors);
    }

    /**
     * Traduce el codigo de error a mensaje legible.
     */
    static getTextError(errors: ValidationErrors): string | null {
        for (const key of Object.keys(errors)) {
            switch (key) {
                case 'required':
                    return 'Este campo es requerido';

                case 'minlength': {
                    const minLengthError = errors['minlength'] as { requiredLength: number } | undefined;
                    return minLengthError ? `Minimo ${minLengthError.requiredLength} caracteres` : 'Error de validacion';
                }

                case 'maxlength': {
                    const maxLengthError = errors['maxlength'] as { requiredLength: number } | undefined;
                    return maxLengthError ? `Maximo ${maxLengthError.requiredLength} caracteres` : 'Error de validacion';
                }

                case 'min': {
                    const minError = errors['min'] as { min: number } | undefined;
                    return minError ? `Valor minimo: ${minError.min}` : 'Error de validacion';
                }

                case 'max': {
                    const maxError = errors['max'] as { max: number } | undefined;
                    return maxError ? `Valor maximo: ${maxError.max}` : 'Error de validacion';
                }

                case 'email':
                    return 'Formato de correo invalido';

                case 'pattern':
                    return 'Formato invalido';

                case 'emailTaken':
                    return 'Este correo ya esta registrado';

                case 'passwordMismatch':
                    return 'Las contrasenas no coinciden';

                default:
                    return 'Error de validacion';
            }
        }

        return null;
    }

    /**
     * Verifica si un elemento de FormArray es invalido.
     */
    static isValidFieldInArray(formArray: FormArray, index: number): boolean {
        const control = formArray.controls[index];
        return !!control?.errors && control.touched;
    }

    /**
     * Obtiene el mensaje de error de un elemento de FormArray.
     */
    static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
        if (formArray.controls.length === 0) {
            return null;
        }

        const errors = formArray.controls[index]?.errors;
        if (!errors) {
            return null;
        }

        return FormUtils.getTextError(errors);
    }
}
