// JavaScript for dynamic interactions
document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product-card');
  const buttons = document.querySelectorAll('button');

  // Add hover effect to product cards
  products.forEach((product) => {
    product.addEventListener('mouseenter', () => {
      product.style.transform = 'scale(1.05)';
      product.style.transition = 'transform 0.3s ease';
    });
    product.addEventListener('mouseleave', () => {
      product.style.transform = 'scale(1)';
    });
  });

  // Button animation
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      alert('Added to cart!');
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
      }, 200);
    });
  });
});
