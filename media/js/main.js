/*Javascript Document*/

/**Gallery Carousel**/
$(document).ready(function () {
    var slickNav = '.carousel-g-thumb';
    var slickFor = '.carousel-g';
    $(slickFor).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: slickNav
    });
    $(slickNav).slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: slickFor,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('.g-right').click(function () {
        $('.carousel-g-thumb').slick('slickNext');
    });
    $('.g-left').click(function () {
        $('.carousel-g-thumb').slick('slickPrev');
    });

});

/* /Gallery Carousel*/

/*Roof Types Carousel Center Mode With Zoom Effect*/
$(document).ready(function () {
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        center: true,
        items:1,
        dots: false,
        nav: false,
        loop:true,
        autoplay: false,
        responsive:{
            1200: {
              items: 3
            },
            1400:{
                items:5
            },

        }
    });

    $('.r-right').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.r-left').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    // });
});
/* /Roof Types Carousel Center Mode With Zoom Effect*/

/* /Javascript Document*/


/*Animated Scroll Down Custom Plugin*/
(function ($) {

    $.fn.Route = function () {
        var e = $(this);
        var id = e.attr('href');
        var routingE = $('#' + id);
        var routingEoffset = routingE.offset().top;

        $("html, body").animate({scrollTop: routingEoffset}, 1000);
    }

    $(document).on('click', '.link-route', function (e) {
        e.preventDefault();
        $(this).Route();
    });


})(jQuery);
/* /Animated Scroll Down Custom Plugin*/
