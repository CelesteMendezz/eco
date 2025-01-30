function toggleDetalles(button) {
    const detalles = button.nextElementSibling; // Selecciona el div .detalles
    if (detalles.style.display === "none") {
      detalles.style.display = "block"; // Muestra los detalles
      button.textContent = "Ver menos detalles"; // Cambia el texto del botón
    } else {
      detalles.style.display = "none"; // Oculta los detalles
      button.textContent = "Ver más detalles"; // Cambia el texto del botón
    }
  }