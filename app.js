console.log("Salut ")

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Typing animation for hero subtitle
const typing = document.querySelector('.typing');
const texts = ['Full Stack Developer & Student', 'Web Enthusiast', 'Problem Solver', 'Tech Explorer'];
let idx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    if (!typing) return;
    let current = texts[idx];
    if (isDeleting) {
        typing.textContent = current.substring(0, charIdx--);
        if (charIdx < 0) {
            isDeleting = false;
            idx = (idx + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 50);
        }
    } else {
        typing.textContent = current.substring(0, charIdx++);
        if (charIdx > current.length) {
            isDeleting = true;
            setTimeout(type, 1200);
        } else {
            setTimeout(type, 100);
        }
    }
}
type();