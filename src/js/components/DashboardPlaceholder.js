import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class DashboardPlaceholder extends LitWithoutShadowDom {
  render() {
    return html`
    <div class="row g-0 justify-content-center align-items-center placeholder-card">
      <div class="col-12 col-md-6 col-lg-5 card mb-3 border border-0 shadow me-3">
        <div class="card-body px-5 py-4">

          <div class="d-flex align-items-center mb-3">            
            <div class="d-flex flex-column flex-grow-1">
              <h6 class="card-title mb-0 placeholder-glow">
                <span class="placeholder col-6"></span>
              </h6>
              <div class="placeholder-glow d-flex align-items-center mt-1">                
                <span class="placeholder col-4 placeholder-sm"></span>
                <i class="bi bi-globe-asia-australia ms-2"></i>
              </div>
            </div>            
          </div>

          <div class="placeholder-glow d-flex align-items-center mb-3">
            <div class="placeholder col-12 placeholder-lg" style="height: 200px;"></div>
          </div>          

          <i class="bi bi-suit-heart me-2"></i>
          <i class="bi bi-chat me-2"></i>
          <i class="bi bi-send me-2"></i>

          <p class="card-text placeholder-glow" style="height: 20vh">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>                                    
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-5 card mb-3 border border-0 shadow me-3" aria-hidden="true">
        <div class="card-body px-5 py-4">

          <div class="d-flex align-items-center mb-3">            
            <div class="d-flex flex-column flex-grow-1">
              <h6 class="card-title mb-0 placeholder-glow">
                <span class="placeholder col-6"></span>
              </h6>
              <div class="placeholder-glow d-flex align-items-center mt-1">                
                <span class="placeholder col-4 placeholder-sm"></span>
                <i class="bi bi-globe-asia-australia ms-2"></i>
              </div>
            </div>            
          </div>

          <div class="placeholder-glow d-flex align-items-center mb-3">
            <div class="placeholder col-12 placeholder-lg" style="height: 200px;"></div>
          </div>          

          <i class="bi bi-suit-heart me-2"></i>
          <i class="bi bi-chat me-2"></i>
          <i class="bi bi-send me-2"></i>
          
          <p class="card-text placeholder-glow" style="height: 20vh">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>                                    
        </div>
      </div>
    </div>
    `;
  }
}
customElements.define('dashboard-placeholder', DashboardPlaceholder);
