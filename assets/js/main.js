// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Iterate over all anchor links and add the smooth scroll functionality
    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent the default anchor behavior
            
            // Get the target element's ID
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Smooth scroll to the target element
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start" // Align to the top of the viewport
                });
            }
        });
    });

    // Other interactivity can be added here
    // For example, a simple show/hide element effect

    // Example: Toggle a class to show/hide a menu (you can add this if you have a hidden menu)
    const menuButton = document.querySelector("#menu-button"); // A button to toggle the menu
    const menu = document.querySelector("#nav"); // The navigation menu
    
    if (menuButton) {
        menuButton.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }

});
