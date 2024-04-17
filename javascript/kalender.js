let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.querySelector(".calendar-dates");
 
const currdate = document.querySelector(".calendar-current-date");
 
const prenexIcons = document.querySelectorAll(".calendar-navigation span");
 
// Array af navne på måneder
const months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "October",
    "November",
    "December"
];
 
// Funktion der generer kalenderen
function manipulate() {
 
    // får fat i den første ugedag på måneden
    let dayone = new Date(year, month, 1).getDay();
 
    // får fat i den sidste dag på måndeden
    let lastdate = new Date(year, month + 1, 0).getDate();
 
    // får fat i ugedagen på den sidste dag på måneden
    let dayend = new Date(year, month, lastdate).getDay();
 
    // får fat i den sidste dag på den foregående måned
    let monthlastdate = new Date(year, month, 0).getDate();
 
    // Variable til at gemme den genererede kalender HTML
    let lit = "";
 
    // Loop der tilføjer de sidste dage i den foregående måned
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }
 
    // Loop der tilføjer dagene i den nuværende måned
    for (let i = 1; i <= lastdate; i++) {
 
        // Tjekker om den datoen er dagens dato
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }
 
    // Loop der tilføjer de første dage af den kommende måned
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }
 
    // Opdaterer teksten i headeren med den nuværende måned og år
    currdate.innerText = `${months[month]} ${year}`;
 
    // Opdaterer HTML for date elementer med den genererede kalender
    day.innerHTML = lit;
}
 
manipulate();
 
// sætter et click event listner på hver af ikonerne/pilene
prenexIcons.forEach(icon => {
 
    // Når et ikon bliver trykket på
    icon.addEventListener("click", () => {
 
        // Tjek om ikonet har id'et calendar-prev
        // eller "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;
 
        // Tjek om måneden er uden for rækkevidde
        if (month < 0 || month > 11) {
 
            // Sætter datoen til den første dag på måneden med det nye år
            date = new Date(year, month, new Date().getDate());
 
            // Sæt måneden til det nye år
            year = date.getFullYear();
 
            // Sæt måneden til den nye måned
            month = date.getMonth();
        }
 
        else {
           // Sæt datoen til den nuværende dato
          date = new Date();
  
        }
 
        // Kalder på funktionen for at opdater kalenderens display
        manipulate();
    });
});