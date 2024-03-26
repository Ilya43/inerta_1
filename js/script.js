// AOS.init();
AOS.init({ disable: 'mobile' });
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

$(document).ready(function () {

    $("#form-ajax").submit(function () {
        $.ajax({
            type: "POST",
            url: "smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-ajax").trigger("reset");
        });
        return false;
    });

});