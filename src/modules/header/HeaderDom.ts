/**
 *
 */
export class HeaderDom {
  rootElement: HTMLElement

  buttonBurgerMenuElement: HTMLButtonElement | null

  private readonly selectors = {
    root: '[data-js-header]',
    buttonBurgerMenu: '[data-js-burger-menu-button-open]',
  }

  constructor() {
    const root = document.querySelector<HTMLElement>(this.selectors.root)
    if (!root) {
      throw new Error(`HeaderDom: root element not found for selector "${this.selectors.root}"`)
    }
    this.rootElement = root
    this.buttonBurgerMenuElement = this.rootElement.querySelector(this.selectors.buttonBurgerMenu)
    if (!this.buttonBurgerMenuElement) {
      throw new Error(`HeaderDom: burger button not found`)
    }
  }
}
