import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardDashboard extends LitWithoutShadowDom {
  static properties = {
    id: { type: String, reflect: true },
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.id = '';
    this.name = '';
    this.description = '';
    this.createdAt = '';
    this.photoUrl = '';
  }

  _randomPhotoProfile() {
    const category = ["animal", "cartoon", "food", "history", "nature", "cat", "dog", "work",
      "movie", "music", "anime", "game", "lion", "elephant", "penguin", "tiger", "panda", "mountains",
      "ocean", "sunset", "forest", "waterfall", "landscape", "beach", "sunrise", "night", "city", "sea", "space"];

    return "https://source.unsplash.com/50x50/?" + category[Math.floor(Math.random() * category.length)];
  }

  render() {
    return html`
    <div class="card mb-3 border border-0 shadow w-50 mx-auto" id="${this.id}">
          <div class="card-body p-5">
            <div class="d-flex align-items-center mb-3">
              <img src="${this._randomPhotoProfile()}" 
              class="rounded-circle border border-primary p-1 me-1" alt="${this.name}">
              <div class="d-flex flex-column flex-grow-1">
                <h5 class="card-title">${this.name}</h5>
                <div class="d-flex align-items-center">
                  <small class="text-muted">${this.createdAt}</small>
                  <i class="bi bi-globe-asia-australia ms-2"></i>
                </div>
              </div>
              
            </div>            
            <img src="${this.photoUrl}" class="card-img-top mb-3 rounded w-100" alt="${this.name}">   
            <i class="bi bi-suit-heart me-2"></i>
            <i class="bi bi-chat me-2"></i>
            <i class="bi bi-send me-2"></i>
            <p class="card-text">${this.description}</p>            
            <button type="button" class="btn btn-outline-primary w-25" id="edit-${this.id}">Edit</button>
            <button type="button" class="btn btn-outline-danger w-25" id="delete-${this.id}">Delete</button>            
          </div>
        </div>
    `;
  }
}
customElements.define('card-dashboard', CardDashboard);