// Se espera a que todo el contenido HTML de la página se haya cargado antes de ejecutar el script.
document.addEventListener("DOMContentLoaded", () => {
  // =============================================
  // =========== LÓGICA DEL MENÚ MÓVIL ===========
  // =============================================

  // Se obtienen los elementos del DOM: el botón del menú, el menú en sí y el header.
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const header = document.getElementById("header");

  // Se añade un evento "click" al botón.
  mobileMenuButton.addEventListener("click", () => {
    // Cada vez que se hace clic, se añade o quita la clase "hidden" para mostrar u ocultar el menú.
    mobileMenu.classList.toggle("hidden");
  });

  // =============================================
  // ========= LÓGICA DE SCROLL SUAVE ===========
  // =============================================

  // Se seleccionan todos los enlaces que apuntan a una sección de la página (ej. href="#servicios").
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    // Se añade un evento "click" a cada uno de estos enlaces.
    anchor.addEventListener("click", function (e) {
      // Se previene el comportamiento por defecto del enlace (que es saltar bruscamente a la sección).
      e.preventDefault();

      // Si el menú móvil está abierto, se cierra.
      if (mobileMenu.classList.contains("hidden") === false) {
        mobileMenu.classList.add("hidden");
      }

      // Se obtiene la sección a la que apunta el enlace y se realiza un desplazamiento suave hacia ella.
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // =============================================
  // ======== EFECTO DEL HEADER AL HACER SCROLL ====
  // =============================================

  // Se añade un evento que se dispara cada vez que el usuario hace scroll en la página.
  window.addEventListener("scroll", () => {
    // Si el desplazamiento vertical es mayor a 50 píxeles...
    if (window.scrollY > 50) {
      // ...se hace el header un poco más pequeño cambiando su padding.
      header.classList.add("py-2");
      header.classList.remove("py-4");
    } else {
      // Si no, se vuelve a su tamaño original.
      header.classList.add("py-4");
      header.classList.remove("py-2");
    }
  });
});
