import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

function caesarCipherEncrypt(text, shift) {
  try {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = alphabet.toUpperCase();
    let result = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (alphabet.includes(char)) {
        const originalIndex = alphabet.indexOf(char);
        const newIndex = (originalIndex + shift) % alphabet.length;
        result += alphabet[newIndex];
      } else if (upperAlphabet.includes(char)) {
        const originalIndex = upperAlphabet.indexOf(char);
        const newIndex = (originalIndex + shift) % upperAlphabet.length;
        result += upperAlphabet[newIndex];
      } else {
        result += char;
      }
    }
    return result;
  } catch (err) {
    return undefined;
  }
}

const sendTracker = async pageName => {
  try {
    const queryString = window.location.search.replace('?', '');
    const queryParams = queryString.replaceAll('aff_sub', 'sub');
    let params = new URLSearchParams(queryParams);
    let updatedQueryString = params.toString();

    const url = new URL(`https://imgs-cdn.net/trk?a=${window.location.hostname}&ev=lpclick&${updatedQueryString}`);
    url.searchParams.set('sub16', pageName);
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error('Error de respuesta del servidor');
    }

    return true;
  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
};

const getInjectedProxy = target => {
  const propMapping = {
    offerTopImage: 'imageSrc',
  };

  const handler = {
    get(target, prop) {
      const injectedKey = propMapping[prop];
      if (injectedKey && target[injectedKey]) {
        return target[injectedKey];
      }

      return target[prop];
    },
  };

  return new Proxy(target, handler);
};

const indexToRating = index => 10 - index / 10;
const indexToStars = index => {
  return index === 1 ? '/public/assets/offers/stars.png' : '/topSportsBetting/public/assets/offers/stars-90.png';
};

const hydrateLink = (link, data) => {
  const encodedPart = link.match(/\[\[\[(.*?)\]\]\]/)?.at(1);
  if (encodedPart) {
    const dict = JSON.parse(encodedPart);
    const base = link.replace(/\[\[\[(.*?)\]\]\]/, '');
    const params = Object.entries(dict).reduce((acc, [key, val]) => {
      return {
        ...acc,
        [key]: data[val] ?? val,
      };
    }, {});
    return base + encodeURIComponent(JSON.stringify(params));
  }

  let hydrated = link;
  const matches = [...hydrated.matchAll(/\{\{\{(.*?)\}\}\}/g)];

  const params = matches.map(match => match[1]);

  for (const param of params) {
    hydrated = hydrated.replace(new RegExp('{{{' + param + '}}}'), data[param]);
  }

  return hydrated;
};

window.clickOfferButton = id => {
  if (window.drmInjected?.brands) {
    const brands = window.drmInjected.brands.filter(brand => !brand.disabled);

    const brandIndex = brands.findIndex(barnd => id === `${barnd.id}-${barnd.brand}`);

    const brand = brands[brandIndex];

    if (brand) {
      const pageName = 'en_uk_top_sports_betting';
      sendTracker(pageName);
      const url = new URL(window.location.href);
      // Get the domain from the URL
      const hydrated = hydrateLink(brand.link, {
        domain: caesarCipherEncrypt(url.hostname, 7) || '',
        aff_sub12: url.searchParams.get('aff_sub12'),
        offerPosition: brandIndex,
        id: brand.id,
        bpVal: pageName,
      });
      if (url.searchParams.get('testdevs') === '142') {
        return console.log(hydrated, 'hydrated');
      }
      const redirect = new URL(hydrated);
      redirect.searchParams.set('aff_16', pageName);
      window.open(redirect.toString(), '_blank');
    }
  }
};

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
      let data;
      //check cached
      if (window.offerData) {
        data = window.offerData;
      } else {
        const response = await fetch('/data/offers.json');
        data = await response.json();
      }
      const prototypeOffer = data.find(offer => offer.index === this.offerID);

      if (window.drmInjected?.brands) {
        return getInjectedProxy({ ...prototypeOffer, ...window.drmInjected.brands.filter(brand => !brand.disabled)[this.offerID - 1] });
      }

      return prototypeOffer;
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

    const offerId = `${this.infoOffer.id}-${this.infoOffer.brand}`;

    this.innerHTML = `
      <div class="${this.infoOffer.index === 1 ? 'md:w-full' : 'w-max'}">
        <article
          id="${this.infoOffer.id}"
          class="relative rounded-[30px] w-full max-w-[360px] pt-[45px] px-[40px] pb-[24px] flex flex-col items-center gap-[16px] ${this.infoOffer.backgroundImage} ${
      this.infoOffer.border
    } lg:max-w-[332px] lg:px-[30px] ${this.infoOffer.index === 1 ? 'xl:h-[500px]' : 'xl:h-[484px]'}"
        >
          <div class="absolute top-0 left-0 px-[16px] py-[8px] rounded-tl-[30px] rounded-br-[30px] flex items-center gap-[4px] ${this.infoOffer.gradient}">
            <span>${this.infoOffer.fire}</span>
            <span class="font-[700] text-[16px] text-white">${this.infoOffer.tag1 ?? 'TOP OFFER'}</span>
          </div>

          <div class="absolute left-0 top-[50px] py-2 px-3 font-[900] text-[20px] ${this.infoOffer.gradient}">
            <span class="text-white">${this.infoOffer.index}.</span>
          </div>

          <section class="flex gap-[14px] items-center">
            ${
              this.infoOffer.index === 1
                ? `
                    <img
                      style="${this.infoOffer.imageWidth ? `width: ${this.infoOffer.imageWidth}px;height:auto;object-fit: unset;` : ''}"
                      src="${this.infoOffer.offerTopImage}"
                      class="w-[146px] h-[60px] object-contain"
                      alt=""
                    />
                  `
                : ''
            }
            ${
              this.infoOffer.index === 2
                ? `
                    <img
                      style="${this.infoOffer.imageWidth ? `width: ${this.infoOffer.imageWidth}px;height:auto;object-fit: unset;` : ''}"
                      src="${this.infoOffer.offerTopImage}"
                      class="w-[80.32px] h-[60px] object-contain"
                      alt=""
                    />
                  `
                : ''
            }
            ${
              this.infoOffer.index === 3
                ? `
                    <img
                      style="${this.infoOffer.imageWidth ? `width: ${this.infoOffer.imageWidth}px;height:auto;object-fit: unset;` : ''}"
                      src="${this.infoOffer.offerTopImage}"
                      class="w-[102px] h-[61.2px] object-contain"
                      alt=""
                    />
                  `
                : ''
            }

            <div class="flex flex-col items-center gap-1">
              <img src="${indexToStars(this.infoOffer.index)}" class="w-[70px] h-[25px] object-contain" alt="" />
              <h5 class="text-white text-[20px]">Score: ${indexToRating(this.infoOffer.index)}</h5>
            </div>
          </section>

          <section class="flex flex-col gap-[10px]">
            <div class="w-full border-2 border-green rounded-[8px] p-2 text-center">
              <h5 class="text-white font-[700] text-[17px]">
             
                  ${
                    this.infoOffer.tag2 ||
                    `100% UP TO £425 + 200
                <br />
                FREE SPINS +1 BONUS CRAB`
                  }
              
              </h5>
            </div>
            <p class="text-[14px] leading-[17.36px] text-white text-center" style="font-size: 11px;">${
              this.infoOffer.bottomText || `FIRST DEPOSIT BONUS 200% up to £150 + 150 Free Spins | SECOND DEPOSIT BONUS 55% up to £150 + 100 Free Spins`
            }</p>
          </section>

          <article class="w-full flex flex-col gap-[16px]">
            <div class="flex flex-col gap-[8px]">
              <button id="${this.infoOffer.id}-${
      this.infoOffer.brand
    }" onclick="clickOfferButton('${offerId}')" class="gradient w-full rounded-[15px] py-[13px] px-[32px] text-[20px] font-[700] hover:scale-95 transition-all duration-200 ">Bet Now</button>
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
