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
      <div class="flex flex-col justify-center items-center text-white relative md:pb-16 xl:pb-72 overflow-hidden md:overflow-visible">
        <img src="/public/assets/hero/lightArrow.png" alt="light arrow" class=" object-contain h-[101px] mix-blend-screen absolute bottom-[146px]  -left-8 sm:left-0 md:hidden" />

        <img src="/public/assets/hero/lightArrow.png" alt="light arrow" class=" object-contain h-[101px] mix-blend-screen absolute bottom-[146px] -right-8 sm:right-0 transform rotate-180 md:hidden" />

        <img src="/public/assets/hero/lightArrow.png" alt="light arrow" class=" object-contain h-[236px] mix-blend-screen absolute -bottom-[450px]  -left-1 hidden md:block xl:hidden" />
        <img
          src="/public/assets/hero/lightArrow.png"
          alt="light arrow"
          class=" object-contain h-[236px] mix-blend-screen absolute -bottom-[464px] -right-1 transform rotate-180 hidden md:block xl:hidden"
        />

        <img src="/public/assets/hero/lightArrow.png" alt="light arrow" class=" object-contain h-[236px] mix-blend-screen absolute -bottom-32 -left-1 hidden xl:block" />
        <img src="/public/assets/hero/lightArrow.png" alt="light arrow" class=" object-contain h-[236px] mix-blend-screen absolute -bottom-32    -right-1 transform rotate-180 hidden xl:block" />

        <section class="w-full sm:w-[360px] md:w-[774px] lg:w-[800px] mt-8 z-20">
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
              <img src="/public/assets/hero/starsFrame.png" alt="rating stars" class="justify-self-center object-contain h-[29px]" />
            </div>
            <div class="flex items-center">
              <img src="/public/assets/hero/downArrows.png" alt="down arrows" class="justify-self-center object-contain w-[46px]" />
            </div>
          </div>
        </section>

        <section class="flex flex-col items-center gap-5 w-fit mt-2 md:mt-5 lg:w-[812px] ">
          <h2 class=" text-center font-bold text-[20px] leading-[25px] tracking-wide mt-">
            Join
            <span class="text-green">9,958</span>
            Monthly Bettors
            <p>Betting Through Us!</p>
          </h2>
          <div class="flex items-center">
            <img src="/public/assets/hero/smallProgressBar.png" alt="bettors bar" class="justify-self-center object-contain w-[380px] lg:w-full md:hidden" />
            <img src="/public/assets/hero/mediumProgressBar.png" alt="age aware" class="hidden justify-self-center object-contain w-[612px] lg:w-full md:block lg:hidden" />
            <img src="/public/assets/hero/largeProgressBar.png" alt="age aware" class="hidden justify-self-center object-contain w-full lg:block" />
          </div>
          <h2 class="text-center font-[700] text-[18px] leading-[21.6px] text-white">
            <span class="text-green">Welcome Bonus</span>
            Only for the First
            <br class="md:hidden" />
            10,000 Bettors Each Month
          </h2>
        </section>
      </div>
    `;
  }
}

customElements.define('hero-section', Hero);
