/**
 *
 */
export class HeaderDom {
  rootElement: HTMLElement

  buttonBurgerMenuOpenElement: HTMLButtonElement | null

  private readonly selectors = {
    root: '[data-js-header]',
    buttonBurgerMenuOpen: '[data-js-burger-menu-button-open]',
  }

  constructor() {
    const root = document.querySelector<HTMLElement>(this.selectors.root)
    if (!root) {
      throw new Error(`HeaderDom: root element not found for selector "${this.selectors.root}"`)
    }
    this.rootElement = root
    this.buttonBurgerMenuOpenElement = this.rootElement.querySelector(
      this.selectors.buttonBurgerMenuOpen,
    )
    if (!this.buttonBurgerMenuOpenElement) {
      throw new Error(`HeaderDom: burger button not found`)
    }
  }
}
