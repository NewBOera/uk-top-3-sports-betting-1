import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class SponsorsCarousel extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="sponsors-carousel" class="flex justify-center items-center">
        <div class="w-full overflow-hidden">
          <div class="flex animate-marquee whitespace-nowrap will-change-transform">
            <!-- Grupo 1 -->
            <div class="flex shrink-0">
              <img src="/public/assets/carousel/1.png" class="h-[63.44px] object-contain" alt="" />
              <img src="/public/assets/carousel/2.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/3.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/4.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/5.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/6.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
            </div>
            <!-- Grupo 2 -->
            <div class="flex shrink-0">
              <img src="/public/assets/carousel/1.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/2.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/3.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/4.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/5.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/6.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
            </div>
            <!-- Grupo 3 -->
            <div class="flex shrink-0">
              <img src="/public/assets/carousel/1.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/2.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/3.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/4.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/5.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/6.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
            </div>
            <!-- Grupo 4 -->
            <div class="flex shrink-0">
              <img src="/public/assets/carousel/1.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/2.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/3.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/4.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/5.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
              <img src="/public/assets/carousel/6.png" class="h-[63.44px] ml-9 md:ml-[23.92px] object-contain" alt="" />
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('sponsors-carousel', SponsorsCarousel);
