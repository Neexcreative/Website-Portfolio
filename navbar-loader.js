document.addEventListener("DOMContentLoaded", () => {
  fetch("navbar.html")
    .then(res => res.text())
    .then(html => {
      const mount = document.getElementById("navbar");
      if (!mount) return;

      mount.innerHTML = html;

      const navPill = document.getElementById("navPill");
      const hambMenu = document.getElementById("hambMenu");

      if (hambMenu && navPill) {
        hambMenu.addEventListener("click", () => {
          navPill.classList.toggle("expanded");
        });
      }
    })
    .catch(err => console.error("Erro ao carregar navbar:", err));
});
