window.addEventListener("scroll", function () {
    if (window.scrollY > 56) {
        document.querySelector('.navbar').classList.add('solid');
    } else {
        document.querySelector('.navbar').classList.remove('solid');
    }
});

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
                navbarToggle.style.color = (window.scrollY > 50) ? "#000000" : "#000000";
            }
        });
    }
});

console.log(document.getElementById("menuText")); 