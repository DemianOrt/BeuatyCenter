document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const header = document.getElementById("header");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      if (mobileMenu.classList.contains("hidden") === false) {
        mobileMenu.classList.add("hidden");
      }
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("py-2");
      header.classList.remove("py-4");
    } else {
      header.classList.add("py-4");
      header.classList.remove("py-2");
    }
  });
});
