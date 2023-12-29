import { html, nothing } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    id: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },
    label: { type: String, reflect: true },
    ispassword: { type: Boolean, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.checkAvailabilityProperty();
    this.invalidFeedbackTemplate();
    updateWhenLocaleChanges(this);

    this.type = 'text';
    this.required = false;
    this.ispassword = false;
  }

  checkAvailabilityProperty() {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    console.log(this.ispassword);
    return html`
      <div class="form-floating mb-3 ${this.ispassword ? 'input-group input-group-lg' : ''}">        
        <input
          id=${this.id || nothing}
          class="form-control"
          type=${this.type}          
          value=${this.value || nothing}          
          ${this.type === 'file' ? 'accept="image/*"' : nothing}
          ${this.ispassword === true ? 'minlength="8"' : nothing}
          ?required=${this.required}                              
          @input=${(e) => (this.value = e.target.value)}
        />
        <label for=${this.id}>${msg(this.label)}</label>
        ${this.ispassword ? this.passwordTemplate() : nothing}        
        <div class="invalid-feedback"> ${msg(this.invalidFeedbackMessage)}</div>
        ${this.validFeedbackTemplate()}        
      </div>      
    `;
  }

  invalidFeedbackTemplate() {
    if (this.ispassword) {
      const inputPassword = document.getElementById('validationCustomPassword');
      inputPassword.addEventListener('input', () => {
        if (inputPassword.value === '') {
          inputPassword.setCustomValidity('Password cannot be empty');
        } else if (inputPassword.value.length < 8) {
          inputPassword.setCustomValidity('Password must be at least 8 characters');
        } else {
          inputPassword.setCustomValidity('');
        }
      });
      const invalidFeedback = document.querySelector('.invalid-feedback');
      inputPassword.addEventListener('input', () => {
        if (inputPassword.value === '') {
          invalidFeedback.textContent = 'Password cannot be empty';
        } else if (inputPassword.value.length < 8) {
          invalidFeedback.textContent = 'Password must be at least 8 characters';
        } else {
          invalidFeedback.textContent = '';
        }
      });
    }
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
