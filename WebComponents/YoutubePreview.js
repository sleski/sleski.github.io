export default class YoutubePreview extends HTMLElement {
  constructor() {
    super();
    this.clipID = this.getAttribute("clipID");
    this.alignParam = this.getAttribute("alignParam") || "left";
  }

  connectedCallback() {
    this.innerHTML = `<div align="${this.alignParam}"><a href="https://www.youtube.com/watch?v=${this.clipID}"><img src="https://img.youtube.com/vi/${this.clipID}/0.jpg"></a><div><p>Northern Lights</p></div></div><hr/>`;
  }
}

customElements.define("ytb-preview", YoutubePreview);