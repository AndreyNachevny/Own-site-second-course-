
// Получаем все изображения слайдера
const slides = document.querySelectorAll('.slider img');

// Получаем все миниатюры
const thumbnails = document.querySelectorAll('.thumbnail');

// Получаем кнопки переключения слайдов
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

// Устанавливаем начальный индекс активного слайда
let currentSlide = 0;

// Функция для отображения указанного слайда
function showSlide(index) {
  // Скрываем все слайды
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  // Отображаем указанный слайд
  slides[index].classList.add('active');
}

// Функция для переключения к предыдущему слайду
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Циклическое переключение
  showSlide(currentSlide);
}

// Функция для переключения к следующему слайду
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Циклическое переключение
  showSlide(currentSlide);
}

// Добавляем обработчики событий для кнопок
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Показываем начальный слайд
showSlide(currentSlide);

// Добавляем обработчики событий для миниатюр
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('mouseover', () => {
    showSlide(index); // Показываем слайд, соответствующий текущей миниатюре
  });
});

const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
  star.addEventListener('mouseenter', () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  });

  star.addEventListener('mouseleave', () => {
    stars.forEach(s => {
      s.classList.remove('active');
    });
  });

  star.addEventListener('click', () => {
    const value = star.dataset.value;
    alert(`Вы поставили рейтинг: ${value}/5`);
    // Здесь вы можете отправить значение рейтинга на сервер или выполнить другие действия
  });
})

document.querySelector('.add-to-cart-button').addEventListener('click', function() {
  
  alert('Товар добавлен в корзину!');
});

function saveReview(review) {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Функция для отображения отзывов на странице
function displayReviews() {
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = '';

  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <p><strong>Имя:</strong> ${review.userName}</p>
      <p><strong>Оценка:</strong> ${review.rating}</p>
      <p><strong>Комментарий:</strong> ${review.comment}</p>
      <hr>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayReviews();
  
  const stars = document.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });

    star.addEventListener('mouseleave', () => {
      stars.forEach(s => {
        s.classList.remove('active');
      });
    });

    star.addEventListener('click', () => {
      const rating = index + 1; // индекс звезды плюс 1
      const comment = document.getElementById('comment').value;

      // Вывод окна с запросом ввода данных пользователя (можно реализовать модальное окно)
      const userName = prompt("Введите ваше имя:");

      // Создание объекта отзыва
      const review = {
        rating,
        comment,
        userName
      };

      // Сохранение отзыва в localStorage
      saveReview(review);

      // Обновление отображения отзывов на странице
      displayReviews();

      // Очистка поля ввода
      document.getElementById('comment').value = '';
    });
  });
});