// Проверка на webp
// import * as flsFunctions from "./libs/functions.js";

// flsFunctions.isWebp();
// End

// gallery
$(function(){
    const status = $('.arrow-wrapper__pagination');
    const slickElement = $('.gallery .slider');
    slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        let i = (currentSlide ? currentSlide : 0) + 1;
        status.text(i + '/' + slick.slideCount);
    });

    $('.gallery .slider').slick({
        //lazyLoad: "ondemand",
        //centerMode: true,
        //initialSlide: 2,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        swipe: true,
        cssEase: "linear",
        prevArrow: '.gallery__slider-wrapper .arrow-wrapper__left',
        nextArrow: '.gallery__slider-wrapper .arrow-wrapper__right',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                  variableWidth: false,
                }
              }
        ]
    });
    // let firstSlide = $(`[data-slick-index="2"]`);
    // firstSlide.addClass('active')
    if( window.innerWidth >= 1438 ){
        let firstSlide = $(`[data-slick-index="2"]`);
        firstSlide.addClass('active')
    } else if (window.innerWidth >= 700) {
        let firstSlide = $(`[data-slick-index="1"]`);
        firstSlide.addClass('active')
    } else {
        let firstSlide = $(`[data-slick-index="0"]`);
        firstSlide.addClass('active')
    }

    if(window.innerWidth >= 1438){
        $('.gallery .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let current = currentSlide + 2;
            let next = nextSlide + 2;
            $(`[data-slick-index="${current}"]`).removeClass('active');
            $(`[data-slick-index="${next + 2}"]`).removeClass('active');
            $(`[data-slick-index="${next}"]`).addClass('active');
        });
   } else if (window.innerWidth >= 700) {
        $('.gallery .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let current = currentSlide + 1;
            let next = nextSlide + 1;
            $(`[data-slick-index="${current}"]`).removeClass('active');
            $(`[data-slick-index="${next + 1}"]`).removeClass('active');
            $(`[data-slick-index="${next}"]`).addClass('active');
        });
    } else {
        $('.gallery .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            let current = currentSlide;
            let next = nextSlide ;
            $(`[data-slick-index="${current}"]`).removeClass('active');
            $(`[data-slick-index="${next + 1}"]`).removeClass('active');
            $(`[data-slick-index="${next}"]`).addClass('active');
        });
    }

    // $('.gallery .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     let current = currentSlide + 2;
    //     let next = nextSlide + 2;
    //     $(`[data-slick-index="${current}"]`).removeClass('active');
    //     $(`[data-slick-index="${next + 2}"]`).removeClass('active');
    //     $(`[data-slick-index="${next}"]`).addClass('active');
    // });
});

// rooms
$(function(){

    // инициализация слайдера
    $('.rooms .slider-wrapper .slider').slick({
        lazyLoad: "ondemand",
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        cssEase: "linear",
        prevArrow: false,
        nextArrow: false,
    });

    $('.rooms .content-right').slick({
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        fade: true,
        arrows: false,
    });

    // Табы
    $('.rooms .list__btn').on('click', function(){
        $('.rooms .list__btn.active').removeClass('active');
        $(this).addClass('active');
        
        let index = $(this).parent().index();
        $('.rooms .content-right').slick('slickGoTo', index)
    });  

    // Cтрелки переключения
    $('.rooms .arrow-wrapper__left').on('click', function() {
        $(this).parents('.slider-wrapper').find('.slider').slick('slickPrev');
    });
    $('.rooms .arrow-wrapper__right').on('click', function() {
        $(this).parents('.slider-wrapper').find('.slider').slick('slickNext');
    });

    // Подключаем всплывающую галерею
    $('.rooms .slider-wrapper .slider').lightGallery({
        thumbnail: false,
        share: false,
        selector: '.slick-slide:not(.slick-cloned)',
        getCaptionFromTitleOrAlt: false
    });
});


// Табы на страницы товара мобильная версия
$('.list__link-arrow-mob').on('click', function(){
    let $this = $(this);
    $this.toggleClass('active-mob');
    $this.parents('.content__list .list__item').find('.list-inner').toggleClass('active');
});


// Слайдер на странице 
(function(){
    if (document.querySelector('.room-slider')) {
        //	количество элементов в нижнем слайдере
        var productSliderCount = 3;
        var productSliderX;
        var productSliderY;
        //	инициализируем верхний слайдер с большим фото
        $(".room-slider__top").slick({
            dots: false,
            infinite: true,
            speed: 500,
            swipe: true,
            autoplay: false,
            waitForAnimate: false,
            prevArrow: '.room-slider__arrow-wrapper > .arrow-wrapper__left',
            nextArrow: '.room-slider__arrow-wrapper > .arrow-wrapper__right',
            responsive: [
                {
                  breakpoint: 970,
                  settings: {
                    //prevArrow: '',
                    //nextArrow: ''
                  }
                }
            ]
        });
    
        //	инициализируем нижний слайдер с маленькими фото
        $(".room-slider__bottom").slick({
            slidesToShow: productSliderCount,
            dots: false,
            infinite: false,
            swipeToSlide: true,
            speed: 500,
            autoplay: false,
            waitForAnimate: false,
            slidesToShow: 4,
            arrows: false,
            responsive: [
                {
                  breakpoint: 970,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });        
        
        if(document.querySelector('.room-slider__bottom')){
            //	добавляем первому картинке класс 'active' для отображения рамки
            document.querySelector('.room-slider__bottom .slick-slide:first-child img').classList.add('active');

            document.querySelector('.room-slider__bottom .slick-slide').addEventListener('click', (e) => {
                e.preventDefault()
            })
        
            //	листаем верхний слайдер при клике на элементы нижнего слайдера
            var slide = document.querySelector(".room-slider__bottom");
            
            slide.onmousedown = function(e) {
                //	если кликнули по картинке, а не по обёртке, записываем текущие координаты мыши
                if (e.target.tagName == 'IMG') {
                    productSliderX = e.screenX;
                    productSliderY = e.screenY;
                }
            }
            slide.onmouseup = function(e) {
                if (e.target.tagName == 'IMG') {
                //	если при клике курсор сдвинулся не больше, чем на 10px
                    if (e.screenX < productSliderX + 10 &&
                        e.screenX > productSliderX - 10 &&
                        e.screenY < productSliderY + 10 &&
                        e.screenY > productSliderY - 10) {
                        //	листаем верхний слайдер до выбранного элемента
                        $(".room-slider__top").slick('slickGoTo', e.target.closest('.slick-slide').getAttribute('data-slick-index'));
                    }
                }
            }
        
            //	при листании верхнего слайдера
            //	меняем активный элемент в нижнем
            //	и, при необходимости, листаем нижний (синхронизируем слайдеры)
            $(".room-slider__top").on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                //	убираем и добавляем классы
                document.querySelector('.room-slider__bottom img.active').classList.remove('active');
                $('.room-slider__bottom .slick-slide[data-slick-index="'+nextSlide+'"] img').addClass('active');
        
                //	проверяем, будет ли виден нижний слайд после пролистывания верхнего, если нет, крутим вручную
                if (document.querySelector('.room-slider__bottom .slick-slide[data-slick-index="'+nextSlide+'"]').classList.contains('slick-active') != true) {
        
                    if (currentSlide < nextSlide) {
                        if ((nextSlide - (productSliderCount - 1)) > 0) {
                            //	если листаем вправо, то нужно крутить на (количество слайдов минус один)
                            $(".room-slider__bottom").slick('slickGoTo', nextSlide - (productSliderCount - 1));
                        }
                    } else {
                        $(".room-slider__bottom").slick('slickGoTo', nextSlide);
                    }
                }
            });
        }
    }
}());

// Стрелка прокрутка на вверх
$(function(){
    //Стрелка прокрутка на вверх
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $('.scroll-top').addClass('active')
        } else {
            $('.scroll-top').removeClass('active')
        };
    })
    $('.scroll-top').click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});

// Скрывем всплывающие меню, если не li
$(function(){
    let list = Array.from($('.list-inner'));

    for (let i = 0; i < list.length; i++) {
        if (list[i].firstElementChild === null) {
            list[i].className = 'list__inner list-inner none'
        }
    }

    // Удаление стрелки
    let none = $('.none')
    none.prev().prev().find('.list__link-arrow').css('display', 'none')
});

// Мобильное меню
$(function(){
    let menuToggle = $('.menu__toggle');
    let menu = $('.menu-mobile');
    let header = $('.header');

    let close = $('.menu-mobile .close');
    let flag = false;

    menuToggle.on('click', function(){
        menuToggle.toggleClass('active');
        $('html,body').toggleClass('menu-open');
        //header.toggleClass("menu-open");
        
        if(flag){
            menu.removeClass("active");
            setTimeout(function () {
                menu.removeClass("display");
            }, 300)
            flag = false
        } else {
            menu.addClass("display");
            setTimeout(function () {
                menu.addClass("active");
            }, 20)
            flag = true
        }
    })


    close.on('click',function(e){
        menuToggle.removeClass('active');
        $('html,body').removeClass('menu-open');
        header.removeClass("menu-open");

        menu.removeClass("active");
        setTimeout(function () {
            menu.removeClass("display");
        }, 300)
        flag = false
    })


    $('.menu-mobile .menu-item.parent .arrow-list-mob').on('click',function(){
        let $this = $(this);
        $this.next('ul').toggleClass('display')
        // $this.parents('.menu-item').children('.menu-list__inner').toggleClass('active')
    })

    $('.menu-mobile .menu-item.parent .menu-list__inner .menu-item.parent .arrow-list-mob').on('click',function(){
        let $this = $(this);
        console.log($this);
        // $this.next('ul').toggleClass('open')
        // $this.parents('.menu-item').toggleClass('active')
        $this.next('ul').toggleClass('open')
    })

});

/// Подключаем всплывающую галерею
$('.main').lightGallery({
  thumbnail: false,
  share: false,
  selector: '.gallery-item a',
  getCaptionFromTitleOrAlt: false
});

/// Подключаем всплывающую галерею на главной странице
// $('.gallery').lightGallery({
//     thumbnail: false,
//     share: false,
//     selector: '.slider__slide a',
//     getCaptionFromTitleOrAlt: false
//   });
  

//overlay
$(function(){

  function showOverlay (classname, timeout, attributes) {
      $('.' + classname).addClass('active');
      $('.overlay').addClass('active');
      $('html, body').addClass('overlay-active');
      $('body').addClass('overlay-' + classname);

      //  так как свойство 'display', которое меняется с этим классом не анимируется
      //  делаем задержку в 5мс
      setTimeout(function() {
          $('.overlay').css('opacity', '1');
          $('.overlay__content').css('transform', 'scale(1)');
      }, 5); 
  }

  //  Закрывает все активные всплывающие окна
  function closeOverlay() {
      $('.overlay').css('opacity', '0');
      $('.overlay__content').css('transform', 'scale(.8)');
      setTimeout(function() {
          $('.overlay').removeClass('active');
          $('html, body').removeClass('overlay-active');
          $('.overlay__content>*').removeClass('active');

          $('.form-reviews .reviews-block').innerHTML = "";
      }, 200);
  }

  $('[data-open]').on('click', function(e) {
      var target = $(this)[0];
      var attributes = e.target.attributes;
      if($(this).hasClass('close-open-form')){
          closeOverlay();
          setTimeout(() => {
              showOverlay($(this).attr('data-open'), 'default');
          },1000)
      }

      showOverlay($(this).attr('data-open'), 'default');
  });

  //  Вызов функции closeOverlay() при клике на крестик или фон всплывающего окна
  $('.overlay__close, .overlay__bg, .close').on('click', function(e) {
      e.preventDefault();
      closeOverlay();
  });

  //успешная отправка для modx ajax form 
  $(document).on('af_complete', function(event, response) {
      closeOverlay();
      setTimeout(() => {
          showOverlay('form-success', 'default');
      },1000)
  });

});

/// Отправка форм
(function(){
  let submitButtons = document.querySelectorAll('button.submit');

  /// novalid если не прошла валидацию запрещаем отправку
  for(let submitButton of submitButtons){
      submitButton.addEventListener('click', function(event){
          let target =event.target;
          if(target.classList.contains('submit')){
              let formNovalid = target.closest('.novalid');
              if(formNovalid){
                  event.preventDefault();
              }
          }
      })
  }
}());

//Убираем фокус с инпута
(function(){
  $('input, textarea').change(function(){
      if($(this).val()){
          $(this).addClass('focus')
      } else {
          $(this).removeClass('focus')
      }
  })
}());


// Блок с контактной информацией
(function(){
    $('.map__toggle').on('click', function(){
        $('.map__content').toggleClass('transform');
        $('.map__toggle').toggleClass('transform-arrow');
    })
}());
