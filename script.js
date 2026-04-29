// =====================
// 🔤 Typing Effect
// =====================
const roles = [
  "Full Stack Developer",
  "Java Developer",
  "Problem Solver",
  "Software Engineer"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const current = roles[i];
  const el = document.getElementById("typing");

  if (!el) return;

  el.textContent = isDeleting
    ? current.substring(0, j--)
    : current.substring(0, j++);

  if (j === current.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();


// =====================
// 📱 Mobile Menu Toggle
// =====================
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}


// =====================
// 🌗 Theme Toggle
// =====================
const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  if (toggle) toggle.checked = true;
}

// Toggle theme
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", toggle.checked ? "light" : "dark");
  });
}


// =====================
// ✨ Scroll Animation (Fade In)
// =====================
const faders = document.querySelectorAll("section");

function revealOnScroll() {
  faders.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// =====================
// 🚀 Smooth Scroll
// =====================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // mobile menu auto close
    document.getElementById("nav").classList.remove("active");
  });
});