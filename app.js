import cards from "./js/cards.js";
import navbar from "./js/navbar.js";
import slider from "./js/slider.js";

// navbar functionality
navbar;

//cards data
cards;

//slider  
slider;


//accordion functionality
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function () {
      const content = item.querySelector('.accordion-content');
      content.classList.toggle('show');
      header.classList.toggle('show');

      // Close other open items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.accordion-content');
          otherContent.classList.remove('show');
          otherItem.querySelector('.accordion-header').classList.remove('show');
        }
      });
    });
  });
});
