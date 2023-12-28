import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    id: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },
    label: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
    updateWhenLocaleChanges(this);

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
          value=${this.value || nothing}
          ?required=${this.required}
          accept=".jpg, .jpeg, .png"
          @input=${(e) => (this.value = e.target.value)}
        />
        <label for=${this.id}>${msg(this.label)}</label>
        ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${msg(this.invalidFeedbackMessage)}</div>
      </div>      
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html`<div class="valid-feedback"> ${msg(this.validFeedbackMessage)}</div> `;
    }

    return html``;
  }
}

customElements.define('input-with-validation', InputWithValidation);