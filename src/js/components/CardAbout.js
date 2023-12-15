import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class CardAbout extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
      <div class="card mb-3 border border-0 shadow w-50 mx-auto" id="card">
        <div
          class="card-body border border-primary rounded p-3 m-3 d-flex flex-column align-items-center justify-content-center">
          <img class="rounded-circle" id="image"
            src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
            width="100px" height="100px" />
          <h2 class="card-text text-center my-2">Story App</h2>
          <p class="card-text text-center my-3" id="description">
            ${msg(`Story App, a user-friendly platform where you can share and discover captivating stories. Whether
            you love writing or enjoy reading, this app lets you easily upload your stories with pictures and audio for an
            enhanced experience. Explore various genres, from exciting adventures to heartwarming tales, and connect with
            other storytellers. Story App is not just an app; it's a community where creativity and storytelling thrive.
            Join us and let your stories come to life on Story App!`)}
          </p>
        </div>
      </div>
    `;
  }
}
customElements.define('card-about', CardAbout);