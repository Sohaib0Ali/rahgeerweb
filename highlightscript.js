// Toggle the mobile menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Open the modal with the selected media
function openModal(mediaSrc, description, isVideo = false) {
    const modal = document.getElementById("mediaModal");
    const modalImage = document.getElementById("modalImage");
    const modalVideo = document.getElementById("modalVideo");
    const modalDescription = document.getElementById("modalDescription");

    modal.style.display = "flex";
    modalDescription.textContent = description;

    if (isVideo) {
        modalImage.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = mediaSrc;
        modalVideo.play();
    } else {
        modalVideo.style.display = "none";
        modalImage.style.display = "block";
        modalImage.src = mediaSrc;
    }
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("mediaModal");
    const modalVideo = document.getElementById("modalVideo");

    modal.style.display = "none";
    modalVideo.pause();  // Pause video if it's open
    modalVideo.src = ""; // Stop loading the video
}
