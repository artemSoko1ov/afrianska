import { overlayClasses } from '@/modules/overlay/constants.ts'
import { OverlayDom } from '@/modules/overlay/OverlayDom.ts'

/**
 *
 */
export class OverlayController {
  dom: OverlayDom

  private onClickCallback: (() => void) | null = null

  constructor() {
    this.dom = new OverlayDom()

    this.bindEvents()
  }

  open() {
    this.dom.rootElement.classList.add(overlayClasses.isActive)
    document.documentElement.classList.add(overlayClasses.isLock)
    document.querySelector('#app')?.setAttribute('inert', '')
  }

  close() {
    this.dom.rootElement.classList.remove(overlayClasses.isActive)
    document.documentElement.classList.remove(overlayClasses.isLock)
    document.querySelector('#app')?.removeAttribute('inert')
  }

  onClick(callback: () => void) {
    this.onClickCallback = callback
  }

  private handleClick = () => {
    this.onClickCallback?.()
  }

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.onClickCallback?.()
    }
  }

  private bindEvents() {
    this.dom.rootElement.addEventListener('click', this.handleClick)
    document.addEventListener('keydown', this.handleKeydown)
  }
}
