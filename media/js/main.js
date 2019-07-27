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
*  For Example : {handle : {height : 'asWindow', negative: 100, }} => selectorHeight = windowHeight - 100px; || selectorHeight = windowHeight + positive;
*  negative and positive must be integer and great than zero ... (by Alisoy);
* */
(function ($) {

    /*Custom heightAdjust() plugin*/
    $.fn.heightAdjust = function (option = {}) {
        var e = $(this);
        var createObj = {};
        var unAssignedArr = [];
        var assignedArr = [];
        var deviceKey;

        /*Change Array elements by index*/
        __changeIndex = (Arr, index_1, index_2) => {
            var lastAttr = Arr[index_1];
            Arr[index_1] = Arr[index_2];
            Arr[index_2] = lastAttr;

            return Arr;
        };

        /*Array elements assigned*/
        __arrAssign = (Arr) => Arr.sort(function (a, b) {
            return a - b
        });

        /*Check current device*/
        __checkDevice = (optionObj = {}) => {
            var wW = $(window).width();
            var iter = 0;
            $.each(optionObj, (index, item) => {
                unAssignedArr[iter] = index;
                iter++;
            });

            assignedArr = __arrAssign(unAssignedArr);

            $.each(assignedArr, (index, item) => {
                if (wW < item) {
                    deviceKey = item;
                    return false;
                }
            });

            return deviceKey;
        };
        /*Check Device*/

        /*Initialize*/
        __init = (e) => {

            /*define
           properties*/
            var o = option;
            var hObj = o.handle;
            var defaultHeight = $(window).height();
            var negH, posH, oH;
            /* /define
                properties*/
            deviceKey = __checkDevice(hObj);

            /*Conditional
                Rules*/
            negH = (o.handle[deviceKey].negative == undefined || isNaN(o.handle[deviceKey].negative) || o.handle[deviceKey].negative < 0) ? 0 : o.handle[deviceKey].negative;
            posH = (o.handle[deviceKey].positive == undefined || isNaN(o.handle[deviceKey].positive) || o.handle[deviceKey].positive < 0) ? 0 : o.handle[deviceKey].positive;
            oH = (o.handle[deviceKey].height == 'asWindow') ? defaultHeight - negH + posH : o.handle[deviceKey].height - negH + posH;
            /* /Conditional
                Rules*/

            e.css({
                'height': oH,
            });
        };
        /* /Initialize*/

        window.addEventListener('resize', function () {
            __init(e);
            return false;
        }, true);

        __init(e);

    };
    /* /Custom heightAdjust() plugin*/

    /*Affected to selector with heightAdjust() method when DOM ready or window resize*/
    /*DOM ready*/
    $('.main_top').heightAdjust({
        handle: {
            768: {
                height: 'asWindow', /*only screen and (max-width : 768)*/
                negative: 150,
                // positive:
            },
            992: {
                height: 'asWindow',
                negative: 150, /*only screen and (max-width : 992)*/
                // positive:
            },
            1200: {
                height: 'asWindow',
                negative: 150, /*only screen and (max-width : 1200)*/
                // positive:
            },
            2600: {
                height: 'asWindow',
                negative: 150, /*only screen and (max-width : 2600)*/
                // positive:
            },

            /**
             * someDeviceSize: {
             *                    height: 'asWindow' (or [0 - infinite]),
             *                    negative : (or [0 - infinite]),
             *                    positive: (or [0 - infinite])
             *                          }
             * **/

        }
    });
    /* /DOM ready*/
    /* /Affected to selector with heightAdjust() method when DOM ready or window resize*/

})(jQuery);
/*Height Adjust function for adjust selector height scheduled selector*/
