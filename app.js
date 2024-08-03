const lists = [...document.querySelectorAll("li")];
lists.map((li) => {
  li.addEventListener("click", () => {
    const p = li.querySelector("p");
    const img = li.querySelector("img");
    if (p.style.height && img.style.height && p.style.height !== "0px" && img.style.height !== "0px") {
      p.style.height = "0px";
      img.style.height = "0px"
    } else {
      [...document.querySelectorAll("li p")].map(
        (p) => (p.style.height = "0px")
      );
      [...document.querySelectorAll("li img")].map(
        (img) => (img.style.height = "0px")
      );
      p.style.height = p.scrollHeight + "px";
      img.style.height = img.scrollHeight + "px";
    }
  });
});