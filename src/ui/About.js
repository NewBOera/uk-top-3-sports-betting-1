import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class About extends LitElement {
  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="about-section" class="flex justify-center items-center">
        <div class="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1300px] w-full px-4 sm:px-6 md:px-8 lg:px-10">
          <div class="flex flex-col gap-5 ">
            <h2 class="text-4xl">
              Showcasing
              <span class="text-brown font-bold">The Finest Dining And Drinking Casino Venues</span>
              in the UK
            </h2>
            <div class="lg:text-xl">
              <p>
                The United Kingdom has positioned itself as one of the main countries in the casino industry worldwide, but little is known about the superb dining options their gaming venues have to
                offer. This is the reason why we have designed this special platform - to showcase the top restaurants and bars available at some of the most important British casinos. Are you ready
                to unearth each one of those?
              </p>
              <p>
                We have arranged an unique curatorship of the top dining and drinking casino venues in the UK with the aid of reliable real-guest reviews, and insights from professionals in the casino
                industry and the gourmet industry as well. Truly offering you a comprehensive ranking designed with trusted information to guarantee you will have a delicious dining experience whilst
                visiting the casino of your choice.
              </p>
              <p>
                Whether you are looking for a thrilling night out at a casino, or just craving for some tasty snacks, or the finest dining experience, we got you covered! There are a range of
                possibilities when it comes to visiting a British gaming venue. Most guests usually enjoy a side snack and drink while playing a thrilling game, while others actually choose to get an
                exclusive table at some of the finest restaurants available only at certain casinos.
              </p>
              <p>
                At [change_NAME] we have carefully selected a list of UK casinos, restaurants and bars that are certain to satisfy your most demanding tastes. Ranging from those venues offering
                traditional buds and snacks, to gourmet prime restaurants, we guarantee there is something for everyone right here. Explore some of the dining specialties some casinos offer, from
                European, Asian, Mediterranean and contemporary British cuisines. Our site will ease your selection with the most reliable information about the top dining experiences across the best
                casinos in the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('about-section', About);
