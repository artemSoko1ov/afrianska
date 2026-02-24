import { messagesInfo, stateClasses } from '@/modules/form/constants.ts'
import { FormService } from './FormService.ts'
import { FormValidator } from './FormValidator.ts'
import { FormDom } from './FromDom.ts'
import type { FormErrors, FormFieldName, FormValues } from './types.ts'

export class FormController {
  dom: FormDom

  validator: FormValidator

  service: FormService

  private readonly fieldNames: FormFieldName[] = ['full-name', 'email', 'message']

  constructor() {
    this.dom = new FormDom()
    this.validator = new FormValidator()
    this.service = new FormService()

    this.bindEvents()
  }

  handleSubmit = async (event: Event) => {
    event.preventDefault()
    this.clearErrors()

    const formData = new FormData(this.dom.rootElement)
    const data: FormValues = {
      'full-name': String(formData.get('full-name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }
    const errors = this.validator.validate(data)

    if (Object.keys(errors).length > 0) {
      this.renderErrors(errors)
      return
    }

    this.dom.submitButtonElement.classList.add(stateClasses.isLoading)
    try {
      await this.submitData(data)
    } finally {
      this.dom.submitButtonElement.classList.remove(stateClasses.isLoading)
    }
  }

  async submitData(data: FormValues) {
    try {
      this.dom.submitButtonElement.disabled = true
      await this.service.send(data)
      this.dom.rootElement.reset()
      this.dom.submitButtonElement.textContent = messagesInfo.success
      setTimeout(() => {
        document.querySelector<HTMLButtonElement>('[data-js-modal-button-close]')?.click()
      }, 3000)
    } catch {
      this.dom.submitButtonElement.textContent = messagesInfo.failed
    } finally {
      this.dom.submitButtonElement.disabled = false
    }
  }

  clearErrors() {
    this.fieldNames.forEach((name) => {
      const field = this.dom.getFieldElement(name)
      const errorElement = this.dom.getFieldErrorElement(name)
      field.removeAttribute('aria-invalid')
      errorElement.textContent = ''
    })
  }

  renderErrors(errors: FormErrors) {
    this.fieldNames.forEach((name) => {
      const message = errors[name]
      if (!message) {
        return
      }

      const field = this.dom.getFieldElement(name)
      const errorElement = this.dom.getFieldErrorElement(name)
      field.setAttribute('aria-invalid', 'true')
      errorElement.textContent = message
    })
  }

  private bindEvents() {
    this.dom.rootElement.addEventListener('submit', this.handleSubmit)
  }
}
