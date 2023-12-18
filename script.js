document.addEventListener('DOMContentLoaded', () => {
    // Маска для телефона
    
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
          event.keyCode && (keyCode = event.keyCode);
          var pos = this.selectionStart;
          if (pos < 3) event.preventDefault();
          var matrix = "+7 (___) ___ ____",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = this.value.replace(/\D/g, ""),
              new_value = matrix.replace(/[_\d]/g, function(a) {
                  return i < val.length ? val.charAt(i++) : a
              });
          i = new_value.indexOf("_");
          if (i != -1) {
              i < 5 && (i = 3);
              new_value = new_value.slice(0, i)
          }
          var reg = matrix.substr(0, this.value.length).replace(/_+/g,
              function(a) {
                  return "\\d{1," + a.length + "}"
              }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
          }
          if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
          }
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
    
    });
    

    // Меню
    const menuBtn = document.querySelector('.header__menuBtn');
    const mobileNav = document.querySelector('.header__nav');
    const menu_body = document.querySelector('body');;

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuBtn.classList.toggle('active');
            menu_body.classList.toggle('active');
        });
    }

    // Меню мобильное 

    const arrowsBot = document.querySelectorAll(".header__nav-arrow");

    if (arrowsBot !== 0) {
        arrowsBot.forEach(arr =>{
            arr.addEventListener('click', (e) => {
                let submenu = e.target.parentNode.parentNode.lastElementChild;
                submenu.classList.toggle('active');
            });
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
    let contents = document.querySelectorAll('.mainProjects__tabcontent');
    
    if (tabs.length !== 0) {
        document.getElementById("tab1")?.classList.add('active');
        document.querySelector('[data-tab=tab1]')?.classList.add("active");
    
        contents.forEach(el => {
            el.classList.add('active')
        });


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
    
    const bulletsFunc = () => {
            const bullets = document.querySelectorAll('.swiper-pagination-bullet');
            if (bullets.length !== 0) {
                bullets.forEach(el => {
                    el.addEventListener('mouseenter', (e) => {
                        e.target.click();
                    });
                })
            }
    }
    bulletsFunc();

    for (let index = 1; index < contents.length; index++) {
        const element = contents[index];
        element.classList.remove('active');
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
                tabcontent[i].classList.remove('active');
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


    // Слайдер реализованные проекты

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