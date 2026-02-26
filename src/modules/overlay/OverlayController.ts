import { overlayClasses } from '@/modules/overlay/constants.ts'
import { OverlayDom } from '@/modules/overlay/OverlayDom.ts'

/**
 *
 */
export class OverlayController {
  dom: OverlayDom

  lastFocusedBeforeOpen: HTMLElement | null

  private onClose: (() => void) | null = null

  constructor() {
    this.dom = new OverlayDom()
    this.lastFocusedBeforeOpen = null

    this.bindEvents()
  }

  open() {
    this.lastFocusedBeforeOpen = document.activeElement as HTMLElement | null
    this.dom.rootElement.classList.add(overlayClasses.isActive)
    document.documentElement.classList.add(overlayClasses.isLock)
    this.dom.mainAppElement.setAttribute('inert', '')
  }

  close() {
    this.dom.rootElement.classList.remove(overlayClasses.isActive)
    document.documentElement.classList.remove(overlayClasses.isLock)
    this.dom.mainAppElement.removeAttribute('inert')
    this.lastFocusedBeforeOpen?.focus()
  }

  onCloseCallback(callback: () => void) {
    this.onClose = callback
  }

  private handleClick = () => {
    this.onClose?.()
  }

  private handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.onClose?.()
    }
  }

  private bindEvents() {
    this.dom.rootElement.addEventListener('click', this.handleClick)
    document.addEventListener('keydown', this.handleKeydown)
  }
}
