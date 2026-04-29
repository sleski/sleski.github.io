export default class YoutubeShortPreview extends HTMLElement {
  constructor() {
    super();
    this.clipID = this.getAttribute("clipID");
    this.alignParam = this.getAttribute("alignParam") || "left";
  }

  connectedCallback() {
    this.innerHTML = `<div align="${this.alignParam}"><a href="https://www.youtube.com/shorts/${this.clipID}"><img src="https://img.youtube.com/vi/${this.clipID}/0.jpg" alt="IMAGE ALT TEXT"></a></div><hr/>`;
  }
}

customElements.define("ytb-short-preview", YoutubeShortPreview);