const i18n = {
  es: {
    "nav.brand": "Acrovane",
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",
    "hero.badge": "Software & Tecnología",
    "hero.title1": "Impulsamos tu negocio",
    "hero.title2": "con software que vuela alto.",
    "hero.subtitle": "En Acrovane diseñamos y desarrollamos soluciones digitales a medida que llevan tu empresa al siguiente nivel.",
    "hero.ctaPrimary": "Empieza tu proyecto",
    "hero.ctaSecondary": "Ver servicios",
    "services.tag": "Qué hacemos",
    "services.title": "Servicios",
    "services.sub": "Soluciones de principio a fin para cada etapa de tu producto digital.",
    "services.s1.title": "Desarrollo de Software",
    "services.s1.text": "Aplicaciones web y móviles robustas y escalables, construidas con tecnologías modernas.",
    "services.s2.title": "Ciberseguridad",
    "services.s2.text": "Protegemos tus datos y sistemas con auditorías y estrategias de seguridad de vanguardia.",
    "services.s3.title": "Consultoría Tecnológica",
    "services.s3.text": "Te acompañamos en la toma de decisiones: arquitectura, transformación digital y más.",
    "services.s4.title": "DevOps & Cloud",
    "services.s4.text": "Despliegues continuos, infraestructura escalable y optimización de costos en la nube.",
    "about.tag": "Quiénes somos",
    "about.title": "Nosotros",
    "about.sub": "Somos un equipo apasionado por la tecnología. Creemos que el buen software no solo resuelve problemas: abre nuevos cielos para cada negocio.",
    "about.p1": "Enfoque en resultados y crecimiento real.",
    "about.p2": "Tecnología de punta y mejores prácticas.",
    "about.p3": "Comunicación clara de principio a fin.",
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
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Let's talk",
    "hero.badge": "Software & Technology",
    "hero.title1": "We take your business",
    "hero.title2": "to new heights with software.",
    "hero.subtitle": "At Acrovane we design and build custom digital solutions that take your company to the next level.",
    "hero.ctaPrimary": "Start your project",
    "hero.ctaSecondary": "Our services",
    "services.tag": "What we do",
    "services.title": "Services",
    "services.sub": "End-to-end solutions for every stage of your digital product.",
    "services.s1.title": "Software Development",
    "services.s1.text": "Robust, scalable web and mobile applications built with modern technologies.",
    "services.s2.title": "Cybersecurity",
    "services.s2.text": "We protect your data and systems with cutting-edge audits and security strategies.",
    "services.s3.title": "Tech Consulting",
    "services.s3.text": "We guide your decisions: architecture, digital transformation and more.",
    "services.s4.title": "DevOps & Cloud",
    "services.s4.text": "Continuous delivery, scalable infrastructure and cloud cost optimization.",
    "about.tag": "Who we are",
    "about.title": "About us",
    "about.sub": "We are a team passionate about technology. We believe great software does not just solve problems: it opens new skies for every business.",
    "about.p1": "Focused on results and real growth.",
    "about.p2": "Cutting-edge technology and best practices.",
    "about.p3": "Clear communication from start to finish.",
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
    const payload = Object.fromEntries(formData.entries());

    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json", Accept: "application/json" }
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