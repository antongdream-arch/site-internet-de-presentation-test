document.addEventListener("DOMContentLoaded", () => {
    
    // 1. TRANSITION NAVBAR AU SCROLL
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. GESTION DU MENU BURGER MOBILE
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("open");
            });
        });
    }

    // 3. FILTRES DE LA CARTE (menu.html)
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuBlocks = document.querySelectorAll(".menu-section-block");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");

                menuBlocks.forEach(block => {
                    if (filterValue === "all" || block.getAttribute("data-category") === filterValue) {
                        block.classList.remove("hidden");
                    } else {
                        block.classList.add("hidden");
                    }
                });
            });
        });
    }

    // 4. SOUMISSION DU FORMULAIRE DE RÉSERVATION (reservation.html)
    const reservationForm = document.getElementById("reservation-form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            /* MODIFIABLE : Message de confirmation après réservation */
            alert("Merci ! Votre demande de réservation a été enregistrée. Un SMS de confirmation vous sera envoyé dans quelques instants.");
            reservationForm.reset();
        });
    }
});