const i18n = {
  es: {
    "nav.brand": "Acrovane",
    "nav.home": "Inicio",
    "nav.products": "Productos",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",
    "hero.badge": "Productos propios & soluciones a medida",
    "hero.title1": "Construimos lo que nos apasiona",
    "hero.title2": "y lo hacemos a tu medida.",
    "hero.subtitle": "En Acrovane construimos productos propios con creatividad e innovación — Zenith es solo el inicio. Aplicamos esa misma pasión y estándar de calidad a cada página web y CRM a medida para tu negocio.",
    "hero.ctaPrimary": "Conoce Zenith",
    "hero.ctaSecondary": "Ver servicios",
    "products.tag": "Productos propios",
    "products.title": "Zenith",
    "products.sub": "Nuestro primer producto propio: una app de tracking para gestionar tus actividades, proyectos y notas en un solo lugar. Y esto es solo el comienzo.",
    "products.p1": "Organiza actividades, proyectos y notas en una sola app.",
    "products.p2": "Visualiza tu progreso y productividad de un vistazo.",
    "products.p3": "Más productos propios con creatividad e innovación ya están en camino.",
    "products.visit": "Visitar Zenith",
    "products.cta": "Quiero algo así",
    "services.tag": "Qué hacemos",
    "services.title": "Servicios",
    "services.sub": "La misma pasión y estándares de calidad que ponemos en Zenith, aplicados a la tecnología de tu negocio.",
    "services.s1.title": "Páginas web a medida",
    "services.s1.text": "Sitios profesionales, rápidos y optimizados para convertir visitas en clientes.",
    "services.s2.title": "CRMs personalizados",
    "services.s2.text": "Sistemas de gestión a tu medida para vender, organizar y hacer crecer tu negocio.",
    "services.s3.title": "Hosting & mantenimiento",
    "services.s3.text": "Alojamos tus proyectos en Hostinger y nos ocupamos de actualizaciones, respaldos y soporte.",
    "about.tag": "Quiénes somos",
    "about.title": "Hacemos lo que nos gusta",
    "about.sub": "Creemos que la creatividad y la innovación nacen cuando haces lo que disfrutas. Aplicamos esa misma pasión a nuestros productos propios — como Zenith — y a los tuyos.",
    "about.p1": "Proyectos propios con creatividad e innovación.",
    "about.p2": "Soluciones a la medida de tu negocio.",
    "about.p3": "Hosting, mantenimiento y soporte incluidos.",
    "about.cta": "Conoce más",
    "about.stat": "% satisfacción de clientes",
    "contact.tag": "Hablemos",
    "contact.title": "¿Listo para despegar?",
    "contact.sub": "Cuéntanos tu idea y te responderemos en menos de 24 horas.",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "form.name": "Nombre",
    "form.email": "Email",
    "form.message": "Mensaje",
    "form.submit": "Enviar mensaje",
    "form.sending": "Enviando...",
    "form.sent": "¡Mensaje enviado! Te contactaremos pronto.",
    "form.error": "Por favor completa todos los campos correctamente.",
    "footer.copy": "© 2026 Acrovane. Todos los derechos reservados."
  },
  en: {
    "nav.brand": "Acrovane",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Let's talk",
    "hero.badge": "Our own products & custom solutions",
    "hero.title1": "We build what we love",
    "hero.title2": "and tailor it to your needs.",
    "hero.subtitle": "At Acrovane we craft our own products with creativity and innovation — Zenith is just the start. We bring that same passion and standard of quality to every custom website and CRM we build for your business.",
    "hero.ctaPrimary": "Meet Zenith",
    "hero.ctaSecondary": "Our services",
    "products.tag": "Our products",
    "products.title": "Zenith",
    "products.sub": "Our first own product: a tracking app to manage your activities, projects and notes all in one place. And this is just the beginning.",
    "products.p1": "Manage activities, projects and notes in a single app.",
    "products.p2": "See your progress and productivity at a glance.",
    "products.p3": "More own products fueled by creativity and innovation are on the way.",
    "products.visit": "Visit Zenith",
    "products.cta": "I want something like this",
    "services.tag": "What we do",
    "services.title": "Services",
    "services.sub": "The same passion and quality standards we pour into Zenith, applied to your business's technology.",
    "services.s1.title": "Custom websites",
    "services.s1.text": "Professional, fast websites optimized to turn visitors into clients.",
    "services.s2.title": "Custom CRMs",
    "services.s2.text": "Management systems tailored to you to sell, organize and scale your business.",
    "services.s3.title": "Hosting & maintenance",
    "services.s3.text": "We host your projects on Hostinger and handle updates, backups and support.",
    "about.tag": "Who we are",
    "about.title": "We do what we love",
    "about.sub": "We believe creativity and innovation come from doing what you enjoy. We apply that same passion to our own products — like Zenith — and to yours.",
    "about.p1": "Own products with creativity and innovation.",
    "about.p2": "Solutions tailored to your business.",
    "about.p3": "Hosting, maintenance and support included.",
    "about.cta": "Learn more",
    "about.stat": "% client satisfaction",
    "contact.tag": "Let's talk",
    "contact.title": "Ready to take off?",
    "contact.sub": "Tell us your idea and we'll get back to you within 24 hours.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.submit": "Send message",
    "form.sending": "Sending...",
    "form.sent": "Message sent! We'll contact you soon.",
    "form.error": "Please fill in all fields correctly.",
    "footer.copy": "© 2026 Acrovane. All rights reserved."
  }
};

let currentLang = localStorage.getItem("acrovane-lang") || "es";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = i18n[lang][key] ?? el.textContent;
  });
  document.querySelector(".lang-current").textContent = lang.toUpperCase();
  document.querySelector(".lang-alt").textContent = lang === "es" ? "EN" : "ES";
}

function toggleLanguage() {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("acrovane-lang", currentLang);
  applyLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  document.getElementById("lang-toggle").addEventListener("click", toggleLanguage);

  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  const header = document.getElementById("site-header");
  const shadow = () => {
    header.style.boxShadow = window.scrollY > 10 ? "0 4px 20px rgba(0,0,0,0.4)" : "none";
  };
  window.addEventListener("scroll", shadow);
  shadow();

  const counterEl = document.querySelector(".stat-value");
  const animateCount = () => {
    if (counterEl.dataset.done) return;
    const target = Number(counterEl.dataset.count);
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      counterEl.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
      else counterEl.dataset.done = "1";
    };
    requestAnimationFrame(tick);
  };

  const aboutStat = document.querySelector(".about-stat");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount();
          io.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );
  if (aboutStat) io.observe(aboutStat);

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fields = form.querySelectorAll("input, textarea");
    let valid = true;
    fields.forEach((field) => {
      const ok = field.checkValidity();
      field.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      status.textContent = i18n[currentLang]["form.error"];
      status.className = "form-status error";
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = i18n[currentLang]["form.sending"];

    const formData = new FormData(form);

    fetch("https://formspree.io/f/xvkojdyq", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then((res) => {
        if (res.ok) {
          status.textContent = i18n[currentLang]["form.sent"];
          status.className = "form-status success";
          form.reset();
        } else {
          throw new Error("Request failed");
        }
      })
      .catch(() => {
        status.textContent = i18n[currentLang]["form.error"];
        status.className = "form-status error";
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = i18n[currentLang]["form.submit"];
      });
  });
});