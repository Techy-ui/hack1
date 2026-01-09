/* ===============================
   VECTOR‑TWIN | HOME JS
   =============================== */

function goToLogin() {
  // fade out animation
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 500);
}

/* Page Load Animation */
window.onload = () => {
  const hero = document.querySelector(".hero");
  hero.classList.add("show");
};

/* Button hover effect */
const btn = document.querySelector(".primary-btn");
if (btn) {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
}

/* AI Twin Glow Effect */
const twin = document.querySelector(".twin");
if (twin) {
  setInterval(() => {
    twin.classList.toggle("glow");
  }, 1200);
}
