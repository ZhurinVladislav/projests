// Проверка на webp
// import * as flsFunctions from "./libs/functions.js";

// flsFunctions.isWebp();
// End

if(document.querySelector('.services-inner')){
    function openMenu() {
        const btn = document.querySelector('#btnMenu');
        const listMenu = document.querySelector('#scroll-item')
        console.log(btn);
        btn.addEventListener('click', () => {
            btn.classList.toggle('btn_active')

            if (btn.classList.contains('btn_active')) {
                listMenu.classList.add('list_active');
            } else {
                listMenu.classList.remove('list_active');
            }
        })
    }
    openMenu()
}



// if(document.querySelector('.services-inner__content')){
    
//     $(window).scroll(function(e) {
//         let scroll = $(window).scrollTop();
//         let block = $('#scroll-wrapper');
//         let element = $('#scroll-item');
        
//         let corTop = block.offset().top;
//         let corBottom = +block.innerHeight() + +corTop;
//         let heightBlock = corBottom - corTop;
    
//         if(window.innerWidth > 1199){
    
//             if(scroll >= corTop && scroll <= corBottom - 450) {
//                 element.css("transform", `translateY(${(scroll - corTop + 20)}px)`)
//             }
        
//         }
//     })
// }




$('.gallery-slider .slider').slick({
    lazyLoad: "ondemand",
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    rows: 2,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 1360,
            settings: {
                prevArrow: '.gallery-slider__left-arrow',
                nextArrow: '.gallery-slider__right-arrow',
                slidesToShow: 3,
            }
        },
        {
          breakpoint: 992,
          settings: {
            prevArrow: '.gallery-slider__left-arrow',
            nextArrow: '.gallery-slider__right-arrow',
            slidesToShow: 2,
          }
        },
        {
            breakpoint: 645,
            settings: {
                prevArrow: '.gallery-slider__left-arrow',
                nextArrow: '.gallery-slider__right-arrow',
                slidesToShow: 1,
                rows: 1,
            },
        }
    ]
});

// Табы на страницы товара мобильная версия
$('.list__link-arrow-mob').on('click', function(){
    let $this = $(this);
    $this.toggleClass('active-mob');
    $this.parents('.content__list .list__item').find('.list-inner').toggleClass('active');
});

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
    // none.prev().prev().find('.list__link-arrow').css('display', 'none')
    none.prev().css('display', 'none');
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


    // $('.menu-mobile .menu-item.parent .arrow-list-mob').on('click',function(){
    //     let $this = $(this);
    //     $this.next('ul').toggleClass('display')
    //     // $this.parents('.menu-item').children('.menu-list__inner').toggleClass('active')
    // })

    $('.menu-mobile .menu-item.parent .menu-link').on('click',function(){
        let $this = $(this);
        $this.next().next('ul').toggleClass('display');
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
$('.gallery').lightGallery({
    thumbnail: false,
    share: false,
    selector: '.slider__slide a',
    getCaptionFromTitleOrAlt: false
  });
  

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

// (() => {
//     const listItem = document.querySelector('.list-inner__item.active'),
//           listParent = listItem.closest('.list__inner'),
//           listArrow = listParent.previousElementSibling;
          
//     listParent.classList.add('active');
//     listArrow.classList.toggle('active-mob');
// })();