export default class Modal {

  selectors = {
    root: "[data-js-modal]",
    overlayModal: "[data-js-modal-overlay]",
    buttonOpen: "[data-js-modal-button-open]",
    buttonClose: "[data-js-modal-button-close]",
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    this.overlayModalElement = document.querySelector(this.selectors.overlayModal);
    this.rootElement = document.querySelector(this.selectors.root);
    this.openButtonElement = document.querySelector(this.selectors.buttonOpen);
    this.closeButtonElement = document.querySelector(this.selectors.buttonClose);

    this.bindEvents();
  }

  open = () => {
    this.overlayModalElement.classList.add(this.stateClasses.isActive);
    document.documentElement.classList.add(this.stateClasses.isLock);
    document.addEventListener("keydown", this.handleKeyDown);
  };

  close = () => {
    this.overlayModalElement.classList.remove(this.stateClasses.isActive);
    document.documentElement.classList.remove(this.stateClasses.isLock);
    document.removeEventListener("keydown", this.handleKeyDown);
  };

  handleOverlayClick = (event) => {
    if (event.target === this.overlayModalElement) {
      this.close();
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  bindEvents() {
    this.openButtonElement.addEventListener("click", this.open);
    this.closeButtonElement.addEventListener("click", this.close);
    this.overlayModalElement.addEventListener("click", this.handleOverlayClick);
  }
}
