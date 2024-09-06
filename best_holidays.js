const filters = [...document.querySelectorAll(".filter_col")];

filters.map((filter) => {
  filter.addEventListener("click" , () => {
    filter.classList.toggle("open");
  });
});

const list = document.querySelector(".list");
const grid = document.querySelector(".grid");
const cards = [...document.querySelectorAll(".listing_card")];

list.addEventListener("click" , () => {
    cards.map((card) => {
        card.classList.add("list");
    });
    grid.classList.remove("active");
    list.classList.add("active");
});
grid.addEventListener("click" , () => {
    cards.map((card) => {
        card.classList.remove("list");
    });
    grid.classList.add("active");
    list.classList.remove("active");
});