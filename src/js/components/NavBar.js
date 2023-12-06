import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavBar extends LitWithoutShadowDom {
  render() {
    return html`
      <nav class="navbar navbar-expand-lg bg-primary shadow-lg mb-3 p-3" style="height: 70px">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <a class="navbar-brand text-light h2" href="/">Story App</a>
          <button type="button" class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
            <i class="bi bi-list"></i> MENU
          </button>
        </div>
      </nav>
      <offcanvas-menu></offcanvas-menu>
    `;
  }
}

customElements.define('nav-bar', NavBar);