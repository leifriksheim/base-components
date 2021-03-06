import { LitElement, html } from "lit-element";
import styles from "./container.css";
import sharedStyles from "../../shared/sharedstyles.css";

/**
 * @element core-container
 **/

class Container extends LitElement {
  constructor() {
    super();
    /**
     * Center  container
     * @type {Boolean}
     * @attr
     */
    this.center = false;
    /**
     * Width of container
     * @type {"xs"|"sm"|"md"|"lg"|"xl"}
     * @attr
     */
    this.size = "";
  }

  static get properties() {
    return {
      center: { type: Boolean, reflect: true },
      size: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [styles, sharedStyles];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<slot></slot>`;
  }
}

export default Container;
