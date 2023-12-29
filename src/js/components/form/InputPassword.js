import { html } from 'lit';
import { msg } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class inputPassword extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    id: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.checkAvailabilityProperty();

    this.type = 'password';
    this.required = true;
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
      <div class="input-group input-group-lg mb-3">  
        <input type="password" class="form-control" 
          aria-label="Password" 
          aria-describedby="viewpassword"
          id="validationCustomPassword"  
        >
        <button class="btn btn-outline-primary" type="button" id="viewpassword">
          <i class="bi bi-eye-slash"></i>
        </button>
      </div>     
    `;
  }

  validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html`<div class="valid-feedback"> ${msg(this.validFeedbackMessage)}</div> `;
    }

    return html``;
  }
}
customElements.define('input-password', inputPassword);
