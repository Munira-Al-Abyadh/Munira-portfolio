const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const naam = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const bericht = String(formData.get("message") || "").trim();
        const onderwerp = encodeURIComponent("Portfolio bericht van " + naam);
        const inhoud = encodeURIComponent(
            "Naam: " + naam + "\nE-mail: " + email + "\n\nBericht:\n" + bericht
        );

        window.location.href =
            "mailto:Munira.al-abyadh@edu-kw1c.nl?subject=" + onderwerp + "&body=" + inhoud;
    });
}
