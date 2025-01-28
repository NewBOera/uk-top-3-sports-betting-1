import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Hero extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <style>
        #hero-section {
          height: calc(100vh);
          min-height: 600px;
        }

        @media (min-width: 1524px) {
          #hero-section {
            height: calc(100vh);
            min-height: 600px;
          }
        }

        @media (min-width: 1024px) {
          #hero-section {
            height: calc(100vh);
            min-height: 1000px;
          }
        }
      </style>

      <section id="hero-section" class="flex justify-center items-center overlay">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1100px] 2xl:w-[1100px] w-full px-4 sm:px-6 md:px-8 lg:px-10 h-full grid place-content-center mt-[130px] lg:mt-[80px]">
          <div class="flex flex-col gap-7 lg:gap-10">
            <div class="flex justify-center">
              <badge-desktop title-badge="Top 5 Casino"></badge-desktop>
            </div>

            <h1 class="text-2xl text-center font-medium md:text-3xl lg:leading-tight lg:text-4xl">
              Live Entertainment
              <br />
              Events in the UK
            </h1>

            <p class="text-center font-light lg:text-lg">
              <span class="font-medium">Your official guide to the best casino live entertainment in the UK.</span>
              <br />
              Prepare your senses for a truly exciting night out at the best British casinos, for you are about to discover the top venues offering live entertainment events to complete your
              experience, beyond gaming, dining and drinking in style.
            </p>

            <article class="flex justify-between gap-3 lg:gap-5 mt-3">
              <div class="h-full w-4/12">
                <img class="max-h-[384px] w-full flex-1" src="/public/assets/hero/1.png" alt="" />
              </div>
              <div class="h-full w-4/12">
                <img class="max-h-[384px] w-full flex-1" src="/public/assets/hero/2.png" alt="" />
              </div>
              <div class="h-full w-4/12">
                <img class="max-h-[384px] w-full flex-1" src="/public/assets/hero/3.png" alt="" />
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', Hero);
