export default class CustomSection extends HTMLElement {
    constructor() {
      super();
      this.sectionId = this.getAttribute("sectionId");
      this.h4 = this.getAttribute("h4");
      this.commandText = this.getAttribute("commandText");
    }

    connectedCallback() {
      this.innerHTML = `<section id="${this.sectionId}">
      <div>
          <h4>${this.h4}</h4>
          <p style="padding: 15px; background: #eee;border-radius: 5px;  pre-wrap;">
            ${this.commandText}
          </p>
      </div>
  </section>`;
    }
  }

  customElements.define("c-section", CustomSection);