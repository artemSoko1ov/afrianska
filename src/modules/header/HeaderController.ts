import { BurgerMenuController } from '@/modules/burgerMenu'
import { headerClasses } from './constants.ts'
import { HeaderDom } from './HeaderDom.ts'
/**
 *
 */
export class HeaderController {
  dom: HeaderDom

  burgerMenuController: BurgerMenuController

  constructor(burgerMenuController = new BurgerMenuController()) {
    this.dom = new HeaderDom()
    this.burgerMenuController = burgerMenuController

    this.fixHeader()
    this.bindEvents()
  }

  fixHeader = () => {
    const scrollY = window.scrollY
    if (scrollY > 0) {
      this.dom.rootElement.classList.add(headerClasses.isFixed)
    } else {
      this.dom.rootElement.classList.remove(headerClasses.isFixed)
    }
  }

  private openBurgerMenu = () => {
    this.burgerMenuController.open()
  }

  private bindEvents() {
    window.addEventListener('scroll', this.fixHeader)
    this.dom.buttonBurgerMenuOpenElement?.addEventListener('click', this.openBurgerMenu)
  }
}
