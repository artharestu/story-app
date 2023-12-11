import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TextareaWithValidation extends LitWithoutShadowDom {
  static properties = {
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    placeholder: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.rows = 3;
    this.required = false;
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      <div class="form-floating mb-3">
        <textarea
          id=${this.inputId || nothing}
          class="form-control form-control-lg w-100 mb-3"          
          value=${this.value || nothing}
          placeholder=${this.placeholder || nothing}          
          ?required=${this.required}
          @input=${(e) => (this.value = e.target.value)}
          style="height: 200px"
        ></textarea>
        <label for="${this.inputId}">${this.placeholder}</label>
        ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>      
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
    }

    return html``;
  }
}

customElements.define('textarea-with-validation', TextareaWithValidation);