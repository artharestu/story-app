import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class DeleteStoryCard extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
    <main class="container d-flex flex-column align-items-center justify-content-center mt-5">
    <div class="card mb-3 border border-0 shadow mx-auto col-12 col-md-8 col-lg-6" id="card">
      <div class="card-body p-5">
        <div class="d-flex align-items-center mb-3">
            <div class="d-flex flex-column flex-grow-1 ps-2">
              <h5 class="card-title" id="name"></h5>
              <div class="d-flex align-items-center">                
                <small class="text-muted" ></small>
                <formatted-date id="date"></formatted-date>
                <i class="bi bi-globe-asia-australia ms-2"></i>
              </div>
            </div>
        </div>
        <img class="card-img-top mb-3 rounded w-100" id="image">
        <i class="bi bi-suit-heart me-2"></i>
        <i class="bi bi-chat me-2"></i>
        <i class="bi bi-send me-2"></i>
        <p class="card-text" id="description"></p>
        <div class="border border-primary rounded p-3">
          <h4 class="card-text text-center my-3">
            ${msg('Are you sure you want to delete this story?')}
          </h4>
          <button class="btn btn-outline-primary w-100" type="button" id="deletebutton">
            ${msg('Yes, delete')}
          </button>
          <button class="btn btn-outline-danger w-100 my-1" type="button" id="cancelbutton">
            ${msg('No, cancel')}
          </button>
        </div>
      </div>
    </div>
  </main>
  `;
  }
}

customElements.define('delete-story-card', DeleteStoryCard);

