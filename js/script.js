// Iniciar tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Modificar Carrossel
const myCarouselElement = document.querySelector('#carouselCidades');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  touch: false,
});
