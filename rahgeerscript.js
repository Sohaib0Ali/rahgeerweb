function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu ul');
    navMenu.classList.toggle('show');
}

function closeMenu() {
    const navMenu = document.querySelector('.nav-menu ul');
    navMenu.classList.remove('show');
}

// Close the menu when clicking outside of it
window.onclick = function(event) {
    const navMenu = document.querySelector('.nav-menu ul');
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('show');
    }
};

// Show download notification
function showDownloadNotification(event) {
    event.preventDefault();
    const notification = document.getElementById('download-notification');
    notification.style.display = 'block';
    notification.style.opacity = '1';
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, 2000);
}