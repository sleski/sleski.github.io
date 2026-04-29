export default class YoutubeShortPreview extends HTMLElement {
  constructor() {
    super();
    this.clipID = this.getAttribute("clipID");
    this.alignParam = this.getAttribute("alignParam") || "center";
    this.textContent = this.getAttribute("description") || ""
  }

  connectedCallback() {
    this.innerHTML = `<div align="${this.alignParam}"><a href="https://www.youtube.com/shorts/${this.clipID}"><img src="https://img.youtube.com/vi/${this.clipID}/0.jpg"></a><div><p>${this.textContent}</p></div></div><hr/>`;
  }
}

customElements.define("ytb-short-preview", YoutubeShortPreview);