/**
 *
 */
export class BurgerMenuDom {
  rootElement: HTMLElement

  buttonBurgerMenuCloseElement: HTMLButtonElement | null

  private readonly selectors = {
    root: '[data-js-burger-menu]',
    buttonBurgerMenuClose: '[data-js-burger-menu-button-close]',
  }

  constructor() {
    const root = document.querySelector<HTMLElement>(this.selectors.root)
    if (!root) {
      throw new Error(`BurgerMenuDom: root element not found for selector "${this.selectors.root}"`)
    }
    this.rootElement = root
    this.buttonBurgerMenuCloseElement = this.rootElement.querySelector(
      this.selectors.buttonBurgerMenuClose,
    )
    if (!this.buttonBurgerMenuCloseElement) {
      throw new Error(`BurgerMenuDom: burger button not found`)
    }
  }
}
