var karrusel= document.querySelector(".karrusel")
var dragging = (e) => {
    karrusel.scrollLeft = e.pageX;
}
karrusel.addEventListener("mousemove", dragging);
karrusel.addEventListener("touchmove", dragging);
