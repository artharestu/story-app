import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardDashboard extends LitWithoutShadowDom {
  static properties = {
    id: { type: String, reflect: true },
    storyname: { type: String, reflect: true },
    description: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
  };

  constructor() {
    super();

    this.id = '';
    this.storyname = '';
    this.description = '';
    this.createdAt = '';
    this.photoUrl = '';
  }

  render() {
    const { id, storyname, description, createdAt, photoUrl } = this;
    return html`  
      <div class="card mb-3 border border-0 shadow me-3" id="${id}">
        <div class="card-body px-5 py-4">
          <div class="d-flex align-items-center mb-3">
            
            <div class="d-flex flex-column flex-grow-1 ps-2">
              <h6 class="card-title mb-0">${storyname}</h6>
              <div class="d-flex align-items-center mt-0">                
                <formatted-date createdAt=${createdAt}></formatted-date>
                <i class="bi bi-globe-asia-australia ms-2"></i>
              </div>
            </div>
            
          </div>            
          <img src="${photoUrl}" class="card-img-top mb-3 rounded w-100" alt="${storyname}">   
          <i class="bi bi-suit-heart me-2"></i>
          <i class="bi bi-chat me-2"></i>
          <i class="bi bi-send me-2"></i>              
          <p class="card-text" style="height: 25vh">${description}</p>                          
          <button type="button" class="btn btn-outline-primary w-100" id="edit-${id}" 
            onclick="window.location.href = '/edit.html?id=${id}'">Edit</button>
          <button type="button" class="btn btn-outline-danger w-100 mt-2" id="delete-${id}"
            onclick="window.location.href = '/delete.html?id=${id}'">Delete</button>            
        </div>
      </div>
    `;
  }
}
customElements.define('card-dashboard', CardDashboard);