const WHATSAPP_NUMBER = "553496555513";

const events = [
  {
    title: "Quinta Karaoke",
    date: "Quinta",
    day: "Toda semana",
    description: "Microfone aberto, caos permitido e entrada gratuita.",
    color: "#ef1010",
    background: "linear-gradient(145deg, #1b0505, #040404)",
    message: "Quero saber sobre o Quinta Karaoke no KAOS Pub."
  },
  {
    title: "Noite Deftones",
    date: "04/07",
    day: "Sábado",
    description: "Especial para quem gosta do som pesado, sujo e sentimental.",
    color: "#f2f2f2",
    background: "linear-gradient(145deg, #151021, #050505)",
    message: "Quero saber sobre a Noite Deftones no KAOS Pub."
  },
  {
    title: "KAOS Rock Fight",
    date: "11/07",
    day: "Sábado",
    description: "Boxe, música e a casa em modo guerra de palco.",
    color: "#ef1010",
    background: "linear-gradient(145deg, #07111c, #070707)",
    message: "Quero ingresso para o KAOS Rock Fight."
  },
  {
    title: "Pós-jogo Kaótico",
    date: "15/07",
    day: "Quarta",
    description: "Tela, cerveja, karaoke depois do apito e zero clima gourmet.",
    color: "#c6ff29",
    background: "linear-gradient(145deg, #061b12, #040404)",
    message: "Quero informações sobre o Pós-jogo Kaótico."
  }
];

const tickets = [
  {
    name: "Antecipado",
    price: "R$ 15,00",
    tag: "Entrada rápida",
    perks: ["Entrada até 01:00", "Acesso à pista"],
    featured: false
  },
  {
    name: "Inteira",
    price: "R$ 60,00",
    tag: "Mais escolhido",
    perks: ["Entrada até 01:00", "Acesso à pista", "Copo exclusivo"],
    featured: true
  },
  {
    name: "VIP",
    price: "R$ 100,00",
    tag: "Experiência completa",
    perks: ["Entrada prioritária", "Área VIP", "Copo exclusivo", "Banheiro exclusivo"],
    featured: false
  }
];

const features = [
  {
    title: "Música",
    copy: "Rock, metal, punk, alternativo e eletrônico.",
    icon: "bolt"
  },
  {
    title: "Lutas de boxe",
    copy: "Eventos e campeonatos underground.",
    icon: "glove"
  },
  {
    title: "Mini ramp",
    copy: "Skate, atitude e cultura de rua.",
    icon: "ramp"
  },
  {
    title: "Noite de verdade",
    copy: "Pessoas reais. Histórias reais.",
    icon: "horns"
  }
];

const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const defaultMessage =
  "Oi, KAOS Pub. Quero comprar ingresso/reservar pelo WhatsApp. Pode me passar as opções?";

const iconSvg = {
  bolt:
    '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M27 3 10 27h13l-3 18 18-26H25l2-16Z" stroke="currentColor" stroke-linejoin="round"/></svg>',
  glove:
    '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M15 23V9c0-3 5-3 5 0v10M20 20V7c0-3 5-3 5 0v12M25 19V9c0-3 5-3 5 0v13M30 23v-8c0-3 5-3 5 0v13c0 8-5 14-13 14-7 0-12-5-12-12v-8c0-4 5-4 5 1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ramp:
    '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M6 34h36M10 34c12 0 17-6 21-18h7c-2 11-8 22-28 22H6v-4h4Z" stroke="currentColor" stroke-linejoin="round"/><path d="M14 40h2M34 40h2" stroke="currentColor" stroke-linecap="round"/></svg>',
  horns:
    '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M13 30V10M13 10l-5 8M35 30V10M35 10l5 8M13 30c0 8 5 12 11 12s11-4 11-12V18M24 30V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

function setWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl(link.dataset.message || defaultMessage);
  });
}

function renderFeaturedEvent() {
  const event = events[1] || events[0];
  document.querySelector("[data-featured-date]").textContent = event.date;
  document.querySelector("[data-featured-day]").textContent = event.day;
  document.querySelector("[data-featured-title]").textContent = event.title;
  document.querySelector("[data-featured-meta]").textContent = event.description;
  document.querySelector("[data-featured-link]").href = whatsappUrl(event.message);
}

function renderEvents() {
  const target = document.querySelector("[data-events]");
  target.innerHTML = events
    .map(
      (event) => `
        <article class="event-card" style="--event-color: ${event.color}; --poster-bg: ${event.background};">
          <div class="date">
            <strong>${event.date}</strong>
            <span>${event.day}</span>
          </div>
          <div>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <a href="${whatsappUrl(event.message)}" target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTickets() {
  const target = document.querySelector("[data-tickets]");
  target.innerHTML = tickets
    .map(
      (ticket) => `
        <article class="ticket-card ${ticket.featured ? "featured" : ""}">
          <span class="tag">${ticket.tag}</span>
          <h3>${ticket.name}</h3>
          <strong>${ticket.price}</strong>
          <ul>
            ${ticket.perks.map((perk) => `<li>${perk}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderFeatures() {
  const target = document.querySelector("[data-features]");
  target.innerHTML = features
    .map(
      (feature) => `
        <article class="feature">
          ${iconSvg[feature.icon]}
          <div>
            <h3>${feature.title}</h3>
            <p>${feature.copy}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function setupMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const links = menu.querySelectorAll("a");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  setWhatsAppLinks();
  renderFeaturedEvent();
  renderEvents();
  renderTickets();
  renderFeatures();
  setupMenu();
}

init();
