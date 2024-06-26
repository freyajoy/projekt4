

let pictures = [ 
    "./images/wilma.jpg",
    "./images/sigurd.jpg",
    "./images/line.jpg",
    "./images/kasper.jpg"]

let altText = [
    "Billede af Wilma", 
    "Billede af Sigurd", 
    "Billede af Line", 
    "Billede af Kasper"
]

let container = document.getElementById('billedbeholder');
     
for (let i = 0; i < pictures.length; i++) {
    let img = document.createElement('img');
    img.src = pictures[i];
    img.alt = altText[i];
    container.appendChild(img);
}

let karrusel= document.querySelector(".karrusel")


karrusel.addEventListener("mousedown", dragStart);
karrusel.addEventListener("touchstart", dragStart);

karrusel.addEventListener("mousemove", dragging);
karrusel.addEventListener("touchmove", dragging);

karrusel.addEventListener("mouseup", dragStop);
karrusel.addEventListener("mouseleave", dragStop);
karrusel.addEventListener("touchend", dragStop);

let swipe=false, prevPageX, prevScrollLeft

function dragStart (e) { 
    // Opdaterer globale variablers værdi ved Event
    swipe=true
    prevPageX = e.pageX || e.touches[0].pageX
    prevScrollLeft = karrusel.scrollLeft
    e.preventDefault()  ;}

function dragging (e) { 
    //Scroller karrusel
    if (swipe==false) return;
    let position = (e.pageX || e.touches[0].pageX) - prevPageX
    karrusel.scrollLeft = prevScrollLeft - position
    e.preventDefault()
}

function dragStop (e) { 
    e.preventDefault()
    swipe=false}


