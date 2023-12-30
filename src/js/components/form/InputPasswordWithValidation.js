import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputPasswordWithValidation extends LitWithoutShadowDom {
  static properties = {
    required: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },
    label: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.checkAvailabilityProperty();

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
      <div class="form-floating mb-3 input-group input-group-lg w-100">        
        <input          
          class="form-control"
          type="password"
          minlength="8"
          id="validationCustomPassword"
          value=${this.value || nothing}          
          ?required=${this.required}
          @input=${(e) => (this.value = e.target.value)}
        />
        
        <label for=${this.id}>${this.label}</label>

        <button class="btn btn-outline-primary border-1" type="button" id="viewpassword">
          <i class="bi bi-eye-slash"></i>
        </button>
        
        <div class="invalid-feedback invalid-feedback-password" data-error-empty="Password cannot be empty"
          data-error-length="Password must be at least 8 characters">
        </div>
        
        <div class="valid-feedback">Looks good!</div> 
      </div>      
    `;
  }
}
customElements.define('input-password-with-validation', InputPasswordWithValidation);
