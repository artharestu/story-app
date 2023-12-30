import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class InputEmailWithValidation extends LitWithoutShadowDom {
  static properties = {
    id: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },
    label: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.required = false;
  }

  render() {
    return html`
      <div class="form-group form-floating mb-3">        
        <input type="email" 
          id="validationCustomRecordEmail"
          class="form-control" 
          id="validationCustomEmail" 
          required
          @input=${(e) => (this.value = e.target.value)}
        >
        <label for=${this.id}>${this.label}</label>

        <div class="invalid-feedback invalid-feedback-email" 
          data-error-email="Please enter a valid email address">
        </div>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      `;
  }
}

customElements.define('input-email-with-validation', InputEmailWithValidation);
