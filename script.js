// Smooth scroll to products section
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Animation on page load (for hero section)
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero h1');
    heroText.classList.add('animate-text');
});

// Adding animation effect for the hero section text
const style = document.createElement('style');
style.innerHTML = `
    .animate-text {
        animation: fadeIn 2s ease-out;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
