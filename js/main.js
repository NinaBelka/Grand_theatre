"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var oneSwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.arrow-left',
      prevEl: '.arrow-right'
    },
    breakpoints: {
      560: {
        slidesPerView: 2
      }
    }
  });

  var twoSwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      560: {
        slidesPerView: 2
      }
    }
  });

  var menuButton = document.querySelector('.menu-button');
  var menu = document.querySelector('.header');
  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
  });
});