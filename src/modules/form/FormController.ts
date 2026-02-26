import { messagesInfo, stateClasses } from '@/modules/form/constants.ts'
import { FormDom } from './FormDom.ts'
import { FormService } from './FormService.ts'
import { FormValidator } from './FormValidator.ts'
import type { TFormErrors, TFormFieldName, TFormValues } from './types.ts'

/**
 *
 */
export class FormController {
  dom: FormDom

  validator: FormValidator

  service: FormService

  private readonly fieldNames: TFormFieldName[] = ['full-name', 'email', 'message']

  constructor() {
    this.dom = new FormDom()
    this.validator = new FormValidator()
    this.service = new FormService()

    this.bindEvents()
  }

  private getTFormValues(): TFormValues {
    const formData = new FormData(this.dom.rootElement)

    return {
      'full-name': String(formData.get('full-name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }
  }

  handleSubmit = async (event: Event) => {
    event.preventDefault()
    this.clearErrors()

    const data = this.getTFormValues()
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

  async submitData(data: TFormValues) {
    this.dom.submitButtonElement.disabled = true

    try {
      await this.service.send(data)
      this.handleSubmitSuccess()
    } catch {
      this.dom.submitButtonElement.textContent = messagesInfo.failed
    } finally {
      this.dom.submitButtonElement.disabled = false
    }
  }

  private handleSubmitSuccess() {
    this.dom.rootElement.reset()
    this.dom.submitButtonElement.textContent = messagesInfo.success

    setTimeout(() => {
      this.dom.closeModal()
    }, 3000)
  }

  clearErrors() {
    this.fieldNames.forEach((name) => {
      const field = this.dom.getFieldElement(name)
      const errorElement = this.dom.getFieldErrorElement(name)
      field.removeAttribute('aria-invalid')
      errorElement.textContent = ''
    })
  }

  renderErrors(errors: TFormErrors) {
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
