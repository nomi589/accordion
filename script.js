const accordionContainer = document.querySelector(".accordion-container");

accordionContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "H2") {
    const accordionDetail = event.target.nextElementSibling;

    if (accordionDetail.style.display === "block") {
      accordionDetail.style.display = "none";
    } else {
      accordionDetail.style.display = "block";
    }
  }
});
