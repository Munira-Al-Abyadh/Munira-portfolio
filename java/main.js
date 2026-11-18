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
