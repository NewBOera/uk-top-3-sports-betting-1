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
      <div class="flex flex-col justify-center items-center text-white">
        <section class="w-full sm:w-[360px] md:w-[774px] lg:w-[800px] mt-8">
          <div class="flex flex-col items-center gap-5 w-fit mx-auto">
            <img src="/public/assets/hero/topSports.png" alt="age aware" class="justify-self-center object-contain w-full md:w-[374px] lg:w-[426px]" />
            <h2 class="text-center font-medium text-[22px] leading-[25px] tracking-wide">
              SITES OF
              <span class=" bg-clip-text text-transparent bg-gradient-to-r from-orangy to-pinky">JANUARY</span>
              2025
            </h2>
            <p class=" font-normal text-[16px]leading-[19.8px]  text-center md:hidden px-10">
              Top UK real money online Sport Betting compared and reviewed. Check our list of the most popular British online casinos. Play safely & responsibly
            </p>
            <div class="hidden md:block">
              <p class="font-normal text-[16px]leading-[19.8px]  text-center">Top UK real money online Sport Betting compared and reviewed.</p>
              <p class="font-normal text-[16px]leading-[19.8px]  text-center">Check our list of the most popular British online casinos. Play safely & responsibly</p>
            </div>
            <div class="border-white border flex gap-2 items-center py-[6px] px-[20px] rounded-2xl">
              <h3>Rated 4.9/5</h3>
              <img src="/public/assets/hero/starsFrame.png" alt="age aware" class="justify-self-center object-contain h-[29px]" />
            </div>
            <div class="flex items-center">
              <img src="/public/assets/hero/downArrows.png" alt="age aware" class="justify-self-center object-contain w-[46px]" />
            </div>
          </div>
        </section>

        <section class="flex flex-col items-center gap-5 w-fit mt-2 md:mt-5 lg:w-[812px] ">
          <h2 class=" text-center font-bold text-[22px] leading-[25px] tracking-wide mt-">
            JOIN
            <span class="text-green">9,958</span>
            Monthly Bettors
            <p>Betting Through Us!</p>
          </h2>
          <div class="flex items-center">
            <img src="/public/assets/hero/progressBar.png" alt="age aware" class="justify-self-center object-contain w-[440px] lg:w-full" />
          </div>
          <h2 class=" text-center font-bold text-[18px] leading-[21px] w-[300px] md:w-full">
            <span class="text-green">Welcome Bonus</span>
            Only for the First 10,000 Bettors Each Month
          </h2>
        </section>
      </div>
    `;
  }
}

customElements.define('hero-section', Hero);
