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

    // Табы на главной

    let tabs = document.querySelectorAll('.mainProjects__tablinks');
    
    if (tabs) {
        document.getElementById("tab1").classList.add('active');
        document.querySelector('[data-tab=tab1]').classList.add("active");

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                var tabName = this.getAttribute('data-tab');
                openTab(tabName);
            });
        });
        
        function openTab(tabName) {
            let i, tabcontent, tablinks;
        
            // Скрываем все содержимое вкладок
            tabcontent = document.getElementsByClassName("mainProjects__tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove('active')
            }
        
            // Деактивируем все кнопки вкладок
            tabs.forEach(function (tab) {
                tab.classList.remove("active");
            });
        
            // Показываем содержимое выбранной вкладки и активируем соответствующую кнопку
            document.getElementById(tabName).classList.add('active');
            document.querySelector('[data-tab="' + tabName + '"]').classList.add("active");
        }
    }
});