import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    id: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    placeholder: { type: String, reflect: true },
    value: { type: String, reflect: true },
    label: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.type = 'text';
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
        <input
          id=${this.id || nothing}
          class="form-control"
          type=${this.type}
          placeholder=${this.placeholder || nothing}
          value=${this.value || nothing}
          ?required=${this.required}          
          @input=${(e) => (this.value = e.target.value)}
        />
        <label for=${this.id}>${this.label}</label>
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

customElements.define('input-with-validation', InputWithValidation);