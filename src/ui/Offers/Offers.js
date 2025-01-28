import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Offers extends LitElement {
  static properties = {
    offersIDs: { type: Array },
    offersIDsDesktop: { type: Array },
  };

  constructor() {
    super();
    this.offersIDs = [];
    this.offersIDsDesktop = [];
  }

  createRenderRoot() {
    return this;
  }

  async firstUpdated() {
    this.offersIDs = await this.fetchOffers('/data/offers.json');
    this.offersIDsDesktop = await this.fetchOffers('/data/offers-lg.json');

    this.requestUpdate();
  }

  async fetchOffers(endpoit) {
    try {
      const response = await fetch(endpoit);
      const data = await response.json();

      return data.map(offer => ({
        id: offer.index,
      }));
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      return null;
    }
  }

  render() {
    if (this.offersIDs === null) {
      return html`
        <section class="flex justify-center items-center">
          <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
            <h2 class="text-red-600 xl:text-lg">Error fetching events data. Please try again later.</h2>
          </div>
        </section>
      `;
    }

    return html`
      <section id="top-5-section" class="flex justify-center items-center bg-blue">
        <div class="xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <h2 class="text-center font-[700] text-[18px] leading-[21.6px] text-white">
            <span class="text-green">Welcome Bonus</span>
            Only for the First
            <br class="md:hidden" />
            10,000 Bettors Each Month
          </h2>
          <div class="mt-8 flex flex-wrap gap-y-[30px] justify-center w-full lg:mt-12 xl:mt-16 xl:hidden">
            ${this.offersIDs.map(
              offer => html`
                ${offer.id === 1
                  ? html`
                      <div class="w-full flex justify-center">
                        <offer-card offerID=${offer.id}></offer-card>
                      </div>
                    `
                  : html`
                      <div class="mx-[15px]">
                        <offer-card offerID=${offer.id}></offer-card>
                      </div>
                    `}
              `
            )}
          </div>

          <div class="mt-8 hidden flex-wrap justify-center gap-[30px] lg:mt-12 xl:mt-16 xl:flex">
            ${this.offersIDsDesktop.map(
              offers => html`
                <offer-card offerID=${offers.id}></offer-card>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('offers-section', Offers);
