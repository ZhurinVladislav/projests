document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.swiper-wrapper'),
        slide = document.querySelectorAll('.swiper-slide'),
        arraySlide = Array.from(slide);
        nextArrow = document.querySelector('.arrow-wrapper__right');
        prevArrow = document.querySelector('.arrow-wrapper__left');
        
  let clonedNode,
      slideSum,
      activeSlides,
      number = document.querySelector('.arrow-wrapper__pagination');
  
  // slider.concat(arrCopy)
  const swiper = new Swiper('.swiper', {
    loop: true,
    slideActiveClass: 'slider-item--active',
    loopedSlides: 4,
    speed: 900,
    spaceBetween: 20,
    allowTouchMove: false,
    // initialSlide: 3,
    slidesPerView: 1,
    centeredSlides: true,
    // pagination: {
    //   el: ".arrow-wrapper__pagination",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: nextArrow,
      prevEl: prevArrow,
    },
  
  });
  
  
  for (let i = 0; i < arraySlide.length; i++) {
    slideSum = i + 1;
    clonedNode = arraySlide[i].cloneNode(true);
    clonedNode.setAttribute('data-swiper-slide-index', `${6 + i}`);
    clonedNode.classList.add('copy')
    slider.prepend(clonedNode);
  }
  
  function sort() {
    const nodeList = document.querySelectorAll('.swiper-slide');
    let itemsArray = [];
    let parent = nodeList[0].parentNode;
    for (let i = 0; i < nodeList.length; i++) {    
      itemsArray.push(parent.removeChild(nodeList[i]));
    }
    // console.log(itemsArray);
    itemsArray.sort(function(nodeA, nodeB) {
        let textA = nodeA.getAttribute('data-swiper-slide-index');
        let textB = nodeB.getAttribute('data-swiper-slide-index');
        // console.log(textA);
        let numberA = parseInt(textA);
        let numberB = parseInt(textB);
        if (numberA < numberB) {
          return -1;
        }
        if (numberA > numberB) {
          return 1;
        }
        return 0;
      })
      .forEach(function(node) {
        // parent.append(node)
        if (node.getAttribute('data-swiper-slide-index') <= 5) {
          parent.append(node)
        } 
        else if (node.getAttribute('data-swiper-slide-index') > 5) {
          parent.prepend(node)
        }
      });
  }
  sort()

  function reverseArr() {
    const sliderList = document.querySelectorAll('.swiper-slide');
    let arrResult = [];
    let parentSlider = sliderList[0].parentNode;
    for (let i = 0; i < sliderList.length; i++) {
      if (sliderList[i].getAttribute('data-swiper-slide-index') > 5) {
        arrResult.push(parentSlider.removeChild(sliderList[i]));
      }   
      
    }
    arrResult.forEach(function(node) {
      parentSlider.prepend(node)
    });
  }

  reverseArr()


  // Пагинация
  // number.textContent = `1 / 6`
  function paginationCount() {
    const conutSlide = document.querySelector('.pagination__slide-count'),
          allSlide = document.querySelector('.pagination__all-slide');
    let count = 1;
    // number.textContent = `1 / ${slideSum}`
    conutSlide.textContent = count;
    allSlide.textContent = slideSum;
    
    // console.log(activeSlides);
    nextArrow.addEventListener('click', () => {
      // activeSlides = document.querySelector('.slider-item--active')
      count++
        
      number.textContent = `${count} / ${slideSum}`
      for (let i = 0; i < slider.length; i++) {
        count++
        // conutSlide.textContent = +1
        // const element = array[i];
        if (slider[i].getAttribute('data-swiper-slide-index') < 6) {
          count++
          // count.textContent = count++
        }
        
      }
    })
  }
  paginationCount()
})

