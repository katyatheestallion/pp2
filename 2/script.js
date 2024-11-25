document.addEventListener('DOMContentLoaded', function() {
    // Кнопка "Показать больше"
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    showMoreBtn.addEventListener('click', function() {
        moreInfo.classList.toggle('hidden');
        showMoreBtn.textContent = moreInfo.classList.contains('hidden') ? 'Показать больше' : 'Скрыть';
    });

    // Селектор темы оформления
    const themeSelector = document.getElementById('theme');
    const body = document.body;

    themeSelector.addEventListener('change', function() {
        const selectedTheme = themeSelector.value;
        body.className = selectedTheme + '-theme';
        localStorage.setItem('theme', selectedTheme);
    });

    // Загрузка сохраненной темы из localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme + '-theme';
        themeSelector.value = savedTheme;
    }

    // Слайдер
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let slideIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
        showSlide(slideIndex);
    });

    nextBtn.addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % slides.children.length;
        showSlide(slideIndex);
    });
});