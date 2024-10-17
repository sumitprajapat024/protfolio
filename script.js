
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
window.onscroll = function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const typewriterText = document.getElementById("typewriter-text");
const typewriterContent = "I am a Web Developer | Aspiring Full Stack Developer | Open Source Contributor";
let i = 0;

function typeWriter() {
    if (i < typewriterContent.length) {
        typewriterText.innerHTML += typewriterContent.charAt(i);
        i++;
        setTimeout(typeWriter, 100); 
    }
}

window.onload = function() {
    typeWriter();
};
