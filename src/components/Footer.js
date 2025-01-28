import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Footer extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/styles/output.css" />
      <section class="mx-auto flex justify-center md:justify-start w-[340px] md:w-[774px] xl:w-[1200px]">
        <div class="flex justify-between items-center gap-5 w-fit">
          <img src="/public/assets/footer/18.png" alt="age aware" class="justify-self-center object-contain h-[37px]" />
          <img src="/public/assets/footer/gambleAware.png" alt="gamble aware" class="justify-self-center object-contain h-[24px]" />
        </div>
      </section>
    `;
  }
}

customElements.define('footer-element', Footer);
