// Initialiserer slideIndex med 0 for at starte fra det første slide.
let slideIndex = 0;

// Variabel uden initial værdi; vil blive brugt til at lagre startpositionen for en swipe.
let startX;

// Funktion til at skifte mellem slides. 'step' angiver, hvor mange slides der skal rykkes.
function moveSlide(step) {
    // Vælger alle elementer med klassen .slide og gemmer dem i en variabel.
    const slides = document.querySelectorAll('.slide');

    // Opdaterer slideIndex ud fra det givne skridt, sikrer at værdien forbliver inden for grænserne af slides.length.
    slideIndex = (slideIndex + step + slides.length) % slides.length;

    // Vælger det element i DOM'en, der har klassen .slider, for at kunne ændre dets stil.
    const slider = document.querySelector('.slider');

    // Ændrer sliderens position baseret på slideIndex for at vise det korrekte slide.
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;

    // Opdaterer hvilken dot der vises som aktiv baseret på det nuværende slide.
    updateActiveDot(slideIndex);
}

// Opsætning af touchstart-event for at understøtte swipe-funktionalitet.
document.querySelector('.slider').addEventListener('touchstart', e => {
    // Gemmer X-positionen ved start af swipe.
    startX = e.touches[0].clientX;
}, false);

// Opsætning af touchend-event for at detektere slutningen af en swipe.
document.querySelector('.slider').addEventListener('touchend', e => {
    // Gemmer X-positionen ved slut af swipe.
    const endX = e.changedTouches[0].clientX;

    // Beregner forskellen mellem start og slut X-positioner.
    const diffX = startX - endX;

    // Tjekker om swipe-bevægelsen var stor nok til at skifte slide.
    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            // Hvis swipet var til venstre, skift til næste slide.
            moveSlide(1);
        } else {
            // Hvis swipet var til højre, skift til forrige slide.
            moveSlide(-1);
        }
    }
}, false);

// Automatisk skift af slides hver 2000. millisekund (2 sekunder).
setInterval(() => moveSlide(1), 3000);

// Funktion til at fremhæve den aktive dot baseret på det aktuelle slide.
function updateActiveDot(index) {
    // Vælger alle dots og fjerner 'active' klassen.
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));

    // Tilføjer 'active' klassen til den dot, der matcher det aktuelle slide.
    dots[index].classList.add('active');
}

// Funktion til at oprette dots baseret på antallet af slides og sætter klik-lyttere på dem.
function createDots() {
    // Vælger alle slides og dot-containeren, hvor dots skal indsættes.
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');

    // For hver slide, opret en dot og tilføj den til containeren.
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');

        // Tilføjer klik-event, som skifter slide baseret på dot-index.
        dot.addEventListener('click', () => {
            const step = index - slideIndex;
            moveSlide(step);
        });

        dotsContainer.appendChild(dot);
    });

    // Markerer det første dot som aktivt ved opstart.
    updateActiveDot(0);
}

// Når DOM'en er fuldt indlæst, kald createDots for at initialisere dots.
document.addEventListener('DOMContentLoaded', createDots);

// Pop up
let popup = document.getElementById("åben");

function åben() { 
    popup.style.display="block"
         document.getElementById("rabatk").innerHTML = kode;
}

function luk() {
    popup.style.display="none";
}

hour = 14;

let rabatkoder = ['GA12EF', 'A394ED', 'B5893F'];
let kode = "";

for (var i =0; i<rabatkoder.length; ++i) {
    kode +=  rabatkoder[i] 
}

if (hour <12) { kode = "<p>" + rabatkoder[0] + "</p>"
}

else if (hour==12){ kode = "<p>" + rabatkoder[1] + "</p>" }

else {

    kode = "<p>" + rabatkoder[2] + "</p>"
}