import { messagesError } from './constants.ts'
import type { FormErrors, FormFieldName, FormValues } from './types.ts'

export class FormValidator {
  validate(data: FormValues): FormErrors {
    const errors: FormErrors = {}

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

  validateRequired(name: FormFieldName, value: string, errors: FormErrors) {
    if (!value.trim()) {
      errors[name] = messagesError.required
    }
  }

  isEmailValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  }
}
