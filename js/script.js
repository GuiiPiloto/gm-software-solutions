document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.querySelector(".mobile-nav");

    if (mobileMenuIcon && mobileNav) {
        mobileMenuIcon.addEventListener("click", function() {
            mobileNav.classList.toggle("active");
            mobileMenuIcon.querySelector("i").classList.toggle("fa-bars");
            mobileMenuIcon.querySelector("i").classList.toggle("fa-times");
        });

        // Fechar o menu ao clicar em um link
        mobileNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("active");
                mobileMenuIcon.querySelector("i").classList.remove("fa-times");
                mobileMenuIcon.querySelector("i").classList.add("fa-bars");
            });
        });
    }
});

