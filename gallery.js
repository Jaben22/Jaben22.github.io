/* SLIDING PANEL TOGGLE */
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbarToggle");
    const slidingPanel = document.getElementById("slidingPanel");
    const overlay = document.getElementById("overlay");
    const menuText = document.getElementById("menuText");

    function toggleMenu() {
        if (slidingPanel.style.left === "0px") {
            slidingPanel.style.left = "-250px"; // Hide the panel
            overlay.style.display = "none"; // Hide the overlay
        } else {
            slidingPanel.style.left = "0px"; // Show the panel
            overlay.style.display = "block"; // Show the overlay
        }
    }

    navbarToggle.addEventListener("click", toggleMenu);
    menuText.addEventListener("click", toggleMenu);

    overlay.addEventListener("click", function () {
        slidingPanel.style.left = "-250px"; // Hide the panel
        overlay.style.display = "none"; // Hide the overlay
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-custom");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");

    } else {
        navbar.classList.remove("scrolled");
    }
});

/* SLIDING PANEL STYLE */
document.addEventListener("DOMContentLoaded", function () {
const menuText = document.getElementById("menuText");
const navbarToggle = document.getElementById("navbarToggle");
const slidingPanel = document.getElementById("slidingPanel");

if (menuText && navbarToggle && slidingPanel) {
    function toggleMenu() {
        const isOpen = slidingPanel.classList.contains("open");

        if (isOpen) {
            // Close panel and reset text color
            slidingPanel.classList.remove("open");
            menuText.style.color = (window.scrollY > 50) ? "#000000" : "#000000";
            navbarToggle.style.color = (window.scrollY > 50) ? "#000000" : "#000000";
        } else {
            // Open panel and set text color to white
            slidingPanel.classList.add("open");
            menuText.style.color = "#ffffff";
            navbarToggle.style.color = "#ffffff";
        }
    }

    // Handle menu click (menuText)
    menuText.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from propagating
        toggleMenu();
    });

    // Handle navbar toggle button click
    navbarToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from propagating
        toggleMenu();
    });

    // Close panel when clicking outside
    document.addEventListener("click", function (event) {
        if (!slidingPanel.contains(event.target) && event.target !== menuText && event.target !== navbarToggle) {
            slidingPanel.classList.remove("open");
            menuText.style.color = (window.scrollY > 50) ? "#000000" : "#000000";
            navbarToggle.style.color = (window.scrollY > 50) ? "#000000" : "#000000";
        }
    });

    // Handle scroll behavior
    window.addEventListener("scroll", function () {
        if (!slidingPanel.classList.contains("open")) {
            menuText.style.color = (window.scrollY > 50) ? "#000000" : "#000000"; 
            avbarToggle.style.color = (window.scrollY > 50) ? "#000000" : "#000000";
        }
    });
}
});

/* Gallery */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery_item img');
let currentIndex = 0;

// Open lightbox and display the clicked image
galleryImages.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = 'block';
    });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navigate to the previous image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightbox();
});

// Navigate to the next image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateLightbox();
});

// Update lightbox content
function updateLightbox() {
    const img = galleryImages[currentIndex];
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

