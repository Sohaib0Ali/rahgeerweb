// Toggle the mobile menu display
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Automatically hide menu on window resize (for better responsiveness)
window.addEventListener("resize", () => {
    const menu = document.getElementById("menu");
    if (window.innerWidth > 768) {
        menu.style.display = "flex"; // Show menu on larger screens
    } else {
        menu.style.display = "none"; // Hide menu on smaller screens
    }
});
