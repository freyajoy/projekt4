let acc = document.querySelectorAll('.accordion');
for (let i = 0; i < acc.length; i++) {
    let accordion = acc[i];
    accordion.addEventListener('click', function(e) {
        accordion.classList.toggle('active');
    });
}

