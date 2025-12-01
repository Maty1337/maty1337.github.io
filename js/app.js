// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // ✨ PARTICULAS
  const container = document.querySelector(".particles");
  const TOTAL = 80; // cantidad de estrellas

  if (container) {
    for (let i = 0; i < TOTAL; i++) {
      const star = document.createElement("span");
      star.classList.add("particle");

      // Posición aleatoria en la pantalla
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";

      // Tamaño aleatorio (2px a 4px)
      const size = 2 + Math.random() * 2;
      star.style.width = size + "px";
      star.style.height = size + "px";

      // Duración y delay distintos para cada estrella
      const dur = 3 + Math.random() * 5; // 3s a 8s
      const delay = Math.random() * -8;  // empieza en distintos momentos
      star.style.animationDuration = dur + "s";
      star.style.animationDelay = delay + "s";

      // Algunas estrellas se mueven suavemente
      if (Math.random() > 0.7) {
        star.classList.add("move");
      }

      container.appendChild(star);
    }
  }

  // ✨ ANIMACIONES FADE-IN (proyectos, secciones, etc.)
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach((el) => observer.observe(el));
});

// ✨ Spotlight que sigue al mouse
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.setProperty("--x", x + "%");
  document.body.style.setProperty("--y", y + "%");
});

// Evita que el navegador recuerde el scroll anterior
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Asegura que al cargar siempre se quede arriba de todo
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
