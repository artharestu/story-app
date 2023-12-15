import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
class OffCanvasMenu extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
      <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">
            ${msg(`Navigation Menu`)}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <button type="button" class="btn btn-outline-primary w-100 p-2 my-1" onclick="window.location.href='/'">
            ${msg(`Dasboard`)}
          </button>
          <button type="button" class="btn btn-outline-primary w-100 p-2 my-1" onclick="window.location.href='/add.html'">
            ${msg(`Add Story`)}
          </button>
          <button type="button" class="btn btn-outline-primary w-100 p-2 my-1" onclick="window.location.href='/about.html'">
            ${msg(`About Us`)}
          </button>
          <p class="mt-3">
            ${msg(`Choose your language: `)}
          </p>
          <locale-picker class="d-block w-100 my-1"></locale-picker>
        </div>
      </div>
    `;
  }
}

customElements.define('offcanvas-menu', OffCanvasMenu);