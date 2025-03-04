document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("header a");
    const sections = {
        "home": document.querySelector("header"),
        "sobre mim": document.querySelector(".about-me"),
        "projetos": document.querySelector(".projects"),
        "tecnologias": document.querySelector(".tecnologies"),
        "jornada": document.querySelector(".journey"),
        "contato": document.querySelector(".contact"),
    };

    menuItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const section = sections[item.textContent.toLowerCase()];
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
