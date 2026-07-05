const WHATSAPP_URL = "https://wa.me/5548988512030";

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const whatsappTriggers = document.querySelectorAll("[data-whatsapp]");
const internalLinks = document.querySelectorAll('a[href^="#"]:not([data-whatsapp])');
const revealItems = document.querySelectorAll(".reveal");

function closeMenu() {
  nav?.classList.remove("is-open");
  menuToggle?.classList.remove("is-active");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function openWhatsApp(event) {
  event.preventDefault();
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  closeMenu();
}

function scrollToSection(event) {
  const hash = event.currentTarget.getAttribute("href");
  if (!hash || hash === "#") return;

  const target = document.querySelector(hash);
  if (!target) return;

  event.preventDefault();

  const headerHeight = header?.offsetHeight || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 2;

  window.scrollTo({
    top,
    behavior: "smooth"
  });

  closeMenu();
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

menuToggle?.addEventListener("click", () => {
  const isOpen = !nav?.classList.contains("is-open");
  nav?.classList.toggle("is-open", isOpen);
  menuToggle.classList.toggle("is-active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

whatsappTriggers.forEach((trigger) => {
  trigger.addEventListener("click", openWhatsApp);
});

internalLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 920) closeMenu();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16,
  rootMargin: "0px 0px -44px 0px"
});

revealItems.forEach((item) => observer.observe(item));
updateHeader();
