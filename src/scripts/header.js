export default class Header {

  selectors = {
    root: "[data-js-header]",
  };

  stateClasses = {
    isFixed: "is-fixed",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);

    this.bindEvents();
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.rootElement.classList.add(this.stateClasses.isFixed);
    } else {
      this.rootElement.classList.remove(this.stateClasses.isFixed);
    }
  };

  bindEvents() {
    window.addEventListener("scroll", this.handleScroll);
  }

}