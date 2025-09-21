export default class BurgerMenu{
  selectors = {
    root: '[data-js-burger-menu]',
    overlayBurgerMenu: '[data-js-burger-menu-overlay]',
    buttonOpen: '[data-js-burger-menu-button-open]',
    buttonClose: '[data-js-burger-menu-button-close]',
  };

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  };

  constructor() {
    this.overlayBurgerMenuElement = document.querySelector(this.selectors.overlayBurgerMenu);
    this.rootElement = document.querySelector(this.selectors.root);
    this.openButtonElement = document.querySelector(this.selectors.buttonOpen);
    this.closeButtonElement = document.querySelector(this.selectors.buttonClose);

    this.bindEvents();
  }

  open = () => {
    this.overlayBurgerMenuElement.classList.add(this.stateClasses.isActive);
    document.documentElement.classList.add(this.stateClasses.isLock);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  close = () => {
    this.overlayBurgerMenuElement.classList.remove(this.stateClasses.isActive);
    document.documentElement.classList.remove(this.stateClasses.isLock);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleOverlayClick = (event) => {
    if (event.target === this.overlayBurgerMenuElement) {
      this.close();
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  bindEvents() {
    this.openButtonElement.addEventListener('click', this.open);
    this.closeButtonElement.addEventListener('click', this.close);
    this.overlayBurgerMenuElement.addEventListener('click', this.handleOverlayClick);
  }
}
