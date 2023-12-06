import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class AddStoryForm extends LitWithoutShadowDom {
  render() {
    return html`
      <form
        class="d-flex flex-column align-items-center justify-content-center w-100 mb-3 p-3 
        shadow rounded border border-1">
        <div class="form-floating mb-3 w-100">
          <input type="text" class="form-control" id="name" placeholder="Type Your Name...">
          <label for="name">Name</label>
        </div>        
        <div class="form-floating mb-3 w-100">
          <input type="text" class="form-control" id="photoUrl" placeholder="Try 'nature', 'food', 'history', 'animal'...">
          <label for="photoUrl">Photo Category</label>
        </div>  
        <div class="form-floating mb-3 w-100">
          <textarea class="form-control form-control-lg w-100 mb-3" type="text" placeholder="Your story..."
          id="description" style="height: 200px"></textarea>
          <label for="description">Your story</label>
        </div>          
        <button class="btn btn-outline-primary w-100" type="submit">
          Post
        </button>
      </form>
    `;
  }
}
customElements.define('add-story-form', AddStoryForm);