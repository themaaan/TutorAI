document.addEventListener("DOMContentLoaded", function() {
    // Haetaan kaikki palveluosiot
    const sections = document.querySelectorAll('.product-section');
    
    // Määritellään ScrollReveal jokaiselle osiolle erikseen
    sections.forEach((section, index) => {
        ScrollReveal().reveal(section, {
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            delay: index * 200,
            easing: 'ease',
            opacity: 0,
            scale: 0.9,
            viewFactor: 0.5,
            viewOffset: {
                top: 50,
                bottom: 50
            }
        });
    });
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// ScrollReveal kirjaston käyttö
ScrollReveal().reveal('.reveal-left', {
    distance: '100px',
    origin: 'left',
    opacity: 0,
    delay: 200,
    duration: 1000,
    easing: 'ease-out'
});

ScrollReveal().reveal('.reveal-right', {
    distance: '100px',
    origin: 'right',
    opacity: 0,
    delay: 200,
    duration: 1000,
    easing: 'ease-out'
});