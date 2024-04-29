const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slider = document.querySelector('.slider');

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    const nextSliderBtn = slider.querySelector('.slider__control--next');
    nextSliderBtn.addEventListener('click', nextSlide);

    const prevSliderBtn = slider.querySelector('.slider__control--prev');
    prevSliderBtn.addEventListener('click', prevSlide);
});

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function submitPhoneNumber() {
    const phone = document.getElementById('phone').value;
    const phonePattern = /^(\+7|7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

    if (phonePattern.test(phone)) {
        alert('Phone number is correct');
        closeModal();
    } else {
        alert('Phone number is incorrect');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal__content');
  
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });