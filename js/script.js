AOS.init();
//______SWIPER
$(document).ready(function () {
    let swiper;
    swiper = new Swiper(".mySwiper", {
        effect: 'fade',
        speed: 1000,
        // allowTouchMove: false,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        slidesPerView: 1,
        // spaceBetween: 24,
        allowTouchMove: true,
        pagination: {
            spaceBetween: 10,
            el: '.swiper-pagination',
            type: 'bullets',
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
});