document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ua: {
            "nav-home": "Головна",
            "nav-about": "Про мене",
            "nav-projects": "Проєкти",
            "nav-contacts": "Контакти",
            "hero-title": "Ласкаво просимо на сайт Шульги Дениса!",
            "hero-subtitle": "Я створюю креативні вебрішення",
            "hero-btn": "Дізнатися більше",
            "about-title": "Про мене",
            "about-desc": "Я веброзробник із досвідом створення сучасних сайтів і додатків. Люблю чистий код, дизайн і нові технології.",
            "about-short": "Я — Іваненко Іван, веброзробник з досвідом у HTML, CSS, JavaScript. Створюю сучасні та адаптивні сайти.\n\nПрацюю з Git, Node.js, маю досвід командної роботи та розробки SPA.",
            "projects-title": "Мої проєкти",
            "contacts-title": "Контакти",
            "form-email": "E-mail:",
            "form-message": "Повідомлення:",
            "form-send": "Надіслати",
            "form-success": "Дякуємо! Ваше повідомлення надіслано.",
            "to-top": "Догори ↑",
            "footer-copyright": "© 2025 Вебстудія Шульги Дениса",
            "project1-title": "Проєкт 1",
            "project1-desc": "Тут міг бути саме ваш проект!",
            "project2-title": "Проєкт 2",
            "project2-desc": "Тут міг бути саме ваш проект!",
            "project3-title": "Проєкт 3",
            "project3-desc": "Тут міг бути саме ваш проект!"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About",
            "nav-projects": "Projects",
            "nav-contacts": "Contacts",
            "hero-title": "Welcome to Shulga Denys Website!",
            "hero-subtitle": "I create creative web solutions",
            "hero-btn": "Learn more",
            "about-title": "About Me",
            "about-desc": "I am a web developer with experience in creating modern websites and apps. I love clean code, design, and new technologies.",
            "about-short": "I am Shulga Denys, a web developer experienced in HTML, CSS, and JavaScript. I create modern and responsive websites.\n\nI work with Git, Node.js, and have experience in teamwork and SPA development.",
            "projects-title": "My Projects",
            "contacts-title": "Contacts",
            "form-email": "E-mail:",
            "form-message": "Message:",
            "form-send": "Send",
            "form-success": "Thank you! Your message has been sent.",
            "to-top": "To Top ↑",
            "footer-copyright": "© 2025 Shulga Denys Web Studio",
            "project1-title": "Project 1",
            "project1-desc": "Your project could be here!",
            "project2-title": "Project 2",
            "project2-desc": "Your project could be here!",
            "project3-title": "Project 3",
            "project3-desc": "Your project could be here!"
        }
    };

    const langBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'ua';

    function setLang(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        langBtn.textContent = lang === 'ua' ? 'EN' : 'UA';
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    langBtn.addEventListener('click', () => {
        setLang(currentLang === 'ua' ? 'en' : 'ua');
    });

    setLang(currentLang);
});