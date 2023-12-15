document.addEventListener('DOMContentLoaded', () => {
    // Меню
    const menuBtn = document.querySelector('.header__menuBtn');
    const mobileNav = document.querySelector('.header__nav');


    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    // Выпадашки в блоке "Наши услуги"

    const serviceBtns = document.querySelectorAll('.mainService__panel-btn');

    if (serviceBtns) {
        let newArr = Array.from(serviceBtns);
        newArr.forEach(el => {
            el.addEventListener('click', (e) => {
                let elem = e.target;
                let img = elem.lastElementChild;
                let text = elem.parentNode.parentNode.lastElementChild;
                text.classList.toggle('active');
                img.classList.toggle('active');
            });
        });
    }
});