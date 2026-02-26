/**
 *
 */
export class OverlayDom {
  rootElement: HTMLElement

  mainAppElement: HTMLElement

  private readonly selectors = {
    root: '[data-js-overlay]',
    mainApp: '[data-js-app]',
  }

  constructor() {
    const root = document.querySelector<HTMLElement>(this.selectors.root)
    if (!root) {
      throw new Error(`OverlayDom: root element not found for selector "${this.selectors.root}"`)
    }
    this.rootElement = root

    const mainApp = document.querySelector<HTMLElement>(this.selectors.mainApp)
    if (!mainApp) {
      throw new Error(
        `OverlayDom: main app element not found for selector "${this.selectors.mainApp}"`,
      )
    }
    this.mainAppElement = mainApp
  }
}
