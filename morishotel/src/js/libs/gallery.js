document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.swiper-wrapper');
  const slide = document.querySelectorAll('.swiper-slide');
  const arraySlide = Array.from(slide);
  let clonedNode;
  
  // slider.concat(arrCopy)
  const swiper = new Swiper('.swiper', {
    loop: true,
    slideActiveClass: 'slider-item--active',
    loopedSlides: 4,
    speed: 900,
    spaceBetween: 20,
    allowTouchMove: false,
    initialSlide: 3,
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
  
  for (let i = 0; i < arraySlide.length; i++) {
    clonedNode = arraySlide[i].cloneNode(true);
    clonedNode.setAttribute('data-swiper-slide-index', `${6 + i}`);
    slider.prepend(clonedNode);
  }
  
  function sort() {
    var nodeList = document.querySelectorAll('.swiper-slide')
    var itemsArray = [];
    var parent = nodeList[0].parentNode;
    for (var i = 0; i < nodeList.length; i++) {    
      itemsArray.push(parent.removeChild(nodeList[i]));
    }
    itemsArray.sort(function(nodeA, nodeB) {
        var textA = nodeA.getAttribute('data-swiper-slide-index');
        var textB = nodeB.getAttribute('data-swiper-slide-index');
        var numberA = parseInt(textA);
        var numberB = parseInt(textB);
        if (numberA < numberB) return -1;
        if (numberA > numberB) return 1;
        return 0;
      })
      .forEach(function(node) {
        parent.appendChild(node)
      });
  }
  
  sort()
  
  let number = document.querySelector('span.swiper-pagination-total');
  number.textContent = '6';
  console.log(number);
})

