


let pictures = [ 
    "/images/Wilma.png",
    "/images/sigurd.png",
    "/images/Wilma.png"]

let container = document.getElementById('billedbeholder');
     
for (let i = 0; i < pictures.length; i++) {
    let img = document.createElement('img');
    img.src = pictures[i];
    container.appendChild(img);

}

let karrusel= document.querySelector(".karrusel")

let swipe=false

karrusel.addEventListener("mousedown", dragStart);
karrusel.addEventListener("touchstart", dragStart);

karrusel.addEventListener("mousemove", dragging);
karrusel.addEventListener("touchmove", dragging);

karrusel.addEventListener("mouseup", dragStop);
karrusel.addEventListener("mouseleave", dragStop);
karrusel.addEventListener("touchend", dragStop);



function dragStart (e) { 
    karrusel.scrollLeft = e.pageX 
    swipe=true
    e.preventDefault()  ;}

function dragging (e) { 
    karrusel.scrollLeft = e.pageX;
    swipe=false
    e.preventDefault()}

function dragStop (e) { 
    karrusel.scrollLeft = e.pageX;
    e.preventDefault()}


//|| mousemove.scrollLeft[0].pageX


