
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});


const backToTopButton = document.getElementById('backToTop');
window.onscroll = function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = document.getElementById("typewriter-text");
    const text = "I am a Full Stack Developer, open-source enthusiast, and problem solver!";
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);  // Adjust speed
        }
    }
    type();
});

function typeWriter() {
    if (i < typewriterContent.length) {
        typewriterText.innerHTML += typewriterContent.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = function () {
    typeWriter();
};
