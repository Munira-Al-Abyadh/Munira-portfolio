let heeftBaan = prompt("Heb je al een baantje? (Ja / Nee)").toLowerCase();

let main = document.querySelector("main");
let bericht = document.getElementById("bericht"); // zorg dat je een element <div id="bericht"></div> hebt in je HTML

if (heeftBaan === "nee") {
  bericht.innerHTML = "Geen zorgen! — ontdek alle leuke ICT-bedrijven om een baan te vinden!";
  bericht.style.color= "black"
  main.style.display = "flex"; // blijven zichtbaar
} 
else if (heeftBaan === "ja") {
  bericht.innerHTML = "Hé, deze pagina is niet voor jou - Wat doe je hier? Ga werken!";
  bericht.style.color= "red"
  main.style.display = "none"; // verdwijnt
} 
else {
  bericht.innerHTML = "Dat is geen geldig antwoord. Typ 'Ja' of 'Nee'.";
}