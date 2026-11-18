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

window.onload = function () {
    let isTeacher = confirm("Ben je een docent?");

    // إذا ضغط Cancel
    if (isTeacher === false) {
        document.body.innerHTML = "";
        alert("Sorry, u moet de vragen beantwoorden!");
        return;
    }

    // إذا ضغط OK
    let naam = prompt("Wat is uw naam?");

    if (naam === null || naam.trim() === "") {
        document.body.innerHTML = "";
        alert("Sorry, deze pagina is privé. U moet alle vragen beantwoorden!");
        return;
    }

    alert("Welkom " + naam + " op mijn website!");
};
