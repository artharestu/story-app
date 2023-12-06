import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class OffCanvasMenu extends LitWithoutShadowDom {
  render() {
    return html`
      <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">Navigation Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <button type="button" class="btn btn-outline-primary w-100 p-2 my-1" onclick="window.location.href='/'">
            Dasboard
          </button>
          <button type="button" class="btn btn-outline-primary w-100 p-2 my-1" onclick="window.location.href='/add.html'">
            Add Story
          </button>
          <button type="button" class="btn btn-outline-primary w-100 p-2 my-1" onclick="window.location.href='/about.html'">
            About Us
          </button>          
        </div>
      </div>
    `;
  }
}

customElements.define('offcanvas-menu', OffCanvasMenu);