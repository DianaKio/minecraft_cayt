document.addEventListener('DOMContentLoaded', function() {
    // Рейтинг в форме отзыва
    const stars = document.querySelectorAll('.rating-input i');
    let selectedRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-value'));
            selectedRating = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                    s.classList.add('active');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Обработка формы отзыва
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (selectedRating === 0) {
                alert('Пожалуйста, выберите оценку');
                return;
            }
            
            // Здесь можно добавить AJAX-запрос для отправки формы
            alert('Спасибо за ваш отзыв! После модерации он появится на сайте.');
            this.reset();
            
            // Сброс рейтинга
            stars.forEach(star => {
                star.classList.remove('fas');
                star.classList.add('far');
                star.classList.remove('active');
            });
            selectedRating = 0;
        });
    }
    
    // Анимация кнопок "Купить"
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.textContent = 'Добавлено!';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'В корзину';
                this.style.backgroundColor = '';
            }, 2000);
        });
    });
});