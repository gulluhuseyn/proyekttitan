const nav_links = document.querySelector(".nav_links ul");
const menu_btn = document.getElementById("menu_btn");

menu_btn.addEventListener("click", () =>{
  nav_links.classList.toggle("active");
});