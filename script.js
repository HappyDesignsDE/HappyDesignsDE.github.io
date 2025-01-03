// Fancy Button Click Animation
document.getElementById("subscribeBtn").addEventListener("click", function() {
    alert("Thank you for subscribing to Positive Vibes Apparel!");
    this.style.backgroundColor = '#ff7043';  // Change color on click
    this.innerHTML = 'Subscribed!';
});

// Dynamic Greeting Message (Console log)
window.onload = function() {
    let today = new Date();
    let hours = today.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    console.log(`${greeting} Welcome to Positive Vibes Apparel!`);
};
