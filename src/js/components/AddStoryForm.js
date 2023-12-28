import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AddStoryForm extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
      <form class="d-flex flex-column align-items-center justify-content-center 
        w-100 mb-3 p-3 shadow rounded border border-1" novalidate>                    
        <textarea-with-validation
              class="w-100"
              inputId="description"
              invalidFeedbackMessage="Required"              
              placeholder="Your story"              
              required >
        </textarea-with-validation>
        <input id="photoUrl" class="form-control w-100 mb-3" type="file" accept="image/*" required />             
        <button class="btn btn-outline-primary w-100" type="submit">
          ${msg(`Post`)}
        </button>        
      </form>
    `;
  }
}
customElements.define('add-story-form', AddStoryForm);