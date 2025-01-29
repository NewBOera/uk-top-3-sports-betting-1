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
      <style>
        .sponsors-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .sponsors-container {
          display: flex;
          gap: 2rem;
          width: max-content; /* Importante para el cálculo correcto */
        }

        .sponsors-track {
          display: flex;
          gap: 2rem;
          padding: 1rem 0;
          animation: scroll 50s linear infinite;
          will-change: transform;
          /* Aseguramos suavidad en la animación */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Al hacer hover pausamos la animación */
        .sponsors-track:hover {
          animation-play-state: paused;
        }

        .sponsor-element {
          height: 40px;
          object-fit: contain;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .sponsor-element {
            height: 60px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
      </style>

      <div class="sponsors-wrapper">
        <div class="sponsors-container">
          <div class="sponsors-track">
            <!-- Grupo 1 - Original -->
            <img src="/public/assets/carousel/1.png" class="sponsor-element h-[40.34] lg:h-[63.44px] object-contain" alt="Sport " />
            <img src="/public/assets/carousel/2.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/3.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/4.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/5.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/6.png" class="sponsor-element" alt="Sport " />
            <!-- Grupo 2 - Duplicado -->
            <img src="/public/assets/carousel/1.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/2.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/3.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/4.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/5.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/6.png" class="sponsor-element" alt="Sport " />
          </div>
          <!-- Segunda pista para efecto infinito perfecto -->
          <div class="sponsors-track">
            <!-- Grupo 3 - Original -->
            <img src="/public/assets/carousel/1.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/2.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/3.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/4.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/5.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/6.png" class="sponsor-element" alt="Sport " />
            <!-- Grupo 4 - Duplicado -->
            <img src="/public/assets/carousel/1.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/2.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/3.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/4.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/5.png" class="sponsor-element" alt="Sport " />
            <img src="/public/assets/carousel/6.png" class="sponsor-element" alt="Sport " />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('sponsors-carousel', SponsorsCarousel);
