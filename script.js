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

    // Табы на главной проекты

    let tabs = document.querySelectorAll('.mainProjects__tablinks');
    
    if (tabs.length !== 0) {
        document.getElementById("tab1")?.classList.add('active');
        document.querySelector('[data-tab=tab1]')?.classList.add("active");

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

    // Табы на главной реализованные проекты

    let rtabs = document.querySelectorAll('.mainRealised__tablinks');
    
    if (rtabs.length !== 0) {
        document.getElementById("rtab1")?.classList.add('active');
        document.querySelector('[data-re-tab=rtab1]')?.classList.add("active");

        rtabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                var tabName = this.getAttribute('data-re-tab');
                openTab(tabName);
            });
        });
        
        function openTab(tabName) {
            let i, tabcontent, tablinks;
        
            // Скрываем все содержимое вкладок
            tabcontent = document.getElementsByClassName("mainRealised__tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove('active')
            }
        
            // Деактивируем все кнопки вкладок
            rtabs.forEach(function (tab) {
                tab.classList.remove("active");
            });
        
            // Показываем содержимое выбранной вкладки и активируем соответствующую кнопку
            document.getElementById(tabName).classList.add('active');
            document.querySelector('[data-re-tab="' + tabName + '"]').classList.add("active");
        }
    }

    // Слайдер наши проекты

    const swiperProject = new Swiper('.swiperProject', {
        direction: 'horizontal',
        spaceBetween: 20,
        loop: true,
        
        pagination: {
          el: '.swiper-pagination-project',
          clickable: true,
        },
    });
    
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    if (bullets.length !== 0) {
        bullets.forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                e.target.click();
            });
        })
    }

    // Слайдер реализованные проекты


    // const swiperRealised = new Swiper('.swiperRealised', {
    //     direction: 'horizontal',
    //     slidesPerView: 3,
    //     spaceBetween: 36,
    //     loop: true,
            
    //     navigation: {
    //         nextEl: '.swiper-realised-next',
    //         prevEl: '.swiper-realised-prev',
    //     },
    //  });

    const arrow_next = document.querySelectorAll('.mainRealised__next');
    const arrow_prev = document.querySelectorAll('.mainRealised__prev');

    // console.log(arrow_next)

    if (arrow_next.length !== 0) {
        arrow_next.forEach(arr => {
            arr.addEventListener('click', (e) => {
                let list = e.target.parentNode.firstElementChild;
                list.scrollBy(350, 0);
            });
        });
    }

    if (arrow_prev.length !== 0) {
        arrow_prev.forEach(arr => {
            arr.addEventListener('click', (e) => {
                let list = e.target.parentNode.firstElementChild;
                list.scrollBy(-350, 0);
            });
        });
    }
        
    // Ссылка на все проекты, перенос вниз

    const elem1 = document.querySelector('.mainProjects__panel-link');
    const place1 = document.querySelector('.mainProjects__inner');
    const back1 = document.querySelector('.mainProjects__panel');
    
    if (window.innerWidth < 577) {
        place1.append(elem1);
    } else {
        back1.append(elem1);
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth < 577) {
            place1.append(elem1);
        } else {
            back1.append(elem1);
        }
    });

    // Ссылка на все реализованные проекты, перенос вниз

    const elem2 = document.querySelector('.mainRealised__panel-link');
    const place2 = document.querySelector('.mainRealised__inner');
    const back2 = document.querySelector('.mainRealised__panel');
    
    if (window.innerWidth < 577) {
        place2.append(elem2);
    } else {
        back2.append(elem2);
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth < 577) {
            place2.append(elem2);
        } else {
            back2.append(elem2);
        }
    });
});