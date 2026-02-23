/**
 *
 */
export class OverlayDom {
  rootElement: HTMLElement

  private readonly selectors = {
    root: '[data-js-overlay]',
  }

  constructor() {
    const root = document.querySelector<HTMLElement>(this.selectors.root)
    if (!root) {
      throw new Error(`OverlayDom: root element not found for selector "${this.selectors.root}"`)
    }
    this.rootElement = root
  }
}
