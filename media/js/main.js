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
        items: 1,
        dots: false,
        nav: false,
        loop: true,
        slideSpeed: 600,
        autoplay: false,
        responsive: {
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 5
            },

        }
    });

    $('.r-right').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.r-left').click(function () {
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
    };

    $(document).on('click', '.link-route', function (e) {
        e.preventDefault();
        $(this).Route();
    });
})(jQuery);
/* /Animated Scroll Down Custom Plugin*/

/*Back To Top Button*/
$(document).ready(function () {
    $(document).scroll(function () {
        var heightForShow = $('#gallery').offset().top;
        var documentScrollTop = $(document).scrollTop();
        if (documentScrollTop > heightForShow) {
            if (!$('#btt').hasClass('startBttAnim')) {
                if ($('#btt').hasClass('stopBttAnim')) {
                    $('#btt').removeClass('stopBttAnim')
                }
                $('#btt').addClass('startBttAnim');
            }
        } else {
            if ($('#btt').hasClass('startBttAnim')) {
                $('#btt').removeClass('startBttAnim');

                if (!$('#btt').hasClass('stopBttAnim')) {
                    $('#btt').addClass('stopBttAnim')
                }
            }
        }
    });

    $('#btt').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

});
/* /Back To Top Button*/


/*Height Adjust function for adjust selector height scheduled selector*/
/*
*  option = {} is an object and it contain two property (handle and 'asWindow');
*  Default option is asWindow. When selected asWindow value for selector height then selector height equal Window natural height;
*  You can change selector height after selected asWindow as css calc() method.For this :
*  For Example : {handle : {height : 'asWindow', negative: 100, }} => selectorHeight = windowHeight - 100px;
*  negative and positive must be integer and great than zero ... (by Alisoy);
* */
(function ($) {
    $.fn.heightAdjust = function (option = {}) {
        /*define
            properties*/
        var e = $(this);
        var o = option;
        var defaultHeight = $(window).height();
        var negH, posH, oH;
        /* /define
            properties*/

        /*Conditional
            Rules*/
        negH = (o.handle.negative == undefined || isNaN(o.handle.negative) || o.handle.negative < 0) ? 0 : o.handle.negative;
        posH = (o.handle.positive == undefined || isNaN(o.handle.positive) || o.handle.positive < 0) ? 0 : o.handle.positive;
        oH = (o.handle.height == 'asWindow') ? defaultHeight - negH + posH : o.handle.height - negH + posH;
        /* /Conditional
            Rules*/

        e.css({
            'height': oH
        });
    };

    /*Affected to selector with heightAdjust() method when DOM ready or window resize*/
    /*DOM ready*/
    $('.main_top').heightAdjust({
        handle: {
            height: 'asWindow',
            negative: 150,
            // positive:
        }
    });
    /* /DOM ready*/

    /*Window resize*/
    $(window).resize(function () {
        $('.main_top').heightAdjust({
            handle: {
                height: 'asWindow',
                negative: 150,
                // positive:
            }
        });
    });
    /* /Window resize*/
    /* /Affected to selector with heightAdjust() method when DOM ready or window resize*/

})(jQuery);
/*Height Adjust function for adjust selector height scheduled selector*/
