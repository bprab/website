var swiper = new Swiper(".brandhistory", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination.bhis",
        clickable: true,
    },
    observer: true,
    observeParents: true,
});

var swiper2 = new Swiper(".swiper-container.story2", {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  observer: true,
  observeParents: true,
});
var swiper3 = new Swiper(".swiper-container.story", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next.bt",
    prevEl: ".swiper-button-prev.bt",
  },
  thumbs: {
    swiper: swiper2,
  },
  observer: true,
  observeParents: true,
});

var swiper4 = new Swiper(".possible", {
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination.bt2",
    clickable: true,
  },
  observer: true,
  observeParents: true,
});

var swiper5 = new Swiper(".leftbox", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination.bt3",
    clickable: true,
  },
});

var swiper6 = new Swiper(".middlebox", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination.bt4",
    clickable: true,
  },
});

var swiper7 = new Swiper(".model", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

$(document).ready(function(){
  $(".menubar > span:eq(1)").click(function(){
    $('nav,.submenu').toggleClass("on");
    $(this).toggleClass("on");
  });
  $("nav > div > .title").click(function() {
    $('#'+$(this).data('id')).toggleClass("on").siblings().removeClass("on");
  });
  $(".tab > span").click(function() {
    $(this).addClass("on").siblings().removeClass("on");
    $('#'+$(this).data('id')).addClass('on').siblings().removeClass('on');
  });

  $(".tab2 > span").click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('#'+$(this).data('id')).addClass('on').siblings().removeClass('on');
  });

  $('.scrolltop').click(function(){
    $('html, body').animate({
        scrollTop : 0
    }, 1000);
  });
});