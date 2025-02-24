document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Закрытие меню при клике вне области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container') && window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        }
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
            }
        });
    });
});




























