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
$(document).ready(function(){

    $('.r-carousel')
        .on('init', () => {
            $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
            $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
            $('.slick-slide[data-slick-index="1"]').addClass('gt1');
            $('.slick-slide[data-slick-index="2"]').addClass('gt2');
        })
        .slick({
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 5
        }).on('beforeChange', (event, slick, current, next) => {
        $('.slick-slide.gt2').removeClass('gt2');
        $('.slick-slide.gt1').removeClass('gt1');
        $('.slick-slide.lt1').removeClass('lt1');
        $('.slick-slide.lt2').removeClass('lt2');

        const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
        const lt1 = (current < next && current > 0) ? current : next - 1;
        const gt1 = (current < next || next === 0) ? next + 1 : current;
        const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

        $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
        $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
        $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
        $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

        // Clone processing when moving from 5 to 0
        if (current === 5 && next === 0) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
        }

        // Clone processing when moving from 0 to 5
        if (current === 0 && next === 5) {
            $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
            $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
            $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
            $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
        }
    });

    $('.r-right').click(function () {
        $('.r-carousel').slick('slickNext');
    });
    $('.r-left').click(function () {
        $('.r-carousel').slick('slickPrev');
    });
});
/* /Roof Types Carousel Center Mode With Zoom Effect*/

/* /Javascript Document*/