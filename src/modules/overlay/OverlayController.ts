import { overlayClasses } from '@/modules/overlay/constants.ts'
import { OverlayDom } from '@/modules/overlay/OverlayDom.ts'

/**
 *
 */
export class OverlayController {
  dom: OverlayDom

  lastFocusedBeforeOpen: HTMLElement | null

  private onClickCallback: (() => void) | null = null

  constructor() {
    this.dom = new OverlayDom()
    this.lastFocusedBeforeOpen = null

    this.bindEvents()
  }

  open() {
    this.lastFocusedBeforeOpen = document.activeElement as HTMLElement | null
    this.dom.rootElement.classList.add(overlayClasses.isActive)
    document.documentElement.classList.add(overlayClasses.isLock)
    document.querySelector('#app')?.setAttribute('inert', '')
  }

  close() {
    this.dom.rootElement.classList.remove(overlayClasses.isActive)
    document.documentElement.classList.remove(overlayClasses.isLock)
    document.querySelector('#app')?.removeAttribute('inert')
    this.lastFocusedBeforeOpen?.focus()
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
