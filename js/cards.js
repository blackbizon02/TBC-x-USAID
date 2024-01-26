import data from "../data.js";

//add cards
const cards = document.getElementById("learning-grid");
data.forEach((card) => {
  cards.innerHTML += `<div class="card">
    <img src="${card.img}" alt="" srcset="" />
    <h1>${card.title}</h1>
    <p>${card.desc}</p>
    <a href="#"
      ><span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
          /></svg></span
      ><span>კურსის დეტალები</span></a
    >
  </div>`;
});

export default cards;