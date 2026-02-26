import { messagesError } from './constants.ts'
import type { TFormErrors, TFormFieldName, TFormValues } from './types.ts'

/**
 *
 */
export class FormValidator {
  validate(data: TFormValues): TFormErrors {
    const errors: TFormErrors = {}

    this.validateRequired('full-name', data['full-name'], errors)
    this.validateRequired('email', data.email, errors)
    this.validateRequired('message', data.message, errors)

    if (!errors['full-name'] && data['full-name'].trim().length < 2) {
      errors['full-name'] = messagesError.minNameLength
    }

    if (!errors.email && !this.isEmailValid(data.email)) {
      errors.email = messagesError.invalidEmail
    }

    if (!errors.message && data.message.trim().length < 10) {
      errors.message = messagesError.minMessageLength
    }

    return errors
  }

  private validateRequired(name: TFormFieldName, value: string, errors: TFormErrors) {
    if (!value.trim()) {
      errors[name] = messagesError.required
    }
  }

  private isEmailValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  }
}
