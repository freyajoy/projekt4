
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