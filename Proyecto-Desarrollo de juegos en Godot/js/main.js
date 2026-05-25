// --- Lógica del Slideshow ---
let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");

function showSlides(n) {
    if (slides.length === 0) return; // Validación de seguridad
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block";
}

function plusSlides(n) { 
    showSlides(slideIndex += n); 
}

// Inicializar solo si estamos en la página de proyectos
if (slides.length > 0) {
    showSlides(slideIndex);
}

// --- Lógica del Formulario ---
const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('formFeedback');
        
        if(email.includes('@') && email.includes('.')) {
            feedback.style.color = "green";
            feedback.innerText = "¡Mensaje enviado correctamente!";
            form.reset();
        } else {
            alert("Por favor, ingresa un correo válido.");
        }
    });
}

// --- Lógica del Tema Claro/Oscuro ---
const toggleButton = document.getElementById('theme-toggle');

if(toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        if(document.body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    if(localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
    }
}