// Função do Slider (Bloco 1)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000); // Troca de slide a cada 3 segundos



// Validação e Envio do Formulário (Bloco 3)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('form-error');

    // Resetar erros
    errorMessage.textContent = '';

    // Validação simples
    if (!name || !email) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }


 });
