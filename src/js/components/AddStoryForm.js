import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class AddStoryForm extends LitWithoutShadowDom {
  render() {
    return html`
      <form
        class="d-flex flex-column align-items-center justify-content-center w-100 mb-3 p-3 
        shadow rounded border border-1 was-validated" novalidate>                                
        <input-with-validation
              type="text"
              id="name"
              class="w-100"
              placeholder="Your Name"
              label="Your Name"
              invalidFeedbackMessage="Wajib Diisi"
              required >
        </input-with-validation>       
        <input-with-validation
              type="text"
              id="photoUrl"
              class="w-100"
              placeholder="Photo Category"
              label="Photo Category"
              invalidFeedbackMessage="Wajib Diisi"
              required >
        </input-with-validation>
        <textarea-with-validation
              class="w-100"
              inputId="description"
              invalidFeedbackMessage="Wajib diisi"
              placeholder="Your story"              
              required >
        </textarea-with-validation>                        
        <button class="btn btn-outline-primary w-100" type="submit">
          Post
        </button>
      </form>
    `;
  }
}
customElements.define('add-story-form', AddStoryForm);