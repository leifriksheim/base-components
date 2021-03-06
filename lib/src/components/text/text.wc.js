import { LitElement, html } from "lit-element";
import styles from "./text.css";
import sharedStyles from "../../shared/sharedstyles.css";

/**
 * @element core-text
 **/
class Text extends LitElement {
  constructor() {
    super();
    /**
     * Tag
     * @type {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"small"|"p"}
     * @attr
     */
    this.tag = "p";
    /**
     * Text size
     * @type {"xs"|"sm"|"md"|"lg"|"xl"|"xxl"}
     * @attr
     */
    this.size = "";
    /**
     * Look
     * @type {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"small"|"p"}
     * @attr
     */
    this.look = "";
    this.noMargin = false;
    this.noWrap = false;
    this.weight = "";
    this.full = false;
    this.uppercase = false;
  }

  static get properties() {
    return {
      tag: { type: String },
      look: { type: String },
      size: { type: String },
      weight: { type: String },
      full: { type: Boolean },
      uppercase: { type: Boolean },
      noMargin: { type: Boolean, attr: "no-margin" },
      noWrap: { type: Boolean, attr: "no-wrap" },
    };
  }

  static get styles() {
    return [styles, sharedStyles];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    switch (this.tag) {
      case "h1":
        return html`<h1><slot></slot></h1>`;
      case "h2":
        return html`<h2><slot></slot></h2>`;
      case "h3":
        return html`<h3><slot></slot></h3>`;
      case "h4":
        return html`<h4><slot></slot></h4>`;
      case "h5":
        return html`<h5><slot></slot></h5>`;
      case "h6":
        return html`<h6><slot></slot></h6>`;
      case "p":
        return html`<p><slot></slot></p>`;
      case "small":
        return html`<small><slot></slot></small>`;
      case "b":
        return html`<b><slot></slot></b>`;
      case "i":
        return html`<i><slot></slot></i>`;
      case "span":
        return html`<span><slot></slot></span>`;
      case "div":
        return html`<div><slot></slot></div>`;
      default:
        return html`<p><slot></slot></p>`;
    }
  }
}

export default Text;
