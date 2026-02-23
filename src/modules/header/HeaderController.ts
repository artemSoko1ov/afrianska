import { headerClasses } from '@/modules/header/constants.ts'
import { HeaderDom } from '@/modules/header/HeaderDom.ts'

/**
 *
 */
export class HeaderController {
  dom: HeaderDom

  constructor() {
    this.dom = new HeaderDom()
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

  private bindEvents() {
    window.addEventListener('scroll', this.fixHeader)
  }
}
