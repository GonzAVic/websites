/**
 * Anima [data-reveal] hacia .is-visible cuando entra en pantalla.
 * Sin dependencias. Si el navegador no soporta IntersectionObserver,
 * o el usuario prefiere menos movimiento, se muestra todo de inmediato.
 */
function initReveal() {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (elements.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
  );

  elements.forEach((el) => observer.observe(el));
}

initReveal();
