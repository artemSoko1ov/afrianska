import type { FormFieldName } from './types.ts'

export class FormDom {
  rootElement: HTMLFormElement

  submitButtonElement: HTMLButtonElement

  private readonly selectors = {
    root: '[data-js-form]',
    submitButton: '[data-js-form-button-submit]',
    fieldErrorByName: (name: 'full-name' | 'email' | 'message') =>
      `[data-js-form-field-errors="${name}"]`,
  }

  constructor() {
    const root = document.querySelector<HTMLFormElement>(this.selectors.root)
    if (!root) {
      throw new Error(`FormDom: root element not found for selector "${this.selectors.root}"`)
    }
    this.rootElement = root

    const submitButton = this.rootElement.querySelector<HTMLButtonElement>(
      this.selectors.submitButton,
    )
    if (!submitButton) {
      throw new Error(
        `FormDom: submit button not found for selector "${this.selectors.submitButton}"`,
      )
    }
    this.submitButtonElement = submitButton
  }

  getFieldElement(name: FormFieldName) {
    const field = this.rootElement.querySelector(`[name="${name}"]`) as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null

    if (!field) {
      throw new Error(`Field "${name}" not found`)
    }

    return field
  }

  getFieldErrorElement(name: FormFieldName) {
    const element = this.rootElement.querySelector(
      `[data-js-form-field-errors="${name}"]`,
    ) as HTMLElement | null

    if (!element) {
      throw new Error(`Error element for "${name}" not found`)
    }

    return element
  }
}
