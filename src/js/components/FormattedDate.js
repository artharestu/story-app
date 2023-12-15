import { LitElement, html, css } from 'lit';

class formattedDate extends LitElement {
  static properties = {
    createdAt: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.createdAt = '';
  }
  static styles = css`
      .text-muted {
        color: #6c757d;
        opacity: 0.7;
      }
    `;
  render() {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    const date = new Date(this.createdAt);
    const formattedDate = date.toLocaleString("id-ID", options);
    return html`
      <small class="text-muted">${formattedDate}</small>
    `;
  }
}

customElements.define('formatted-date', formattedDate);