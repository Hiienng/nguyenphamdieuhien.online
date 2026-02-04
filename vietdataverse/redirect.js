document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".old-link");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Redirect sang URL mới
            window.location.href = "https://vietdataverse.online/";
        });
    });
});
