import { modalClasses } from '@/modules/modal/constants.ts'
import { OverlayController } from '@/modules/overlay'
import { ModalDom } from './ModalDom.ts'

/**
 *
 */
export class ModalController {
  dom: ModalDom

  overlay: OverlayController

  constructor() {
    this.dom = new ModalDom()
    this.overlay = new OverlayController()

    this.bindEvents()
    this.overlay.onCloseCallback(this.close)
  }

  open = () => {
    this.dom.rootElement.classList.add(modalClasses.isOpen)
    this.dom.rootElement.removeAttribute('inert')
    this.dom.rootElement.setAttribute('aria-hidden', 'false')
    this.overlay.open()

    setTimeout(() => {
      this.dom.rootElement
        .querySelector<HTMLInputElement | HTMLTextAreaElement>(`[data-js-form-field='full-name']`)
        ?.focus()
    }, 50)
  }

  close = () => {
    this.dom.rootElement.classList.remove(modalClasses.isOpen)
    this.dom.rootElement.setAttribute('inert', '')
    this.dom.rootElement.setAttribute('aria-hidden', 'true')
    this.overlay.close()
  }

  private bindEvents() {
    this.dom.buttonModalCloseElement?.addEventListener('click', this.close)
    this.dom.buttonModalOpenElement?.addEventListener('click', this.open)
  }
}
