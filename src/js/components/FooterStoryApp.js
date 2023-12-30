import { LitElement, html, css } from 'lit';

class FooterStoryApp extends LitElement {
  static styles = css`
      footer {
        width: 97vw;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        text-align: center;
        padding: 10px;        
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.5;
        letter-spacing: 0.5px;
        font-family: 'Poppins', sans-serif;                
      }
    `;

  render() {
    return html`
      <footer>
        <div>
          Story App ❤️ 2023 Copyright
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-story-app', FooterStoryApp);
