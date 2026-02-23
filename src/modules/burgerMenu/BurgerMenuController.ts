import { BurgerMenuDom } from './BurgerMenuDom.ts'
import { burgerMenuClasses } from './constants.ts'
/**
 *
 */
export class BurgerMenuController {
  dom: BurgerMenuDom

  constructor() {
    this.dom = new BurgerMenuDom()

    this.bindEvents()
  }

  open() {
    this.dom.rootElement.classList.add(burgerMenuClasses.isOpen)
    this.dom.rootElement.removeAttribute('inert')
    this.dom.buttonBurgerMenuCloseElement?.focus()
  }

  close = () => {
    this.dom.rootElement.classList.remove(burgerMenuClasses.isOpen)
    this.dom.rootElement.setAttribute('inert', '')
  }

  private bindEvents() {
    this.dom.buttonBurgerMenuCloseElement?.addEventListener('click', this.close)
  }
}
