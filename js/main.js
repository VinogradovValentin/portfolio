'use strict'


const darkModeBtn = document.querySelector('.dark-mode-btn');


// Проверка тёмной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    darkModeBtn.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

// Проверка тёмной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeBtn.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}


// Если меняются системные настройки - меняем тему
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if (newColorScheme === 'dark') {
        darkModeBtn.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
    } else {
        darkModeBtn.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
    }
})


// Включение ночного режима по кнопке
darkModeBtn.onclick = function () {
    darkModeBtn.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}
