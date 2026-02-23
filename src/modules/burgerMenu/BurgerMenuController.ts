import { OverlayController } from '@/modules/overlay/OverlayController.ts'
import { BurgerMenuDom } from './BurgerMenuDom.ts'
import { burgerMenuClasses } from './constants.ts'
/**
 *
 */
export class BurgerMenuController {
  dom: BurgerMenuDom

  overlay: OverlayController

  constructor() {
    this.dom = new BurgerMenuDom()
    this.overlay = new OverlayController()

    this.bindEvents()
    this.overlay.onClick(this.close)
  }

  open() {
    this.dom.rootElement.classList.add(burgerMenuClasses.isOpen)
    this.dom.rootElement.removeAttribute('inert')
    this.dom.buttonBurgerMenuCloseElement?.focus()
    this.overlay.open()
  }

  close = () => {
    this.dom.rootElement.classList.remove(burgerMenuClasses.isOpen)
    this.dom.rootElement.setAttribute('inert', '')
    this.overlay.close()
  }

  private bindEvents() {
    this.dom.buttonBurgerMenuCloseElement?.addEventListener('click', this.close)
  }
}
