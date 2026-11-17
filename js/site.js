// Farmers site: mobile menu, screenshot lightbox, and pausing the hero loop for reduced-motion users.
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  const heroVideo = document.querySelector(".hero video");
  if (heroVideo && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    heroVideo.pause();
    heroVideo.removeAttribute("autoplay");
  }

  const gallery = document.getElementById("gallery");
  const box = document.getElementById("lightbox");
  if (!gallery || !box) return;
  const links = [...gallery.querySelectorAll("a")];
  const img = box.querySelector("img");
  const caption = box.querySelector("p");
  let index = 0;
  let lastFocus = null;

  const show = (i) => {
    index = (i + links.length) % links.length;
    const a = links[index];
    img.src = a.href;
    img.alt = a.querySelector("img").alt;
    caption.textContent = a.querySelector("figcaption")?.textContent ?? "";
  };
  const open = (i) => {
    lastFocus = document.activeElement;
    show(i);
    box.classList.add("open");
    document.body.style.overflow = "hidden";
    box.querySelector(".close").focus();
  };
  const close = () => {
    box.classList.remove("open");
    document.body.style.overflow = "";
    lastFocus?.focus();
  };

  links.forEach((a, i) => a.addEventListener("click", (e) => { e.preventDefault(); open(i); }));
  box.querySelector(".close").addEventListener("click", close);
  box.querySelector(".prev").addEventListener("click", () => show(index - 1));
  box.querySelector(".next").addEventListener("click", () => show(index + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
