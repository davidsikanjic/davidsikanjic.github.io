// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50 ? 
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)' : 
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
});

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    current++;
    if (current >= slides.length) {
        current = 0;
    }
    showSlide(current);
});

prevBtn.addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = slides.length - 1;
    }
    showSlide(current);
});

showSlide(current);

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}