// JavaScript for dynamic interactions (such as clicking on a product card)
document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");
  
  productCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Logic for product details page navigation or dynamic content
      alert("You clicked on a product!");
    });
  });
});
