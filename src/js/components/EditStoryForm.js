import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class EditStoryForm extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
      <form
        class="d-flex flex-column align-items-center justify-content-center w-100 mb-3 p-3 shadow rounded border border-1">
        <input class="form-control form-control-lg w-100 mb-3" type="text" placeholder="Your Name" id="name" />
        <input class="form-control form-control-lg w-100 mb-3" type="text" id="photoUrl"
          placeholder="Try 'nature', 'food', 'history', 'animal'..." />
        <textarea class="form-control form-control-lg w-100 mb-3" type="text" placeholder="Your story..."
          id="description" rows="10"></textarea>
        <button class="btn btn-outline-primary w-100 mb-1" type="submit" id="edit">
          ${msg('Edit')}
        </button>
        <button class="btn btn-outline-danger w-100" type="button" id="cancel">
          ${msg('Cancel')}
        </button>
      </form>
      `;
  }
}

customElements.define('edit-story-form', EditStoryForm);