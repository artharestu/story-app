import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class AddStoryButton extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
    <button class="btn btn-outline-primary my-3 w-100" type="button" id="addstory">
        ${msg(`Add Your Story`)}
    </button>
    `;
  }
}
customElements.define('add-story-button', AddStoryButton);