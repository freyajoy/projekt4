


let pictures = [ 
    "/images/Wilma.png",
    "/images/sigurd.png",
    "/images/Wilma.png",
    "/images/sigurd.png",
    "/images/Wilma.png",
    "/images/sigurd.png"
]

let container = document.getElementById('billedbeholder');
     
for (let i = 0; i < pictures.length; i++) {
    let img = document.createElement('img');
    img.src = pictures[i];
    container.appendChild(img);
}

let karrusel= document.querySelector(".karrusel")
let  dragging = (e) => {
    karrusel.scrollLeft = e.pageX || e.touches[0].pageX;
}

karrusel.addEventListener("mousemove", dragging);
karrusel.addEventListener("touchmove", dragging);