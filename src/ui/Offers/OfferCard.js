import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class OfferCard extends LitElement {
  static properties = {
    offerID: { type: Number },
    infoOffer: { type: Object },
  };

  constructor() {
    super();
    this.offerID = 0;
    this.infoOffer = null;
  }

  createRenderRoot() {
    return this;
  }

  async firstUpdated() {
    this.infoOffer = await this.fetchOffers();
    this.requestUpdate();

    await this.updateComplete;
  }

  async fetchOffers() {
    try {
      const response = await fetch('/data/offers.json');
      const data = await response.json();
      console.log(data);

      return data.find(offer => offer.index === this.offerID);
    } catch (error) {
      return null;
    }
  }

  render() {
    if (this.infoOffer === null) {
      return html`
        <section class="flex justify-center items-center">
          <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
            <h2 class="text-red-600 xl:text-lg">Error fetching offers data. Please try again later.</h2>
          </div>
        </section>
      `;
    }

    return html`
      <div class="${this.infoOffer.index === 1 ? 'md:w-full' : 'w-max'}">
        <article
          id="${this.infoOffer.id}"
          class="relative rounded-[30px] w-full max-w-[360px] pt-[45px] px-[40px] pb-[24px] flex flex-col items-center gap-[32px] ${this.infoOffer.backgroundImage} ${this.infoOffer
            .border} lg:max-w-[332px] lg:px-[30px] ${this.infoOffer.index === 1 ? 'xl:h-[489px]' : 'xl:h-[469px]'}"
        >
          <div class="absolute top-0 left-0 px-[16px] py-[8px] rounded-tl-[30px] rounded-br-[30px] flex items-center gap-[4px] ${this.infoOffer.gradient}">
            <span>${this.infoOffer.fire}</span>
            <span class="font-[700] text-[16px] text-white">TOP OFFER</span>
          </div>

          <div class="absolute left-0 top-[50px] py-2 px-3 font-[900] text-[20px] ${this.infoOffer.gradient}">
            <span class="text-white">${this.infoOffer.index}.</span>
          </div>

          <section class="flex gap-[14px] items-center">
            ${this.infoOffer.index === 1
              ? html`
                  <img src="${this.infoOffer.offerTopImage}" class="w-[146px] h-[60px] object-contain" alt="" />
                `
              : ''}
            ${this.infoOffer.index === 2
              ? html`
                  <img src="${this.infoOffer.offerTopImage}" class="w-[80.32px] h-[60px] object-contain" alt="" />
                `
              : ''}
            ${this.infoOffer.index === 3
              ? html`
                  <img src="${this.infoOffer.offerTopImage}" class="w-[102px] h-[61.2px] object-contain" alt="" />
                `
              : ''}

            <div class="flex flex-col items-center gap-1">
              <img src="/public/assets/offers/stars.png" class="w-[70px] h-[25px] object-contain" alt="" />
              <h5 class="text-white text-[20px]">Score: ${this.infoOffer.score}</h5>
            </div>
          </section>

          <section class="flex flex-col gap-[10px]">
            <div class="w-full border-2 border-green rounded-[8px] p-2 text-center">
              <h5 class="text-white font-[700] text-[17px]">
                100% UP TO £425 + 200
                <br />
                FREE SPINS +1 BONUS CRAB
              </h5>
            </div>
            <p class="text-[14px] leading-[17.36px] text-white text-center">FIRST DEPOSIT BONUS 200% up to £150 + 150 Free Spins | SECOND DEPOSIT BONUS 55% up to £150 + 100 Free Spins</p>
          </section>

          <article class="w-full flex flex-col gap-[16px]">
            <div class="flex flex-col gap-[8px]">
              <button class="gradient w-full rounded-[15px] py-[13px] px-[32px] text-[20px] font-[700] hover:scale-95 transition-all duration-200">Bet Now</button>
              <div class="relative">
                <p class="text-white text-center text-[14px]">
                  BETTORS THROUGH US:
                  <span class="font-[700]">${this.infoOffer.price} ONLINE</span>
                </p>
                <img src="/public/assets/offers/ellipse.png" class="size-3 object-contain absolute top-0 right-0" alt="" />
              </div>
            </div>
            <div class="w-full flex justify-center gap-[8px]">
              <img src="/public/assets/offers/visa.png" class="w-[38.3px] h-[23px] object-contain" alt="" />
              <img src="/public/assets/offers/mastercard.png" class="w-[38.3px] h-[23px] object-contain" alt="" />
              <img src="/public/assets/offers/skrill.png" class="w-[38.3px] h-[23px] object-contain" alt="" />
              <img src="/public/assets/offers/neteller.png" class="w-[38.3px] h-[23px] object-contain" alt="" />
            </div>
          </article>
        </article>
      </div>
    `;
  }
}

customElements.define('offer-card', OfferCard);
