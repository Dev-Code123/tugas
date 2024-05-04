document.addEventListener("DOMContentLoaded", function() {
    const NavLinks = document.getElementById("navLink");

    NavLinks.addEventListener("click", function(e) {

        const links = document.querySelectorAll(".nav-link");

        links.forEach(link => {
            link.classList.remove("active");
        });

        const clickedLink = e.target;
        clickedLink.classList.add("active");
    });
});