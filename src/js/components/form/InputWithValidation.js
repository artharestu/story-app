import { html, nothing } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    id: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    label: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.checkAvailabilityProperty();
    updateWhenLocaleChanges(this);

    this.type = 'text';
    this.required = false;
  }

  checkAvailabilityProperty() {
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
          ${this.type === 'file' ? 'accept="image/*"' : nothing}
          ?required=${this.required}
          @input=${(e) => (this.value = e.target.value)}
        />
        <label for=${this.id}>${msg(this.label)}</label>              
        <div class="invalid-feedback"> ${msg(this.invalidFeedbackMessage)}</div>
        ${this.validFeedbackTemplate()}        
      </div>      
    `;
  }

  validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html`<div class="valid-feedback"> ${msg(this.validFeedbackMessage)}</div> `;
    }
    return html``;
  }

  passwordTemplate() {
    return html`
      <button class="btn btn-outline-primary" type="button" id="viewpassword">
          <i class="bi bi-eye-slash"></i>
        </button>
    `;
  }
}
customElements.define('input-with-validation', InputWithValidation);
