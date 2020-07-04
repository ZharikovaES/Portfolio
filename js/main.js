/* Скролл по якорям */
$(".menu").on("click",".menu__list-link", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    let id  = $(this).attr('href');
    let top = 0;

    if ($(document).width() < 565){
        $(".menu__btn").toggleClass("menu__btn-cross", 300);
     
        $(".header__language").slideToggle(170);
        $(".menu__list").slideUp();
        if (id !== $(".menu__list-link:first").attr('href')){
            //узнаем высоту от начала страницы до блока на который ссылается якорь - высота раскрывающегося меню
            top = $(id).offset().top - $(".menu").height();
        }
    } else {
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    }
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});

/* Переключение языка */
$(".header__language-link").click(function (event) {
    $(".language-link--active").removeClass("language-link--active");
    $(this).addClass("language-link--active");
});

/*
document.querySelectorAll(".header__language-link").forEach(
    (child) =>
    child.addEventListener('click', function(e) {
        document.querySelector(".language-link--active").classList.remove("language-link--active");
        child.classList.add("language-link--active");
    })
);
*/

/* "Бургер" меню */
$(".menu__btn").on('click', function(){
    $(".menu__list").slideToggle(300);
    $(".header__language").slideToggle(280);
    $(this).toggleClass("menu__btn-cross", 300);
});

