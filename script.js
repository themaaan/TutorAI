document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully!");
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
