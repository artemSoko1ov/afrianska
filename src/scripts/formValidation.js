export default class FormValidation {

  selectors = {
    form: "[data-js-form]",
    fieldErrors: "[data-js-form-field-errors]",
  };

  constructor() {
    this.formElement = document.querySelector(this.selectors.form);
    this.fieldElements = this.formElement.querySelectorAll("input, textarea");
    this.bindEvents();
  }

  validateField = (field) => {
    const errorElement = field.parentElement.querySelector(this.selectors.fieldErrors);
    let errorMessage = "";

    if (!field.value.trim()) {
      errorMessage = "Поле обязательно для заполнения";
    } else if (field.type === "email" && !this.isValidEmail(field.value)) {
      errorMessage = "Введите корректный email";
    }

    errorElement.textContent = errorMessage;
    return errorMessage === "";
  };

  isValidEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  validateForm = () => {
    let isFormValid = true;

    this.fieldElements.forEach((field) => {
      const isValid = this.validateField(field);
      if (!isValid && isFormValid) {
        field.focus();
        isFormValid = false;
      }
    });

    return isFormValid;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const isFormValid = this.validateForm();
    if (!isFormValid) {
      return; 
    }

    const submitButton = this.formElement.querySelector('[type="submit"]');
    submitButton.disabled = true;

    try {
      const response = await fetch("https://d-element.ru/", {
        method: "POST",
        body: new FormData(this.formElement),
      });
      this.formElement.reset();
      this.showMessage("Your message successfully sent");
    } catch (error) {
      this.showMessage("Mistake. Please try again later.");
    }
  };

  showMessage = (message) => {
    const originalHTML = this.formElement.innerHTML;

    this.formElement.innerHTML = `<p>${message}</p>`;

    setTimeout(() => {
      this.formElement.innerHTML = originalHTML;
      this.fieldElements = this.formElement.querySelectorAll("input, textarea");
      this.bindEvents();
    }, 3000);
  };

  bindEvents() {
    this.formElement.addEventListener("submit", this.handleSubmit);

    this.fieldElements.forEach((field) => {
      field.addEventListener("blur", () => this.validateField(field));
    });
  }
}