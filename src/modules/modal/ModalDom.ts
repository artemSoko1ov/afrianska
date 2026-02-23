/**
 *
 */
export class ModalDom {
  rootElement: HTMLElement

  buttonModalCloseElement: HTMLButtonElement | null

  buttonModalOpenElement: HTMLButtonElement | null

  private readonly selectors = {
    root: '[data-js-modal]',
    buttonModalClose: '[data-js-modal-button-close]',
    buttonModalOpen: '[data-js-modal-button-open]',
  }

  constructor() {
    const root = document.querySelector<HTMLElement>(this.selectors.root)
    if (!root) {
      throw new Error(`ModalDom: root element not found for selector "${this.selectors.root}"`)
    }
    this.rootElement = root
    this.buttonModalCloseElement = this.rootElement.querySelector(this.selectors.buttonModalClose)
    if (!this.buttonModalCloseElement) {
      throw new Error(`ModalDom: button close not found`)
    }
    this.buttonModalOpenElement = document.querySelector(this.selectors.buttonModalOpen)
    if (!this.buttonModalOpenElement) {
      throw new Error(`ModalDom: button 'Let's talk' not found`)
    }
  }
}
